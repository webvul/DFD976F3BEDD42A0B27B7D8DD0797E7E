using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

using PVDM.Common;

public partial class ChangePwd : System.Web.UI.Page, ICallbackEventHandler
{
    protected void Page_PreInit(Object sender, EventArgs e)
    {
        if (Request.UrlReferrer != null && Request.UrlReferrer.ToString().ToLower().EndsWith("/lhgdialog.html"))//JDialog
        {
            this.MasterPageFile = "WebBlank.master";
        }
    }
    
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (!IsPostBack)
        //{
            //页面回发后会改变Request.UrlReferrer，将其指向当前页面，所以需要进行判断：只有在第一次请求页面的时候才储存该信息
            //如果有A,B两个页面，在浏览器中直接请求A页面，在A页面的中Page_Load事件中导航到B 页面，则 Request.UrlReferrer返回空。
            //因为 在Page_load事件中页面还未初始化，所以无法记录当前页的信息，导航到b页面也就无法获得上一页面的信息；
            //if (Request.UrlReferrer != null)  
            //{
            //    ViewState["Request_UrlReferrer"] = Request.UrlReferrer.ToString();
            //}
        //}
    }

    #region ICallbackEventHandler 成员

    private string argCallback = "";
    string ICallbackEventHandler.GetCallbackResult()
    {
        if (string.IsNullOrEmpty(argCallback))
        {
            //正常情况下不该进入此处，除非恶意提交
            Log.WriteLog(99, "登录时传入了空参数，客户端IP：" + Request.UserHostAddress);
            return "err:用户名或密码错误!";
        }
        else
        {
            string[] pwds = argCallback.Split('`');
            DB.BLL.Person bllPerson = new DB.BLL.Person();
            DataSet ds = bllPerson.GetList("UserName = '" + Session[Pub.Session_UserName].ToString() + "' and Password = '" + Maticsoft.DBUtility.DESEncrypt.Encrypt(pwds[0]) + "'");
            if (ds == null || ds.Tables.Count <= 0 || ds.Tables[0].Rows.Count <= 0)
            {
                return "err:旧密码错误!";
            }

            try
            {
                int id = int.Parse(ds.Tables[0].Rows[0]["ID"].ToString());
                bllPerson.Update(id, "Password", Maticsoft.DBUtility.DESEncrypt.Encrypt(pwds[1]));
            }
            catch (System.Exception ex)
            {
                Log.WriteLog("修改密码时出错，错误提示为：" + ex.Message);
                argCallback = "修改密码时出错";
            }
            return argCallback;
        }
    }

    void ICallbackEventHandler.RaiseCallbackEvent(string eventArgument)
    {
        this.argCallback = eventArgument;
    }

    #endregion
}
