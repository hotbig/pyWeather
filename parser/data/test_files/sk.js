var url = window.location.href; 
var start=url.indexOf("weather/"); 
var end=url.indexOf(".shtml"); 
if(start!=-1){
var first=start+parseInt(8);
var str = url.substring(first,end);
}
else
{
	str="101010100";
}
function isIE(){ //ie? 
   if (window.navigator.userAgent.toLowerCase().indexOf("msie")>=1) 
    return true; 
   else 
    return false; 
} 

if(!isIE()){ //firefox innerText define
   HTMLElement.prototype.__defineGetter__(     "innerText", 
    function(){
     var anyString = "";
     var childS = this.childNodes;
     for(var i=0; i<childS.length; i++) {
      if(childS[i].nodeType==1)
       anyString += childS[i].tagName=="BR" ? '\n' : childS[i].innerText;
      else if(childS[i].nodeType==3)
       anyString += childS[i].nodeValue;
     }
     return anyString;
    } 
   ); 
   HTMLElement.prototype.__defineSetter__(     "innerText", 
    function(sText){ 
     this.textContent=sText; 
    } 
   ); 
}
var xmlhttp=null; 
var ctemp="";
function createXMLHTTPRequext(){ 
if (window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest(); //Mozilla

	}
else if (window.ActiveXObject) {
xmlhttp =new ActiveXObject("Msxml2.XMLHTTP") ;
if (! xmlhttp ){
 xmlhttp = new ActiveXObject('Microsoft.XMLHTTP'); 
 }
}
}

function PostOrder(xmldoc) 
{ 
    createXMLHTTPRequext();
    
    xmlhttp.open("GET", xmldoc,false); 
    xmlhttp.onreadystatechange= HandleStateChange;  
    xmlhttp.send(null); 


}
var jsonobj;

function HandleStateChange() 
{ 

    if (xmlhttp.readyState == 4){ 

 
       var jsontext =xmlhttp.responseText;
       //var aman = eval("jsontext");
       //alert(aman)
       var func = new Function("return " + jsontext);
       
       jsonobj = func();

    } 
} 
    var xmldoc='/data/sk/'+str+'.html';
    var xmlhttp; 
    PostOrder(xmldoc);
    HandleStateChange();
    var temp=jsonobj.weatherinfo.temp;
    ctemp=temp;
    var height="";
    if(temp=="暂无实况"){
    height="70";
    
    }
    else{
	height=parseInt((50-temp)*0.42)+parseInt(20);
	}

    var sd=jsonobj.weatherinfo.SD;
    var rd=jsonobj.weatherinfo.isRadar;
    
    var ws=jsonobj.weatherinfo.WS;

    var wd=jsonobj.weatherinfo.WD;
    var sj=jsonobj.weatherinfo.time;
    var sm=jsonobj.weatherinfo.sm;
    var ap=jsonobj.weatherinfo.AP;
    var img="";
    var z="%";
    var ff=">>";
    if(rd=="1"){
    var rdurl=jsonobj.weatherinfo.Radar;
    var kk="http://www.weather.com.cn/static/radar_video_v1.php?class=";
    }
    else{
    var rdurl=jsonobj.weatherinfo.Radar;
    var kk="http://www.weather.com.cn/static/html/product_ld.shtml";
    var rdurl="";
    }
    if(wd=="东风"){
      img="e.gif";
    }
    else if(wd=="西风")
    {
     img="w.gif";
    }
     else if(wd=="南风")
    {
     img="s.gif";
    }
     else if(wd=="北风")
    {
     img="n.gif";
    }
     else if(wd=="东南风")
    {
     img="se.gif";
    }
     else if(wd=="东北风")
    {
     img="ne.gif";
    }
       else if(wd=="西南风")
    {
     img="sw.gif";
    }
       else if(wd=="西北风")
    {
     img="nw.gif";
    }
     else if(wd=="西北偏北风")
    {
     img="nnw.gif";
    }
    
       else if(wd=="西北偏西风")
    {
     img="wnw.gif";
    }
          else if(wd=="东北偏北风")
    {
     img="nne.gif";
    }
            else if(wd=="东北偏东风")
    {
     img="ene.gif";
    }
            else if(wd=="西南偏西风")
    {
     img="wsw.gif";
    }
              else if(wd=="西南偏南风")
    {
     img="ssw.gif";
    }
              else if(wd=="东南偏东风")
    {
     img="ese.gif";
    }
              else if(wd=="东南偏南风")
    {
     img="sse.gif";
    }
       else if(wd=="暂无实况")
       {
       	img="bg_weatherwind.gif";
       } 
 
//document.write('<head>');
//document.write('<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />');
//document.write('<title>实况</title>');
document.write('<style>');
document.write('.weatherDiv2{');
document.write('background: url(../../m2/i/forecast/'+img+') no-repeat 26px #fff; float:right;width:151px;height:151px;margin:5px 7px 0 0;position:relative;display:inline;text-align:center;');	
document.write('}');
document.write('strong{');
document.write('	font-weight:bold; ');	
document.write('}');
document.write('</style>');
//document.write('</head>');
//document.write('<body>');
/*
if(str=="101010100")
{
document.write('<div class=\"weatherTopmiddle\">');
document.write('				<h1><a href=\"http://baike.weather.com.cn/index.php?doc-view-1259.php\"><b>当前实况</b></a><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><a href=\"http://www.weather.com.cn/static/bj_product.php\">天气监测分布图'+ff+'</a><i style=\"margin-left:15px;\"><a href=\"'+kk+''+rdurl+'\">雷达图</a></i></h1>');
}
else
{
document.write('<div class=\"weatherTopmiddle\">');
document.write('				<h1><a href=\"http://baike.weather.com.cn/index.php?doc-view-1259.php\"><b>当前实况</b></a><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><a href=\"'+kk+''+rdurl+'\" style=\"margin-left:100px;\">雷达图'+ff+'</a></i></h1>');
}
*/

document.write('<div class=\"weatherTopmiddle\">');
document.write('				<h1><a href=\"http://baike.weather.com.cn/index.php?doc-view-1259.php\"><b>当前实况</b></a><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><a href=\"'+kk+''+rdurl+'\" style=\"margin-left:100px;\">雷达图'+ff+'</a></i></h1>');

document.write('				<div class="weatherDiv1"> ');
document.write('					<a href=\"http://baike.weather.com.cn/index.php?doc-view-1180.php\"><b>气温</b></a>');
document.write('					<div class="numN">');
document.write('						50&nbsp;-<br />25&nbsp;-<br />0&nbsp;-<br />-25&nbsp;-<br />-50&nbsp;-</div><p class="bg_sk" style="height:'+height+'px;"></p>');

if(temp=="暂无实况"){
document.write('						<strong>'+temp+'℃</strong><br /><br />');
}
else{
document.write('	                    <strong>'+temp+'℃</strong>');
}

document.write('					<span><a href=\"http://baike.weather.com.cn/index.php?doc-view-1014.php\">相对湿度：'+sd+'</a></span>');
document.write('				</div>');

document.write('					<div class=\"weatherDiv2\"><a href=\"http://baike.weather.com.cn/index.php?doc-view-779.php\"><b>风向风力</b></a>');
//document.write('    <strong><br /></strong>');
document.write('    <strong> '+ws+'</strong>');
document.write('					<span><a href=\"http://baike.weather.com.cn/index.php?doc-view-779.php\">'+wd+'</a></span>');
document.write('				</div>');
document.write('			</div>');
//document.write('</body>');

function c2f(c)
{
	var m=document.getElementById("back").innerText; 

if(m=="转到华氏"){
	var f=parseInt(9/5*c)+parseInt(32);
	var z=f+"℉";
	document.getElementById("abc").innerText=z;
 document.getElementById("back").innerText="转到摄氏";
}
else if(m=="转到摄氏")
{
	n=ctemp;
	var k=ctemp+"℃";
	document.getElementById("abc").innerText=k;
 document.getElementById("back").innerText="转到华氏";
}
}
 



