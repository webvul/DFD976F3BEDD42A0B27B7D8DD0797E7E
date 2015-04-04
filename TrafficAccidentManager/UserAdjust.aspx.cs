using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Web.Services;
using System.Data;

using PVDM.Common;
using Maticsoft.DBUtility;

public partial class popup_Pages_UserAdjust : System.Web.UI.Page
{
    private Dictionary<string, string> dicPersonCols = new Dictionary<string, string>();
    private DataTable dtPersons = null;

    protected void Page_Load(object sender, EventArgs e)
    {
        dicPersonCols.Add("__Post", "Role");
        dicPersonCols.Add("__Groups", "Groups");
        dicPersonCols.Add("__Status", "Status");
        dicPersonCols.Add("__Privilege", "Privilege");

        object userRole = Session["Session_UserRole"];
        if (userRole == null || userRole.ToString() == "" || !userRole.ToString().Equals("1"))
        {
            Session.Clear();
            Pub.OvertimeResponse();
            return;
        }

        if (!IsPostBack)
        {
            //ViewState["SortCol"] = "Person_Role,Person_Name";
            //ViewState["OrderDir"] = "asc";
            Bind();
        }
        else
        {
            if (Request.Form["__EVENTTARGET"] == "Sort")//排序
            {
            }
            else //if (Request.Form["__EVENTTARGET"] == "Reload")//添加或删除行后刷新页面，如果在点击排序后再通过javascript的location.reload()刷新时会弹出提示框
            {
                Bind();
            }
        }
    }
    private void Bind()
    {
        DB.BLL.Person bllPerson = new DB.BLL.Person();
        DataSet ds = bllPerson.GetList("view_person", "Status = 1");
        if (ds == null || ds.Tables.Count <= 0 || ds.Tables[0].Rows.Count <= 0)
        {
            return;
        }
        dtPersons = ds.Tables[0];
        this.gvPersonInJob.DataSource = this.dtPersons.DefaultView;
        this.gvPersonInJob.DataBind();

        ds.Clear();
        ds = bllPerson.GetList("view_person", "Status = 2");
        if (ds == null || ds.Tables.Count <= 0 || ds.Tables[0].Rows.Count <= 0)
        {
            return;
        }
        dtPersons = ds.Tables[0];
        this.gvPersonLeave.DataSource = this.dtPersons.DefaultView;
        this.gvPersonLeave.DataBind();
    }

    protected void gvProjects_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        GridView gv = (GridView)sender;
        int[] colsIndex = new int[] { 3, 4, 5, 6, 7, 8, 10, 11 };
        string[] colsName = new string[colsIndex.Length];
        string[] colsType = new string[colsIndex.Length];
        for (int i = 0; i < colsIndex.Length; i++)
        {
            colsName[i] = ((BoundField)gv.Columns[colsIndex[i]]).DataField.TrimEnd('_');
            bool result = this.dicPersonCols.ContainsKey(colsName[i]);
            if (result == false)
            {
                colsType[i] = "s";
            }
            else
            {
                colsType[i] = (string)(this.dicPersonCols[colsName[i]]);
            }
        }
        switch (e.Row.RowType)
        {
            case DataControlRowType.DataRow:
                foreach (TableCell cell in e.Row.Cells)
                {
                    if (cell.Text == "&nbsp;")
                    {
                        cell.Text = "";
                    }
                }
                string key = gv.DataKeys[e.Row.RowIndex].Value.ToString();
                e.Row.Cells[9].Text = "<a href='#this'>重设</a>";

                for (int i = 0; i < colsIndex.Length; i++)
                {
                    int colIndex = colsIndex[i];
                    e.Row.Cells[colIndex].Attributes.Add("class", "Editable");
                    e.Row.Cells[colIndex].Attributes.Add("onclick", "EditData('" + key + "','Person','" + colsName[i] + "','" + colsType[i] + "');");
                }
                //密码
                string colName = ((BoundField)gv.Columns[9]).DataField.TrimEnd('_');
                e.Row.Cells[9].Attributes.Add("class", "Editable");
                e.Row.Cells[9].Attributes.Add("onclick", "EditData('" + key + "','Person','" + colName + "','" + "password" + "');");
                break;
        }
    }
    protected void gvProjects_Sorting(object sender, GridViewSortEventArgs e)
    {
        string oldSortCol = ViewState["SortCol"].ToString();
        string oldOrderDir = ViewState["OrderDir"].ToString();
        if (e.SortExpression == oldSortCol)
        {
            if (oldOrderDir == "asc")
            {
                ViewState["OrderDir"] = "desc";
            }
            else
            {
                ViewState["OrderDir"] = "asc";
            }
        }
        else
        {
            ViewState["SortCol"] = e.SortExpression;
            ViewState["OrderDir"] = "asc";
        }
        Bind();
    }

    #region ajax
    /// <summary>
    /// 更新数据
    /// </summary>
    /// <param name="editModelId">模型编号</param>
    /// <param name="editModelName">模型名称</param>
    /// <param name="editColName">编辑的字段名称</param>
    /// <param name="value">修改的值</param>
    /// <returns>是否更新成功</returns>
    [WebMethod]
    public static bool UpdateData(string editModelId, string editModelName, string editColName, string editValue, string colType)
    {
        DB.BLL.Person bllPerson = new DB.BLL.Person();
        int id;
        if (editModelId != null && editModelId.Trim() != "")
        {
            id = int.Parse(editModelId);
        }
        else
        {
            return false;
        }
        editColName = editColName.TrimStart('_');
        if (editColName.ToLower().Equals("username"))
        {
            bool result = bllPerson.Exists(id, editColName, editValue);
            if (result == true)
            {
                return false;
            }
            if (string.IsNullOrEmpty(editValue.Trim()))
            {
                return false;
            }
        }
        else if (editColName.ToLower().Equals("names"))
        {
            bool result = bllPerson.Exists(id, editColName,editValue);
            if (result == true)
            {
                return false;
            }
            if (string.IsNullOrEmpty(editValue.Trim()))
            {
                return false;
            }
        }
        if (colType.Equals("password"))
        {
            editValue = DESEncrypt.Encrypt(editValue);
        }
        
        if (editColName.ToLower().Equals("privilege"))
        {
            string val = string.Empty;
            switch (editValue)
            {
                case "1":
                    val = "2";
                    break;
                case "2":
                    val = "1";
                    break;
                case "3":
                    val = "3";
                    break;
            }
            return bllPerson.Update(id, editColName, editValue) && bllPerson.Update(id, "Roles", val);
        }
        else
        {
            return bllPerson.Update(id, editColName, editValue);
        }
    }

    #endregion
}