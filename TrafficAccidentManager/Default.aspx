<%@ Page language="c#" Codebehind="default.aspx.cs" AutoEventWireup="True" Inherits="TrafficAccidentManager._Default" %>


<HTML>
	<HEAD>
		<title>交通事故档案管理系统</title>
		<META http-equiv="Content-Type" content="text/html; charset=gb2312">
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<LINK href="css/style.css" type="text/css" rel="stylesheet">
		<style>
		body {  background-image: url(Image/bodybg.gif)}
  		.ms_bg_right0 { FILTER: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#ffffff', endColorStr='#CEDFF6', gradientType='1') }
		</style>
		<script language="JavaScript" src="js/common.js" type="text/javascript"></script>        

	</HEAD>
	<body class="btn" onload="document.all['tb_user'].focus();">
		<form id="Form1" method="post" runat="server">
			<table id="tb9" border="0" width="100%" height="100%" >
				<tr>
					<td align="center" >
                        <TABLE id="Table2" cellSpacing="0" borderColorDark="#ffffff" borderColorLight="#000000"
							cellPadding="0" border="0" frame="border" style="WIDTH: 500px; HEIGHT: 300px; background-image: url(Image/loginkq.gif); background-repeat: no-repeat;">
							<TR>
								<TD style="HEIGHT: 40px" colSpan="3">
									</TD>
							</TR>
							<TR>
								<TD colSpan="3" valign="top" style="HEIGHT: 160px">
									<table id="table5" cellSpacing="0" cellPadding="0" border="0" width="100%" height="100%">
										<tr>
											<td>
												<TABLE id="Table4" cellSpacing="0" cellPadding="0" width="100%" height="100%" align="right"
													border="0">
													<tr>
														<td colSpan="2" align="center" valign="middle" style="HEIGHT: 44px">
															<div align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
																<asp:Label id="Label3" runat="server" Font-Bold="True" Font-Size="Large" Font-Names="华文新魏">交通事故档案管理系统</asp:Label>
																</div>
														</td>
													</tr>
													<TR>
														<td valign="middle" align="center" style="width: 170px; height: 164px;">
															<asp:Image id="Image2" runat="server" ImageUrl="Image/logo.gif"></asp:Image></td>
														<TD style="HEIGHT: 164px" align="center"><FONT face="���"></FONT>
															<TABLE id="Table3" cellSpacing="3" cellPadding="0" border="0" height="120" style="width: 292px">
																<TR>
																	<TD width="97" style="HEIGHT: 27px" align="left" class="sys_grid_cell_label">&nbsp;
																		<asp:label id="Label1" runat="server" Width="70px">用户名:</asp:label></TD>
																	<TD class="sys_grid_cell_label" style="HEIGHT: 27px; width: 196px;">
																		<INPUT class="ms_bg_right0" id="tb_user" onkeydown="if(event.keyCode==13)event.keyCode=9"
																			style="WIDTH:120px; HEIGHT:22px" type="text" name="tb_user" runat="server" tabIndex="7"
																			value="admin" size="14"></TD>
																</TR>
																<TR>
																	<TD width="97" align="left" class="sys_grid_cell_label" style="height: 33px"><FONT face="����"> </FONT>&nbsp;
																		<asp:label id="Label2" runat="server" CssClass="ms_bg_right0">密码:</asp:label></TD>
																	<TD class="sys_grid_cell_label" style="width: 196px; height: 33px;">
																		<INPUT class="ms_bg_right0" id="tb_password" onkeydown="if(event.keyCode==13)event.keyCode=9"
																			type="password" name="tb_password" runat="server" tabIndex="7" size="14" style="WIDTH: 120px; HEIGHT: 22px">
																	</TD>
																</TR>
																<TR>
																	<TD>&nbsp;&nbsp;</TD>
																	<TD style="width: 196px">
																		<asp:label id="lbmsg" runat="server" ForeColor="Red" Width="195px" Visible="False">用户名</asp:label></TD>
																</TR>
																<TR>
																	<TD align="center" colSpan="2" style="height: 32px">
																		<asp:button id="btn_ok" runat="server" Width="60px" Text="登 录" Height="22px" tabIndex="9" CssClass="sys_button" onclick="Submit1_ServerClick" ></asp:button>&nbsp;&nbsp;<FONT face="���">&nbsp;&nbsp;&nbsp;&nbsp;
																		</FONT>
																		<asp:button id="btn_cancel" runat="server" Width="60px" Text="取 消" 
                                                                            Height="22px" tabIndex="10" CssClass="sys_button" 
                                                                            OnClientClick="window.opener = null;window.close();" onclick="btn_cancel_Click"></asp:button></TD>
																</TR>
															</TABLE>
                                                            <br />
															
														</TD>
													</TR>
												</TABLE>
											</td>
										</tr>
									</table>
								</TD>
							</TR>
							<TR>
								<TD style="HEIGHT: 30px" align="center">
								    <DIV align="center">
                                    </DIV>

								</TD>
							</TR>
                            <tr>
                                <td align="center" style="height: 32px">
                                </td>
                            </tr>
						</TABLE>
						<DIV align="right">&nbsp;</DIV>
					</td>
				</tr>
			</table>
			</form>
					<script language="javascript">
					<%=msg %>
					</script>
	</body>
</HTML>