<!--
document.write("<div id=meizzCalendarLayer style='position: absolute; z-index: 9999; width: 144; height: 193; display: none'>");
document.write("<iframe name=meizzCalendarIframe scrolling=no frameborder=0 width=100% height=100%></iframe></div>");
function writeIframe()
{
    var strIframe = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=gb2312'><style>"+
    "*{font-size: 12px; font-family: ����}"+
    ".bg{  color: "+ WebCalendar.lightColor +"; cursor: default; background-color: "+ WebCalendar.darkColor +";}"+
    "table#tableMain{ width: 142; height: 180;}"+
    "table#tableWeek td{ color: "+ WebCalendar.lightColor +";}"+
    "table#tableDay  td{ font-weight: bold;}"+
    "td#meizzYearHead, td#meizzYearMonth{color: "+ WebCalendar.wordColor +"}"+
    ".out { text-align: center; border-top: 1px solid "+ WebCalendar.DarkBorder +"; border-left: 1px solid "+ WebCalendar.DarkBorder +";"+
    "border-right: 1px solid "+ WebCalendar.lightColor +"; border-bottom: 1px solid "+ WebCalendar.lightColor +";}"+
    ".over{ text-align: center; border-top: 1px solid #FFFFFF; border-left: 1px solid #FFFFFF;"+
    "border-bottom: 1px solid "+ WebCalendar.DarkBorder +"; border-right: 1px solid "+ WebCalendar.DarkBorder +"}"+
    "input{ border: 1px solid "+ WebCalendar.darkColor +"; padding-top: 1px; height: 18; cursor: hand;"+
    "       color:"+ WebCalendar.wordColor +"; background-color: "+ WebCalendar.btnBgColor +"}"+
    "</style></head><body onselectstart='return true' style='margin: 0px' oncontextmenu='return false'><form name=meizz>";

    if (WebCalendar.drag){ strIframe += "<scr"+"ipt language=javascript>"+
    "var drag=false, cx=0, cy=0, o = parent.WebCalendar.calendar; function document.onmousemove(){"+
    "if(parent.WebCalendar.drag && drag){if(o.style.left=='')o.style.left=0; if(o.style.top=='')o.style.top=0;"+
    "o.style.left = parseInt(o.style.left) + window.event.clientX-cx;"+
    "o.style.top  = parseInt(o.style.top)  + window.event.clientY-cy;}}"+
    "function document.onkeydown(){ switch(window.event.keyCode){  case 27 : parent.hiddenCalendar(); break;"+
    "case 37 : parent.prevM(); break; case 38 : parent.prevY(); break; case 39 : parent.nextM(); break; case 40 : parent.nextY(); break;"+
    "case 84 : document.forms[0].today.click(); break; case 13:if (event.srcElement.id!='timeSecond') window.event.keyCode=9; break;}  window.event.returnValue= true;}"+
    "function dragStart(){cx=window.event.clientX; cy=window.event.clientY; drag=true;}</scr"+"ipt>"}

    strIframe += "<select name=tmpYearSelect  onblur='parent.hiddenSelect(this)' style='z-index:1;position:absolute;top:3;left:18;display:none'"+
    " onchange='parent.WebCalendar.thisYear =this.value; parent.hiddenSelect(this); parent.writeCalendar();'></select>"+
    "<select name=tmpMonthSelect onblur='parent.hiddenSelect(this)' style='z-index:1; position:absolute;top:3;left:74;display:none'"+
    " onchange='parent.WebCalendar.thisMonth=this.value; parent.hiddenSelect(this); parent.writeCalendar();'></select>"+

    "<table id=tableMain class=bg border=0 cellspacing=2 cellpadding=0>"+
    "<tr><td width=140 height=19 bgcolor='"+ WebCalendar.lightColor +"'>"+
    "    <table width=140 id=tableHead border=0 cellspacing=1 cellpadding=0><tr align=center>"+
    "    <td width=15 height=19 class=bg title='��ǰ�� 1 ��&#13;��ݼ�����' style='cursor: hand' onclick='parent.prevM()'><b>&lt;</b></td>"+
    "    <td width=60 id=meizzYearHead  title='����˴�ѡ�����' onclick='parent.funYearSelect(parseInt(this.innerText, 10))'"+
    "        onmouseover='this.bgColor=parent.WebCalendar.darkColor; this.style.color=parent.WebCalendar.lightColor'"+
    "        onmouseout='this.bgColor=parent.WebCalendar.lightColor; this.style.color=parent.WebCalendar.wordColor'></td>"+
    "    <td width=50 id=meizzYearMonth title='����˴�ѡ���·�' onclick='parent.funMonthSelect(parseInt(this.innerText, 10))'"+
    "        onmouseover='this.bgColor=parent.WebCalendar.darkColor; this.style.color=parent.WebCalendar.lightColor'"+
    "        onmouseout='this.bgColor=parent.WebCalendar.lightColor; this.style.color=parent.WebCalendar.wordColor'></td>"+
    "    <td width=15 class=bg title='��� 1 ��&#13;��ݼ�����' onclick='parent.nextM()' style='cursor: hand'><b>&gt;</b></td></tr></table>"+
    "</td></tr><tr><td height=20><table id=tableWeek border=1 width=140 cellpadding=0 cellspacing=0 ";
    if(WebCalendar.drag){strIframe += "onmousedown='dragStart()' onmouseup='drag=false' onmouseout='drag=false'";}
    strIframe += " borderColorLight='"+ WebCalendar.darkColor +"' borderColorDark='"+ WebCalendar.lightColor +"'>"+
    "    <tr align=center><td height=20>��</td><td>һ</td><td>��</td><td>��</td><td>��</td><td>��</td><td>��</td></tr></table>"+
    "</td></tr><tr><td valign=top width=140 bgcolor='"+ WebCalendar.lightColor +"'>"+
    "    <table id=tableDay height=120 width=140 border=0 cellspacing=1 cellpadding=0>";
         for(var x=0; x<5; x++){ strIframe += "<tr>";
         for(var y=0; y<7; y++)  strIframe += "<td class=out id='meizzDay"+ (x*7+y) +"'></td>"; strIframe += "</tr>";}
         strIframe += "<tr>";
         for(var x=35; x<37; x++) strIframe += "<td class=out id='meizzDay"+ x +"'></td>";
         strIframe +="<td colspan=4 ><input id=timeHour onfocus='this.select();' type=text maxlength=2 style=' background-color: "+
         WebCalendar.btnBgColor +";width:15px;BORDER-RIGHT: 0px solid;BORDER-Left: 0px solid;BORDER-top: 0px solid;BORDER-bottom: 0px solid; height: 100%; border: 0'  onchange='javascript:parent.chkTime(1)'   value='"+WebCalendar.timeH+"'>:"+
        " <input id=timeMinute onfocus='this.select();' type=text maxlength=2 style=' background-color: "+
         WebCalendar.btnBgColor +"; width:15px;BORDER-RIGHT: 0px solid;BORDER-Left: 0px solid;BORDER-top: 0px solid;BORDER-bottom: 0px solid; height: 100%; border: 0' onchange='javascript:parent.chkTime(2)'  value='"+WebCalendar.timeM+"'>:"+
        " <input id=timeSecond onfocus='this.select();' type=text maxlength=2 style=' background-color: "+
         WebCalendar.btnBgColor +"; width:15px;BORDER-RIGHT: 0px solid;BORDER-Left: 0px solid;BORDER-top: 0px solid;BORDER-bottom: 0px solid; height: 100%; border: 0' onchange='javascript:parent.chkTime(3)'  value='"+WebCalendar.timeS+"'>"+
        " </td>"
         strIframe +="<td  class=out title='"+ WebCalendar.regInfo +"'><input style=' background-color: "+
         WebCalendar.btnBgColor +";cursor: hand; width: 18px; height: 100%; border: 0' onfocus='this.blur()'"+
         " type=button value='�w' onclick='parent.hiddenCalendar()'></td></tr></table>"+
    "</td></tr><tr><td height=20 width=140 bgcolor='"+ WebCalendar.lightColor +"'>"+
    "    <table border=0 cellpadding=1 cellspacing=0 width=140>"+
    "    <tr><td><input name=prevYear title='��ǰ�� 1 ��&#13;��ݼ�����' onclick='parent.prevY()' type=button value='&lt;&lt;'"+
    "    onfocus='this.blur()' style='meizz:expression(this.disabled=parent.WebCalendar.thisYear==1000)'><input"+
    "    onfocus='this.blur()' name=prevMonth title='��ǰ�� 1 ��&#13;��ݼ�����' onclick='parent.prevM()' type=button value='&lt;&nbsp;'>"+
    "    </td><td align=center><input name=today type=button value='Today' onfocus='this.blur()' style='width: 50' title='��ǰ����&#13;��ݼ���T'"+
    "    onclick=\"parent.returnDate(new Date().getDate() +'/'+ (new Date().getMonth() +1) +'/'+ new Date().getFullYear())\">"+
    "    </td><td align=right><input title='��� 1 ��&#13;��ݼ�����' name=nextMonth onclick='parent.nextM()' type=button value='&nbsp;&gt;'"+
    "    onfocus='this.blur()'><input name=nextYear title='��� 1 ��&#13;��ݼ�����' onclick='parent.nextY()' type=button value='&gt;&gt;'"+
    "    onfocus='this.blur()' style='meizz:expression(this.disabled=parent.WebCalendar.thisYear==9999)'></td></tr></table>"+
    "</td></tr><table></form></body></html>";
    with(WebCalendar.iframe)
    {
        document.writeln(strIframe); document.close();
        for(var i=0; i<37; i++)
        {
            WebCalendar.dayObj[i] = eval("meizzDay"+ i);
            WebCalendar.dayObj[i].onmouseover = dayMouseOver;
            WebCalendar.dayObj[i].onmouseout  = dayMouseOut;
            WebCalendar.dayObj[i].onclick     = returnDate;
        }
    }
}

function WebCalendar() //��ʼ������������
{
    this.regInfo    = "ȡ��";
    this.daysMonth  = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    this.day        = new Array(37);            //��������չʾ�õ�����
    this.dayObj     = new Array(37);            //��������չʾ�ؼ�����
    this.dateStyle  = null;                     //�����ʽ������������
    this.objExport  = null;                     //�����ش�����ʾ�ؼ�
    this.eventSrc   = null;                     //������ʾ�Ĵ����ؼ�
    this.inputDate  = null;                     //ת��������������(d/m/yyyy)
    this.thisYear   = new Date().getFullYear(); //������ı����ĳ�ʼֵ
    this.thisMonth  = new Date().getMonth()+ 1; //�����µı����ĳ�ʼֵ
    this.thisDay    = new Date().getDate();     //�����յı����ĳ�ʼֵ
    this.today      = this.thisDay +"/"+ this.thisMonth +"/"+ this.thisYear;   //����(d/m/yyyy)
	this.timeH		= new Date().getHours();
    this.timeM		= new Date().getMinutes();
	this.timeS		= new Date().getSeconds();
    this.iframe     = window.frames("meizzCalendarIframe"); //������ iframe ����
    this.calendar   = getObjectById("meizzCalendarLayer");  //�����Ĳ�
    this.dateReg    = "";           //������ʽ��֤������ʽ

    this.yearFall   = 50;           //����������������ֵ
    this.format     = "yyyy-mm-dd"; //�ش����ڵĸ�ʽ
    this.timeShow   = false;        //�Ƿ񷵻�ʱ��
    this.drag       = true;         //�Ƿ������϶�
    this.darkColor  = "#0000D0";    //�ؼ��İ�ɫ
    this.lightColor = "#FFFFFF";    //�ؼ�����ɫ
    this.btnBgColor = "#E6E6FA";    //�ؼ��İ�ť����ɫ
    this.wordColor  = "#000080";    //�ؼ���������ɫ
    this.wordDark   = "#DCDCDC";    //�ؼ��İ�������ɫ
    this.dayBgColor = "#F5F5FA";    //�������ֱ���ɫ
    this.todayColor = "#FF0000";    //�����������ϵı�ʾ����ɫ
    this.DarkBorder = "#D4D0C8";    //������ʾ��������ɫ
}   var WebCalendar = new WebCalendar();

function calendar() //��������
{
    var e = window.event.srcElement;   writeIframe();
    var o = WebCalendar.calendar.style; WebCalendar.eventSrc = e;
	if (arguments.length == 0) WebCalendar.objExport = e;
    else WebCalendar.objExport = eval(arguments[0]);

    WebCalendar.iframe.tableWeek.style.cursor = WebCalendar.drag ? "move" : "default";
	var t = e.offsetTop,  h = e.clientHeight, l = e.offsetLeft, p = e.type;
	while (e = e.offsetParent){t += e.offsetTop; l += e.offsetLeft;}
    o.display = ""; WebCalendar.iframe.document.body.focus();
    var cw = WebCalendar.calendar.clientWidth, ch = WebCalendar.calendar.clientHeight;
    var dw = document.body.clientWidth, dl = document.body.scrollLeft, dt = document.body.scrollTop;
    
    if (document.body.clientHeight + dt - t - h >= ch) o.top = (p=="image")? t + h : t + h + 6;
    else o.top  = (t - dt < ch) ? ((p=="image")? t + h : t + h + 6) : t - ch;
    if (dw + dl - l >= cw) o.left = l; else o.left = (dw >= cw) ? dw - cw + dl : dl;

    if  (!WebCalendar.timeShow) WebCalendar.dateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    else WebCalendar.dateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;

    try{
        if (WebCalendar.objExport.value.trim() != ""){
            WebCalendar.dateStyle = WebCalendar.objExport.value.trim().match(WebCalendar.dateReg);
            if (WebCalendar.dateStyle == null)
            {
                WebCalendar.thisYear   = new Date().getFullYear();
                WebCalendar.thisMonth  = new Date().getMonth()+ 1;
                WebCalendar.thisDay    = new Date().getDate();
                //alert("ԭ�ı�����������д���\n�������㶨�����ʾʱ�����г�ͻ��");
                writeCalendar(); return false;
            }
            else
            {
                WebCalendar.thisYear   = parseInt(WebCalendar.dateStyle[1], 10);
                WebCalendar.thisMonth  = parseInt(WebCalendar.dateStyle[3], 10);
                WebCalendar.thisDay    = parseInt(WebCalendar.dateStyle[4], 10);
                if  (WebCalendar.timeShow) {
                  WebCalendar.timeH    = WebCalendar.dateStyle[5];
                  WebCalendar.timeM    = WebCalendar.dateStyle[6];
                  WebCalendar.timeS    = WebCalendar.dateStyle[7];
                };
                WebCalendar.inputDate  = parseInt(WebCalendar.thisDay, 10) +"/"+ parseInt(WebCalendar.thisMonth, 10) +"/"+ 
                parseInt(WebCalendar.thisYear, 10); writeCalendar();
            }
        }  else writeCalendar();
    }  catch(e){writeCalendar();}
}
function funMonthSelect() //�·ݵ�������
{
    var m = isNaN(parseInt(WebCalendar.thisMonth, 10)) ? new Date().getMonth() + 1 : parseInt(WebCalendar.thisMonth);
    var e = WebCalendar.iframe.document.forms[0].tmpMonthSelect;
    for (var i=1; i<13; i++) e.options.add(new Option(i +"��", i));
    e.style.display = ""; e.value = m; e.focus(); window.status = e.style.top;
}
function funYearSelect() //��ݵ�������
{
    var n = WebCalendar.yearFall;
    var e = WebCalendar.iframe.document.forms[0].tmpYearSelect;
    var y = isNaN(parseInt(WebCalendar.thisYear, 10)) ? new Date().getFullYear() : parseInt(WebCalendar.thisYear);
        y = (y <= 1000)? 1000 : ((y >= 9999)? 9999 : y);
    var min = (y - n >= 1000) ? y - n : 1000;
    var max = (y + n <= 9999) ? y + n : 9999;
        min = (max == 9999) ? max-n*2 : min;
        max = (min == 1000) ? min+n*2 : max;
    for (var i=min; i<=max; i++) e.options.add(new Option(i +"��", i));
    e.style.display = ""; e.value = y; e.focus();
}
function prevM()  //��ǰ���·�
{
    WebCalendar.thisDay = 1;
    if (WebCalendar.thisMonth==1)
    {
        WebCalendar.thisYear--;
        WebCalendar.thisMonth=13;
    }
    WebCalendar.thisMonth--; writeCalendar();
}
function nextM()  //�����·�
{
    WebCalendar.thisDay = 1;
    if (WebCalendar.thisMonth==12)
    {
        WebCalendar.thisYear++;
        WebCalendar.thisMonth=0;
    }
    WebCalendar.thisMonth++; writeCalendar();
}
function prevY(){WebCalendar.thisDay = 1; WebCalendar.thisYear--; writeCalendar();}//��ǰ�� Year
function nextY(){WebCalendar.thisDay = 1; WebCalendar.thisYear++; writeCalendar();}//���� Year
function hiddenSelect(e){for(var i=e.options.length; i>-1; i--)e.options.remove(i); e.style.display="none";}
function getObjectById(id){ if(document.all) return(eval("document.all."+ id)); return(eval(id)); }
function hiddenCalendar(){getObjectById("meizzCalendarLayer").style.display = "none";};
function appendZero(n){return((n).substr((n).length-2));}//�����Զ��������
function String.prototype.trim(){return this.replace(/(^\s*)|(\s*$)/g,"");}
function dayMouseOver()
{
    this.className = "over";
    this.style.backgroundColor = WebCalendar.darkColor;
    if(WebCalendar.day[this.id.substr(8)].split("/")[1] == WebCalendar.thisMonth)
    this.style.color = WebCalendar.lightColor;
}
function dayMouseOut()
{
    this.className = "out"; var d = WebCalendar.day[this.id.substr(8)], a = d.split("/");
    this.style.removeAttribute('backgroundColor');
    if(a[1] == WebCalendar.thisMonth && d != WebCalendar.today)
    {
        if(WebCalendar.dateStyle && a[0] == parseInt(WebCalendar.dateStyle[4], 10))
        this.style.color = WebCalendar.lightColor;
        this.style.color = WebCalendar.wordColor;
    }
}
function writeCalendar() //��������ʾ�����ݵĴ������
{
    var y = WebCalendar.thisYear;
    var m = WebCalendar.thisMonth; 
    var d = WebCalendar.thisDay;
    WebCalendar.daysMonth[1] = (0==y%4 && (y%100!=0 || y%400==0)) ? 29 : 28;
    if (!(y<=9999 && y >= 1000 && parseInt(m, 10)>0 && parseInt(m, 10)<13 && parseInt(d, 10)>0)){
        alert("�Բ����������˴�������ڣ�");
        WebCalendar.thisYear   = new Date().getFullYear();
        WebCalendar.thisMonth  = new Date().getMonth()+ 1;
        WebCalendar.thisDay    = new Date().getDate(); }
    y = WebCalendar.thisYear;
    m = WebCalendar.thisMonth;
    d = WebCalendar.thisDay;
    WebCalendar.iframe.meizzYearHead.innerText  = y +" ��";
    WebCalendar.iframe.meizzYearMonth.innerText = parseInt(m, 10) +" ��";
    WebCalendar.daysMonth[1] = (0==y%4 && (y%100!=0 || y%400==0)) ? 29 : 28; //�������Ϊ29��
    var w = new Date(y, m-1, 1).getDay();
    var prevDays = m==1  ? WebCalendar.daysMonth[11] : WebCalendar.daysMonth[m-2];
    for(var i=(w-1); i>=0; i--) //������ for ѭ��Ϊ����������Դ������ WebCalendar.day����ʽ�� d/m/yyyy
    {
        WebCalendar.day[i] = prevDays +"/"+ (parseInt(m, 10)-1) +"/"+ y;
        if(m==1) WebCalendar.day[i] = prevDays +"/"+ 12 +"/"+ (parseInt(y, 10)-1);
        prevDays--;
    }
    for(var i=1; i<=WebCalendar.daysMonth[m-1]; i++) WebCalendar.day[i+w-1] = i +"/"+ m +"/"+ y;
    for(var i=1; i<37-w-WebCalendar.daysMonth[m-1]+1; i++)
    {
        WebCalendar.day[WebCalendar.daysMonth[m-1]+w-1+i] = i +"/"+ (parseInt(m, 10)+1) +"/"+ y;
        if(m==12) WebCalendar.day[WebCalendar.daysMonth[m-1]+w-1+i] = i +"/"+ 1 +"/"+ (parseInt(y, 10)+1);
    }
    for(var i=0; i<37; i++)    //���ѭ���Ǹ���Դ����д����������ʾ
    {
        var a = WebCalendar.day[i].split("/");
        WebCalendar.dayObj[i].innerText    = a[0];
        WebCalendar.dayObj[i].title        = a[2] +"-"+ appendZero(a[1]) +"-"+ appendZero(a[0]);
        WebCalendar.dayObj[i].bgColor      = WebCalendar.dayBgColor;
        WebCalendar.dayObj[i].style.color  = WebCalendar.wordColor;
        if ((i<10 && parseInt(WebCalendar.day[i], 10)>20) || (i>27 && parseInt(WebCalendar.day[i], 10)<12))
            WebCalendar.dayObj[i].style.color = WebCalendar.wordDark;
        if (WebCalendar.inputDate==WebCalendar.day[i])    //�����������������������ϵ���ɫ
        {WebCalendar.dayObj[i].bgColor = WebCalendar.darkColor; WebCalendar.dayObj[i].style.color = WebCalendar.lightColor;}
        if (WebCalendar.day[i] == WebCalendar.today)      //���ý����������Ϸ�Ӧ��������ɫ
        {WebCalendar.dayObj[i].bgColor = WebCalendar.todayColor; WebCalendar.dayObj[i].style.color = WebCalendar.lightColor;}
    }
    WebCalendar.iframe.document.all.timeHour.value=WebCalendar.timeH;
    WebCalendar.iframe.document.all.timeMinute.value=WebCalendar.timeM;
    WebCalendar.iframe.document.all.timeSecond.value=WebCalendar.timeS;
}
function returnDate() //�������ڸ�ʽ�ȷ����û�ѡ��������
{
    if(WebCalendar.objExport)
    {
        var returnValue;
        var a = (arguments.length==0) ? WebCalendar.day[this.id.substr(8)].split("/") : arguments[0].split("/");
		//var d= WebCalendar.format.match(/^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/);
		var d = WebCalendar.format.match(/^(\w{4})(-|\/)(\w{1,2})\2(\w{1,2})$/);
        if(d==null){alert("���趨�����������ʽ���ԣ�\r\n\r\n�����¶��� WebCalendar.format ��"); return false;}
        var flag = d[3].length==2 || d[4].length==2; //�жϷ��ص����ڸ�ʽ�Ƿ�Ҫ����
        returnValue = flag ? a[2] +d[2]+ appendZero(a[1]) +d[2]+ appendZero(a[0]) : a[2] +d[2]+ a[1] +d[2]+ a[0];
        if(WebCalendar.timeShow)
        {
            if (!(chkTime(1) && chkTime(2) && chkTime(3))) return false;
            
            var h = WebCalendar.iframe.document.all.timeHour.value.trim();
            var m = WebCalendar.iframe.document.all.timeMinute.value.trim();
            var s = WebCalendar.iframe.document.all.timeSecond.value.trim();
            returnValue += flag ? " "+ appendZero(h) +":"+ appendZero(m) +":"+ appendZero(s) : " "+  h  +":"+ m +":"+ s;
        }
        WebCalendar.objExport.value = returnValue;
        hiddenCalendar();
    }
}
function document.onclick()
{
    if(WebCalendar.eventSrc != window.event.srcElement) hiddenCalendar();
}
function chkTime(iFlag){
	var t,sReg,m,msg,sf,iH,iM,iS;
	sReg = "^[0-9]{1,2}$";
	sf=true;
	if (iFlag==1){
		t=WebCalendar.iframe.document.all.timeHour.value;
		msg="�������Сʱ������Ӧ����0-23֮��";
	}
	if (iFlag==2){
		t=WebCalendar.iframe.document.all.timeMinute.value.trim();
		msg="������ķ���������Ӧ����0-59֮��";
	}
	if (iFlag==3){
		t=WebCalendar.iframe.document.all.timeSecond.value.trim();
		msg="���������������Ӧ����0-59֮��";
	}
	
	try{
	    if (t!=""){
		    m = t.match(sReg);
		    if(m==null){
				sf=false;
				}
			}
	    }  
	catch(e){
		sf=false;
	}
	if (iFlag==1){
	iH=parseInt(t,10);
	if(iH>23 || iH<0){
		sf=false;
	}
	}
	if (iFlag==2){
	iM=parseInt(t,10);
	if(iM>59 || iM<0){
		sf=false;
	}
	}
	if (iFlag==3){
	iS=parseInt(t,10);
	if(iS>59 || iS<0){
		sf=false;
	}
	}
	
	if (!sf){
		alert(msg);
		return false;
	}
	return true;
}
function selDateTime(obj){
	WebCalendar.timeShow=true;
	calendar(obj)   
}
function selDate(obj){
	WebCalendar.timeShow=false;
	calendar(obj)   
}
function ValidDateTime(iFlag,value,sender){
	var sReg,ms;
	var y,m,d,hh,mm,ss;
	//alert("aaa");
	value=value.trim();
	hh=0;
	mm=0;
	ss=0;
	var ret=true;
    if (iFlag!=1){
		sReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
		msg="����������ڸ�ʽ����\n��׼��ʽΪyyyy-mm-dd����yyyy/mm/dd"
		
		}
    else{
		sReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
		msg="�������ʱ���ʽ����\n��׼��ʽΪyyyy-mm-dd hh:mm:ss����yyyy/mm/dd hh:mm:ss"
		
		}
    try{
        if (value != ""){
            ms = value.match(sReg);
            if (ms == null)
            {
                alert(msg);
                ret=false;
            }
            else
            {
                y  = parseInt(ms[1], 10);
                m  = parseInt(ms[3], 10);
                d  = parseInt(ms[4], 10);
                if (iFlag==1){
                hh = parseInt(ms[5], 10);
                mm = parseInt(ms[6], 10);
                ss = parseInt(ms[7], 10);
                };
				if (!(y<=3000 && y >= 1900 && m>0 && m<13 && d>0 && d<32)){
					alert("�Բ������������������\n��׼����Ϊ��\n�꣺1900��3000\n�£�1��12\n�գ�1��31");
					ret=false;
    			}
    			if(!(hh>=0 && hh<24 && mm>=0 && mm<60 && ss>=0 && ss<60)){
    				alert("�Բ����������ʱ������\n��׼����Ϊ��\nʱ��0��23\n�֣�0��59\n�룺0��59");
    				ret=false;
    			}
            }
        } 
    }  
    catch(e){
		alert("�Բ�������������ڻ���ʱ������");
    	ret=false;
    } ;
    if (!ret){
		
		var cmd="document.all."+sender+".focus();"
		eval(cmd);
		cmd="document.all."+sender+".select();"
		eval(cmd);
    }
    return ret;
}
	