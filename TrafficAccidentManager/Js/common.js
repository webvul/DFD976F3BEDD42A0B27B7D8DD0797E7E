		
	//����������¼�������¼����Ϣ
	function OnRowClick(TableName,HdnKey,value)
	{ 

		TB = document.getElementById(TableName);
		for(var i = 1; i < TB.rows.length; i++)
		{
			TB.rows[i].style.backgroundColor="";  
		}
		event.srcElement.parentElement.style.backgroundColor="#FFFFAC";
		document.getElementById(HdnKey).value = value;//event.srcElement.parentElement.cells[0].children[0].value;
	   
	} 
	//���������ʹ�б�ɫ   
	function OnRowClick1(TableName)
	{ 
		TB = document.getElementById(TableName);
		for(var i = 1; i < TB.rows.length; i++)
		{
			TB.rows[i].style.backgroundColor="";  
		}
		event.srcElement.parentElement.style.backgroundColor="#FFFFAC";
	}    		
    //˫������У��������巵�ز�ˢ��ҳ��
    function OnRowClickRefresh(s1,s2,width,height,url1)
    {
       window.showModalDialog('showModal.aspx?url='+s1+'?ID='+s2,'','dialogWidth:'+width+';dialogHeight:'+height+';help:no;status:no;dialogHide:yes;scrollbars:no');
	  window.location=url1+"?tj="+document.getElementById('ddl_tj').value+"&value="+document.getElementById('tb_value').value; 
    }
    function OnClickCheck(s1,s2,width,height)
    {
       window.showModalDialog('showModal.aspx?url='+s1+'?ID='+s2,'','dialogWidth:'+width+';dialogHeight:'+height+';help:no;status:no;dialogHide:yes;scrollbars:no');
	   window.location="check_grid.aspx?tj="+document.getElementById('ddl_tj').value+"&value="+document.getElementById('tb_value').value+"&tj1="+document.getElementById('ddl_tj1').value+"&value1="+document.getElementById('tb_value1').value; 
	   
    }
	function OnClickCheck1(s1,s2,width,height)
    {
       window.showModalDialog('showModal.aspx?url='+s1+'?ID='+s2,'','dialogWidth:'+width+';dialogHeight:'+height+';help:no;status:no;dialogHide:yes;scrollbars:no');
	   //window.location="check_gd.aspx"; 
	   window.location="check_gd.aspx?USERID="+document.getElementById('hd_userid').value;
	   
    }
    function OnClickCheck2(s1,s2,width,height)
    {
       window.showModalDialog('../ShowModal.aspx?url='+s1+'?ID='+s2,'','dialogWidth:'+width+';dialogHeight:'+height+';help:no;status:no;dialogHide:yes;scrollbars:no');
	}
    function OnQuery(s1,s2,width,height)
    {
       window.showModalDialog('showModal.aspx?url='+s1+'?ID='+s2,'','dialogWidth:'+width+';dialogHeight:'+height+';help:no;status:no;dialogHide:yes;scrollbars:no');
    }
	 function selectdepart(control)
	{	  
		var s=window.showModalDialog('../ShowModal.aspx?url=department_tree.aspx','','dialogWidth:250px;dialogHeight:400px;help:no;status:no;dialogHide:yes;scrollbars:no');
		if ((s!='')&&(s!=null))  
		   document.getElementById(control).value=s;
	}
	
    //����Աѡ�񴰿�,���Զ�ѡ��Ҳ�ɵ�ѡ;ispwd=1������֤��ispwd=0����Ҫ��֤��
    //��ƣ�wrd   
    //���ڣ�2009-02-25
    function selectper(ctl_id, ctl_name,ispwd)
    {
	    var s=window.showModalDialog('../ShowModal.aspx?url=frm_dept_per.aspx?ispwd='+ispwd+'','','dialogWidth:580px;dialogHeight:490px;help:no;status:no;dialogHide:yes;scrollbars:no;center:yes');
	    if(s == null) return;
	    document.all[ctl_id].value = s.ID;
	    document.all[ctl_name].value = s.Name;	
    }
    
    function selectmulper(ctl_id, ctl_name,ispwd)
    {
	    var s=window.showModalDialog('../ShowModal.aspx?url=frm_dept_mulper.aspx?ispwd='+ispwd+'','','dialogWidth:580px;dialogHeight:490px;help:no;status:no;dialogHide:yes;scrollbars:no;center:yes');
	    if(s == null) return;
	    document.all[ctl_id].value = s.ID;
	    document.all[ctl_name].value = s.Name;	
    }
    function select_mul_per(ctl_id, ctl_name)
    {
	    var s=window.showModalDialog('../ShowModal.aspx?url=select_mul_per.aspx','','dialogWidth:580px;dialogHeight:490px;help:no;status:no;dialogHide:yes;scrollbars:no;center:yes');
	   
	    if(s == null) return;
	    document.all[ctl_id].value = s.ID;
	    document.all[ctl_name].value = s.Name;	
    }
    //ѡ����˵Ĵ򿨼�¼
    //���ڣ�2010-12-25
    function select_mul_card(ctl_id, per_id)
    {
	    var s=window.showModalDialog('../ShowModal.aspx?url=select_mul_card.aspx?perid='+per_id+'','','dialogWidth:580px;dialogHeight:490px;help:no;status:no;dialogHide:yes;scrollbars:no;center:yes');
	   
	    if(s == null) return;
	    document.all[ctl_id].value = s.ID;

    }
    //����ѡ��
    //����ˣ�wrd 
    //���ڣ�2009-2-26
    function selectdept(ctl_id, ctl_name)
    {
	    var s=window.showModalDialog('../ShowModal.aspx?url=department_tree.aspx','','dialogWidth:250px;dialogHeight:430px;center: Yes; help: No; resizable: no; status: No;unadorned: Yes;scroll:No');
	    if(s == null) return;
	    document.all[ctl_id].value = s.ID;
	    document.all[ctl_name].value = s.Name;	
    }

	function selectfactory(control)
	{	  
		var s=window.showModalDialog('../showModal.aspx?url=factory.aspx','','dialogWidth:600px;dialogHeight:550px;help:no;status:no;dialogHide:yes;scrollbars:no');
		if ((s!='')&&(s!=null))  
		   document.getElementById(control).value=s;
	}  
	function selectequipment(control1,control2)
	{	  
		var s=window.showModalDialog('../ShowModal.aspx?url=equipment.aspx','','dialogWidth:600px;dialogHeight:580px;help:no;status:no;dialogHide:yes;scrollbars:no');
        if (s==null) return;
        var arr=s.split("~");
        if (arr[0]==null) return;
        document.getElementById(control1).value=arr[0];
        if (arr[1]==null) return;
        document.getElementById(control2).value=arr[1];
	}  
	function selectequipment1(control1,control2,control3)
	{	  
		var s=window.showModalDialog('../ShowModal.aspx?url=equipment.aspx','','dialogWidth:600px;dialogHeight:580px;help:no;status:no;dialogHide:yes;scrollbars:no');
        if (s==null) return;
        var arr=s.split("~");
        if (arr[0]==null) return;
        document.getElementById(control1).value=arr[0];
        if (arr[1]==null) return;
        document.getElementById(control2).value=arr[1];
        if (arr[2]==null) return;
        document.getElementById(control3).value=arr[2];
	}  
	
	function OnPwd(s1)
	{
       window.showModalDialog('showModal.aspx?url='+ s1 +'','dialogWidth:450px;dialogHeight:200px;help:no;status:no;dialogHide:yes;scrollbars:no');
    }
    function OnPwd2(s1)
	{
       window.showModalDialog('showModal.aspx?url='+ s1 +'','dialogWidth:800px;dialogHeight:640px;help:no;status:no;dialogHide:yes;scrollbars:no');
    }

	// ��ҳ���ϵ�Table���������������е�д�뵽Excel�ļ��У�ʵ�����ݵĵ������ܣ����ַ�����
    // ��ƣ�wrd
    // ���ڣ�2009-3-3
    function ExportExcel(tableObj)
    {
	    try{
     
		    //����
		    var elTable = document.getElementById(tableObj);
		    var oRangeRef = document.body.createTextRange();
		    var sMsg = "����ʧ�ܣ��볢�������²�������IE����������ߡ�Ieternetѡ�����ȫ������Intranet���Զ��弶��AxtiveX�ؼ��Ͳ����������û�б��Ϊ��ȫ��AxtiveX���г�ʼ���ͽű����С�һ����Ϊ�����á�״̬";
		    if (oRangeRef==null){alert(sMsg);return;}

		    oRangeRef.moveToElementText( elTable );
		    oRangeRef.execCommand( "Copy" );

		    //ճ��
		    var appExcel = new ActiveXObject( "Excel.Application" );
		    if (appExcel==null){alert(sMsg);return;}
		    appExcel.Visible = true;
		    appExcel.Workbooks.Add().Worksheets.Item(1).Paste();
		    appExcel = null;
	    }
	    catch(e){alert("Excel�����ʼ��ʧ�ܣ�"+e)}
    }


    function ToExcel(TableObject)
    {
        var o = document.getElementById(TableObject);
        window.oldOnError = window.onerror;
        var sMsg = "����ʧ�ܣ��볢�������²�������IE����������ߡ�Ieternetѡ�����ȫ������Intranet���Զ��弶��AxtiveX�ؼ��Ͳ����������û�б��Ϊ��ȫ��AxtiveX���г�ʼ���ͽű����С�һ����Ϊ�����á�״̬";
        window.onerror = function (err)
        {
        if (err.indexOf('utomation') != -1)
        {
          alert(sMsg); 
          return true;
        }
        else return false;
        };
        var xls    = new ActiveXObject ( "Excel.Application" );  
	    var i,j; 
	    var oWB = xls.Workbooks.Add(); 
	    var oSheet = oWB.ActiveSheet;
	    for(i=0;i< o.rows.length;i++) //�ӵ�һ�п�ʼ
	    {
		    for(j=1;j< o.rows(i).cells.length;j++)//�ӵ�2�п�ʼ 
		    {
			    if(i>0) 
			    {	
				    oSheet.Cells(i+1,j).Font.Size = 10;
			    }
			    else 
			    {				
				    //oSheet.Cells(i+1,j).Interior.ColorIndex = 15;
				    oSheet.Cells(i+1,j).VerticalAlignment = -4108;
				    oSheet.Cells(i+1,j).HorizontalAlignment = -4108;
			    }
    			
			    oSheet.Cells(i+1,j).Value = o.rows(i).cells(j).innerText; 	
			    oSheet.Cells(i+1,j).Borders.Weight=2;	
		    }
	    }
	    oSheet.Rows(1).RowHeight = 30;
	    oSheet.Columns.AutoFit;
	    xls.Visible = true; 
	    xls.UserControl = true; 	
    } 
    //�򿪴�ӡ����
    //��ƣ�wrd   
    //���ڣ�2004-08-09
    function OpenPrintWin(Module,Width,Height)
    {
	    var sOpen = Module;
	    var sStyle = "top=0 left=0 height="+Height+",width="+Width+",toolbar=no,status=no,direction=yes,scrollbars=no,resizable=yes, fullscreen = no";
	    window.open( sOpen,"_blank",sStyle);
    }		
// �������Ŀؼ��е�ֵ�Ƿ�Ϊ��
// ��ƣ�������
// ���ڣ�2004-08-27
function CheckControlValue(oObj)
{
	var bRet = true;
	var oValue = document.all[oObj].value;
	if(oValue == "")
	{
		bRet = false;
	}
	return bRet;
}

// �������Ŀؼ��е���ֵ�Ƿ���Ч���Ƿ�Ϊ��
// ��ƣ�������
// ���ڣ�2004-08-30
function CheckControlNumber(oObj)
{
	var bRet = true;
	var oValue = document.all[oObj].value;
	if(oValue == "")
	{
		bRet = false;
	}
	if( isNaN(oValue))
	{
		bRet = false;
	}
	return bRet;
}

/*begin ��String���ͽ���ΪDate����.*/     
   
function parseDate(str)
{
  var   strArray=str.split("   ");   
  var   strDate=strArray[0].split("-");   
  var   strTime=strArray[1].split(":");   
  return new Date(strDate[0],(strDate[1]-parseInt(1)),strDate[2],strTime[0],strTime[1],strTime[2])   
}
function parseData1(str) 
{
   var d = new Date(Date.parse(str.replace(/-/g,"/")));
   return d;
}
/*end*/

/*cookie����*/
//���һ��cookie��addCookie(name,value,expireHours) 
//�ú�������3��������cookie���ƣ�cookieֵ���Լ��ڶ���Сʱ����ڡ�����Լ��expireHoursΪ0ʱ���趨����ʱ�䣬����������ر�ʱcookie�Զ���ʧ��
function addCookie(name,value,expireHours)
{ 
    var cookieString=name+"="+escape(value); 
    //�ж��Ƿ����ù���ʱ�� 
    if(expireHours>0)
    { 
        var date=new Date(); 
        date.setTime(date.getTime+expireHours*3600*1000); 
        cookieString=cookieString+"; expire="+date.toGMTString(); 
    } 
    document.cookie=cookieString; 
}
//��ȡָ�����Ƶ�cookieֵ��getCookie(name) 
function getCookie(name)
{ 
    var strCookie=document.cookie; 
    var arrCookie=strCookie.split("; "); 
    for(var i=0;i<arrCookie.length;i++)
    { 
        var arr=arrCookie[i].split("="); 
        if(arr[0]==name)return arr[1]; 
    } 
    return ""; 
} 
//ɾ��ָ�����Ƶ�cookie��deleteCookie(name) 
function deleteCookie(name)
{ 
    var date=new Date(); 
    date.setTime(date.getTime()-10000); 
    document.cookie=name+"=; expire="+date.toGMTString(); 
} 



