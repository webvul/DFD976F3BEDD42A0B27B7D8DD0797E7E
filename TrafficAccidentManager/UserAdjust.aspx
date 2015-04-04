<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserAdjust.aspx.cs" Inherits="popup_Pages_UserAdjust" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>化工容器协同设计数据管理系统</title>
    <link href="../Css/init.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery.js" type="text/javascript"></script>
    <script src="../js/jquery-ui.min.js" type="text/javascript"></script>
    <link href="../Css/jqueryui/jquery-ui.min.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery-ui-custom.js" type="text/javascript"></script>
    <link href="../Css/header.css" rel="stylesheet" type="text/css" />
    <link href="../Css/master.css" rel="stylesheet" type="text/css" />
    <link href="../Css/grid.css" rel="stylesheet" type="text/css" />
    <script src="../js/common.js" type="text/javascript"></script>
    <script src="../js/edit.js" type="text/javascript"></script>
    <style type="text/css">
        html, body
        {
            height: 100%;
            padding: 0px;
            margin: 0px;
        }
        body
        {
            overflow: auto;
        }
        .title
        {
            font-weight: bolder;
            line-height: 100px;
            font-size: 30px;
            text-align: center;
            height: 100px;
        }
        #mainHeader
        {
            font-size: 18pt;
            font-weight: bold;
            /*font-family: 宋体;*/
            color: White;
            line-height: 46px;
        }
        #mainFooter
        {
            position: absolute;
            left: 0px;
            width: 100%;
            bottom: 0px;
        }
        .content
        {
            position: absolute;
            top: 152px;
            bottom: 30px;
            left: 0px;
            right: 0px;
        }
        .dataContainer
        {
            position: absolute;
            top: 23px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            overflow: auto;
        }
        table.Data td
        {
            border: 1px solid #4297d7;
        }
        #form1
        {
            position: absolute;
            top: 50px;
            left: 0px;
            right: 0px;
            bottom: 30px;
            overflow: auto;
        }
    </style>
</head>
<body>
    <div id="mainHeader">
            <table style="text-align: left; width: 100%">
                <tr id="trHeader1">
                    <td style="width: 90px; font-size: 18pt; font-weight: bold; font-family: Cooper Black; color: Red; border: solid 0px red; font-style: oblique;
                        padding-left: 10px;text-decoration: underline; padding-bottom: 15px;">
                            VDIM 
                    </td>
                    <td style="width: 550px; font-size: 18pt; font-weight: normal; font-family: Arial Black; color: Black; border: solid 0px red;
                        padding-left: 0px;">
                        <span style="margin-left: 5px;"><img src="../images/title-text.png" style="margin-top: 10px; margin-bottom: 25px;"
                            alt="化工容器协同设计数据管理系统" /></span>
                    </td>
                    <td >
                    </td>
                </tr>
            </table>
        </div>
    <form id="form1" runat="server" onsubmit="return false;">
    <div class="title">
        在岗人力资源
    </div>
    <div style="height: 100%; width: 950px; height: 500px; margin: auto; position: relative;
        border: solid 1px #ddd;">
        <div class="grid_title ui-state-default" style="">
            <table style="height: 25px; overflow: hidden; width: 100%;">
                <tr>
                    <th width="32">
                        <input type="checkbox" id="chkAll" name="chkAll" onclick="chkAll_Checked(this.checked);" />
                    </th>
                    <th width="30">
                        序号
                    </th>
                    <th width="80">
                        组别
                    </th>
                    <th width="80">
                        姓名
                    </th>
                    <th width="100">
                        用户名
                    </th>
                    <th width="60">
                        岗位
                    </th>
                    <th width="60">
                        状态
                    </th>
                    <th width="100">
                        办公电话
                    </th>
                    <th width="100">
                        密码
                    </th>
                    <th width="100">
                        管理权限
                    </th>
                    <th width="">
                        备注说明
                    </th>
                    <th width="11">
                    </th>
                </tr>
            </table>
        </div>
        <div class="dataContainer">
            <asp:GridView CssClass="Data" ID="gvPersonInJob" runat="server" AutoGenerateColumns="False"
                DataKeyNames="ID" OnRowDataBound="gvProjects_RowDataBound" AllowSorting="True"
                OnSorting="gvProjects_Sorting" ShowHeader="false">
                <HeaderStyle Height="24" CssClass="grid_title2" />
                <Columns>
                    <asp:TemplateField ItemStyle-Width="32" HeaderText="选择">
                        <%--<HeaderTemplate>
                            <label for="chkAll">
                                全选</label><input type="checkbox" id="chkAll" name="chkAll" onclick="chkAll_Checked(this.checked);" />
                        </HeaderTemplate>--%>
                        <ItemTemplate>
                            <input type="checkbox" id="chkRow" name="chkRow" style="padding: 0; margin: 0;" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-Width="30" HeaderText="序号" ItemStyle-HorizontalAlign="Center">
                        <ItemTemplate>
                            <asp:Label ID="Label1" runat="Server" Text="<%#(Container as GridViewRow).RowIndex + 1%>"></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="ID" HeaderText="ID" ItemStyle-CssClass="ID" ItemStyle-Width="0" />
                    <asp:BoundField DataField="__Groups" HeaderText="组别" ItemStyle-Width="80" />
                    <asp:BoundField DataField="Names" HeaderText="姓名" ItemStyle-Width="80" />
                    <asp:BoundField DataField="UserName" HeaderText="用户名" ItemStyle-Width="100" ItemStyle-HorizontalAlign="Left" />
                    <asp:BoundField DataField="__Post" HeaderText="岗位" ItemStyle-Width="60" />
                    <asp:BoundField DataField="__Status" HeaderText="状态" ItemStyle-Width="60" />
                    <asp:BoundField DataField="Telephone" HeaderText="办公电话" ItemStyle-Width="100" />
                    <asp:BoundField DataField="Password" HeaderText="密码" ItemStyle-Width="100" />
                    <asp:BoundField DataField="__Privilege" HeaderText="管理权限" ItemStyle-Width="100" />
                    <asp:BoundField DataField="Remark" HeaderText="备注说明" ItemStyle-Width="" ItemStyle-HorizontalAlign="Left" />
                </Columns>
            </asp:GridView>
        </div>
    </div>
    <div style="border-style: none; width: 950px; margin: auto; text-align: right;">
        <input type="button" id="btnDel" value="删除人员" class="btn_2k3 ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
            onclick="ConfirmDel();" />
        <input type="button" id="btnAdd" value="添加人员" class="btn_2k3 ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
            onclick="NewUser();" style="margin-left: 0px; " />
    </div>
    <div class="title">
        历史人员记录
    </div>
    <div style="height: 100%; width: 950px; height: 150px; margin: auto; position: relative;
        border: solid 1px #ddd;">
        <div class="grid_title ui-state-default" style="">
            <table style="height: 25px; overflow: hidden; width: 100%;">
                <tr>
                    <th width="32">
                        <input type="checkbox" id="chkAll1" name="chkAll1" onclick="chkAll1_Checked(this.checked);" />
                    </th>
                    <th width="30">
                        序号
                    </th>
                    <th width="80">
                        组别
                    </th>
                    <th width="80">
                        姓名
                    </th>
                    <th width="100">
                        用户名
                    </th>
                    <th width="60">
                        岗位
                    </th>
                    <th width="60">
                        状态
                    </th>
                    <th width="100">
                        办公电话
                    </th>
                    <th width="100">
                        密码
                    </th>
                    <th width="100">
                        管理权限
                    </th>
                    <th width="">
                        备注说明
                    </th>
                    <th width="11">
                    </th>
                </tr>
            </table>
        </div>
        <div class="dataContainer">
            <asp:GridView CssClass="Data" ID="gvPersonLeave" runat="server" AutoGenerateColumns="False"
                DataKeyNames="ID" OnRowDataBound="gvProjects_RowDataBound" AllowSorting="True"
                OnSorting="gvProjects_Sorting" ShowHeader="false">
                <HeaderStyle Height="24" CssClass="grid_title2"></HeaderStyle>
                <Columns>
                    <asp:TemplateField ItemStyle-Width="32" HeaderText="选择">
                        <%--<HeaderTemplate>
                            <label for="chkAll1">
                                全选
                            </label>
                            <input type="checkbox" id="chkAll1" name="chkAll1" onclick="chkAll1_Checked(this.checked);" />
                        </HeaderTemplate>--%>
                        <ItemTemplate>
                            <input type="checkbox" id="chkRow1" name="chkRow1" style="padding: 0; margin: 0;" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-Width="30" HeaderText="序号" ItemStyle-HorizontalAlign="Center">
                        <ItemTemplate>
                            <asp:Label ID="Label1" runat="Server" Text="<%#(Container as GridViewRow).RowIndex + 1%>"></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="ID" HeaderText="ID" ItemStyle-CssClass="ID" ItemStyle-Width="0" />
                    <asp:BoundField DataField="__Groups" HeaderText="组别" ItemStyle-Width="80" />
                    <asp:BoundField DataField="Names" HeaderText="姓名" ItemStyle-Width="80" />
                    <asp:BoundField DataField="UserName" HeaderText="用户名" ItemStyle-Width="100" ItemStyle-HorizontalAlign="Left" />
                    <asp:BoundField DataField="__Post" HeaderText="岗位" ItemStyle-Width="60" />
                    <asp:BoundField DataField="__Status" HeaderText="状态" ItemStyle-Width="60" />
                    <asp:BoundField DataField="Telephone" HeaderText="办公电话" ItemStyle-Width="100" />
                    <asp:BoundField DataField="Password" HeaderText="密码" ItemStyle-Width="100" />
                    <asp:BoundField DataField="__Privilege" HeaderText="管理权限" ItemStyle-Width="100" />
                    <asp:BoundField DataField="Remark" HeaderText="备注说明" ItemStyle-Width="" ItemStyle-HorizontalAlign="Left" />
                </Columns>
            </asp:GridView>
        </div>
    </div>
    </form>
    <div id="mainFooter">
    </div>
</body>
<script type="text/javascript">
    //添加
    function NewUser() {
        var options = {
            title: "添加人员",
            height: 500,
            width: 375,
            modal: true,
            resizable: false
        }
        var url = "../popup/pages/AddPerson.aspx";
        var dialogId = "AddPersonDialog";
        Dialog.ShowInTop(url, dialogId, options, function () {
            window.top.frames[dialogId + "_iframe"].AddPerson();
        });

    }
</script>
<script language="javascript" type="text/javascript">
    //删除
    var selectedRowIndexes = "";

    // 多选的全选与取消
    function chkAll_Checked(boolvalue) {
        if (document.all.chkRow != null) {
            if (document.all.chkRow.length > 1) {
                for (var i = 0; i < document.all.chkRow.length; i++) {
                    document.all.chkRow[i].checked = boolvalue;
                }
            }
            else {
                document.all.chkRow.checked = boolvalue;
            }
        }
    }

    // 多选的全选与取消
    function chkAll1_Checked(boolvalue) {
        if (document.all.chkRow1 != null) {
            if (document.all.chkRow1.length > 1) {
                for (var i = 0; i < document.all.chkRow1.length; i++) {
                    document.all.chkRow1[i].checked = boolvalue;
                }
            }
            else {
                document.all.chkRow1.checked = boolvalue;
            }
        }
    }
    //点击删除时先判断是否选中了行，若有则提示确认
    selectedID = "";
    function ConfirmDel() {
        selectedID = "";
        if (document.all.chkRow != null) {
            if (document.all.chkRow.length > 1) {
                for (var i = 0; i < document.all.chkRow.length; i++) {
                    var chk = document.all.chkRow;
                    if (chk[i].checked) {
                        selectedRowIndexes += $(chk[i]).parent().parent().find(".ID").text() + ",";
                    }
                }
            }
            else {
                if (document.all.chkRow.checked) {
                    selectedRowIndexes = "0";
                }
            }
        }
        if (selectedRowIndexes.length == 0) {
            MessageBox.show("提示", "没有行被选中！", false);
            return false;
        }
        else {
            var message = "确定删除选中的人员吗？";
            Dialog.Confirm(message, null, function () {
                DelUsers('del');
            });
        }
    }
    function DelUsers(delType) {

        P = window.parent;
        var arg = { ids: selectedRowIndexes };
        post("../popup/Pages/AddPerson.aspx/DeletePerson", arg, function (data) {
            if (data) {
                MessageBox.show("提示", "删除人员成功！", false);
                window.location.reload();
            }
        });
    }
</script>
</html>
