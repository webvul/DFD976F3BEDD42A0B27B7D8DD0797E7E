<%@ Page Language="C#" MasterPageFile="WebBlank.master" AutoEventWireup="true" CodeFile="ChangePwd.aspx.cs"
    Inherits="ChangePwd" Title="修改密码" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table id="tblLogin" style="height: auto; text-align: center; width: 300px; margin-top: 10px; margin-left: 30px;">
        <tr>
            <td style="width:75px;" class="label">旧密码：</td>
            <td height="35px" class="label" >
                <input type="password" id="txtPwd" style="width: 180px;" onkeydown="txt_keydown();" onchange="txtPwdChange('txtPwd');" />
            </td>
        </tr>
        <tr>
            <td style="width:75px;" class="label">新密码：</td>
            <td height="35px" class="label">
                <input type="password" id="txtPwd1" style="width: 180px;" onkeydown="txt_keydown();" onchange="txtPwdChange('txtPwd1');" />
            </td>
        </tr>
        <tr>
            <td class="label" style="width:75px;">确认密码：</td>
            <td height="35px" class="label">
                <input type="password" id="txtPwd2" style="width: 180px;" onkeydown="txt_keydown();" onchange="txtPwdChange('txtPwd2');" />
            </td>
        </tr>
        <tr>
            <%-- <td><input type="button" id="btnOK" value="确 定" style="margin:15px 0;" onclick="btnLogin_click();" /></td>--%>
        </tr>
        <tr>
            <td colspan="2" style="padding-top: 20px;">
                <span id="lblInfo" style="color: red; width: 300px; text-align: center;">&nbsp;</span>
            </td>
        </tr>
    </table>
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="js/common.js" type="text/javascript"></script>
    <script src="js/shortcutKey.js" type="text/javascript"></script>
    <script type="text/javascript">
        document.body.onload = function(){
            document.getElementById("txtPwd").focus();
        }
        function txt_keydown()
        {
            if(event.keyCode==13)
            { 
                btnLogin_click();
            }
        }
        function txtPwdChange(pwd)
        {
            var txt = document.getElementById(pwd).value;
            var lbl = document.getElementById("lblInfo")
            var txtlbl = "";
            if (lbl != null) {
                txtlbl = document.getElementById("lblInfo").innerText;
            }
            if (txt != null && txt != null) {
                switch(pwd) {
                case "txtPwd":
                    if (txtlbl == "请输入旧密码") {
                        lbl.innerHTML = "";
                    }
                	break;
                case "txtPwd1":
                    if (txtlbl == "请输入新密码") {
                        lbl.innerHTML = "";
                    }
                	break;
                case "txtPwd2":
                    if (txtlbl == "两次输入的密码不一致") {
                        lbl.innerHTML = "";
                    }
                    break;
                }
            }
        }
        function checkInfo()
        {
            if( document.getElementById("txtPwd").value == "" )
            {
                //MessageBox.show("提示","请输入旧密码！");
                document.getElementById("lblInfo").innerHTML = "请输入旧密码";
                document.getElementById("txtPwd").focus();
                return false;
            }
            if( document.getElementById("txtPwd1").value == "" )
            {
                //MessageBox.show("提示","请输入新密码！");
                document.getElementById("lblInfo").innerHTML = "请输入新密码"
                document.getElementById("txtPwd1").focus();
                return false;
            }
            if( document.getElementById("txtPwd1").value != document.getElementById("txtPwd2").value )
            {
                //MessageBox.show("提示","两次输入的密码不一致！");
                document.getElementById("lblInfo").innerHTML = "两次输入的密码不一致"
                document.getElementById("txtPwd2").focus();
                return false;
            }
            return true;
        }

        function btnLogin_click()
        {
            if( checkInfo() )
            {
                //document.getElementById("lblInfo").innerText = "正在修改，请稍候...";
                var arg = document.getElementById("txtPwd").value +'`' + document.getElementById("txtPwd1").value;
                <%= ClientScript.GetCallbackEventReference(this, "arg", "btnLogin_click_Over", null)%>; 
            }
        }
        function btnLogin_click_Over(result, context)
        {
            var lblInfo = document.getElementById("lblInfo");
            if(result.indexOf("err:") == 0)
            {
                lblInfo.innerText = result.substring(4);
            }
            else
            {
//                lblInfo.innerText = "修改成功，正在转向页面...";
//                if( E )
//                {
//                    Jok();
//                }
//                else
//                {
//                    window.location = result;
//                }
                  lblInfo.innerText = "密码修改成功";
                  window.top.location.href="Default.aspx";
            }
        }
    </script>
</asp:Content>
