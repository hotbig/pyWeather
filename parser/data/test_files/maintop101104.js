jQuery.fn.imgFlash=function(parameters) {
	defaults = {
		mainID: '#imgbox',//定义主体区域ID
		mainIDRow: 'p',//定义主体区域的行
		mainIDNum: '#num',//定义引导数字区域
		mainIDTxt: '#txt',//定义标题单独显示区域区域
		mainHoverLink: 'kly',//定义指定连接区域
		linkTarget: '_blank',//定义引导、标题的链接弹出方式
		timeSwitching: 2000, //图片切换间隔,默认是3秒
		fot: 200, //淡出消失时间
		fin: 200, //淡入显示时间
		auto: true //是否开启自动滚动true为默认开启
	};
	//定义全局变量
	jQuery.extend(defaults,parameters);
	
	$(defaults.mainID).children(defaults.mainIDRow).find('a:last-child').hide();
	var box=$(defaults.mainID).children(defaults.mainIDRow);
	var txt=box.eq(0).find('a').text();
	var imghref2 = $(defaults.mainID).children(defaults.mainIDRow).eq(0).find('a:first-child').attr('href');
	$(defaults.mainIDTxt).append('<a href='+imghref2+' target='+defaults.linkTarget+'>'+txt+'</a>');
	var num=$(defaults.mainID).children(defaults.mainIDRow).length;
	var aa=1;
	for (var i=0; i<num;i++) {
		var imghref = box.eq(i).find('a:first-child').attr('href');
		$(defaults.mainIDNum).append('<a href='+imghref+' target='+defaults.linkTarget+'>'+aa+'</a>');
		aa++;
	};
	$(defaults.mainIDNum).children('a:first-child').addClass(defaults.mainHoverLink);
	//鼠标滑过数字引导区函数
	$(defaults.mainIDNum).children('a').hover(
		function mouseMain() {
			clearInt();
			var ky = $(defaults.mainIDNum).children('a').index($(this));
			$.mainFunction(ky);
			hgNum= $(defaults.mainIDNum).children('a').index($(this));
			huaguo=true;
		},
		function () {
			if (defaults.auto) {
				setInt();
			}
		}
	);
	//鼠标滑图片函数
	$(defaults.mainID).find('img').hover(
		function mouseMain2() {
			clearInt();
		},
		function () {
			if (defaults.auto) {
				setInt();
			}
		}
	);
	//鼠标滑文字标题函数
	$(defaults.mainIDTxt).hover(
		function mouseMain3() {
			clearInt();
		},
		function () {
			if (defaults.auto) {
				setInt();
			}
		}
	);
	//自动播放函数
	boxNum=0;
	judge=true;
	hgNum=0;
	huaguo=false;
	function autoPlay() {	
				if(huaguo) { boxNum=hgNum; boxNum++; huaguo=false;};
				var imgnum=$(defaults.mainID).children(defaults.mainIDRow).length;
				if ( boxNum == imgnum ) { boxNum = 0 };
				var ky=boxNum;
				//alert(boxNum);
				if (judge) {
					if ( ky == 0) {
						var ky=1;
						boxNum++;
						judge=false;
					};
				};
				$.mainFunction(ky);
				boxNum++;
				
	}

	//效果函数
	jQuery.fade=function(k) {
		$(defaults.mainID).children(defaults.mainIDRow).hide();
		$(defaults.mainID).children(defaults.mainIDRow).eq(k).show()
	}
	//切换函数
	jQuery.mainFunction=function(ky) {
					$(defaults.mainIDNum).children('a').removeClass(defaults.mainHoverLink);
					var imghref = $(defaults.mainID).children(defaults.mainIDRow).eq(ky).find('a:first-child').attr('href');
					$(defaults.mainIDNum).children('a').eq(ky).addClass(defaults.mainHoverLink);
					$(defaults.mainIDTxt).empty();
					$.fade(ky);
					var txt = $(defaults.mainID).children(defaults.mainIDRow).eq(ky).find('a').text();
					$(defaults.mainIDTxt).append('<a href='+imghref+' target='+defaults.linkTarget+'>'+txt+'</a>');		
	}
	//定义切换函数
	function setInt(){
		defaults.auto=setInterval(autoPlay,defaults.timeSwitching);
	}	
	//取消周期的函数
	function clearInt(){ 
		if (defaults.auto) clearInterval(defaults.auto);
	}
	//开始执行
	if (defaults.auto) {
		setInt(); 
	}

}

//--START---------------------------------imageflash.js

$(document).ready(function() {

	$('#box11').imgFlash({
		mainID: '#imgbox',//定义主体区域ID
		mainIDRow: 'p',//定义主体区域的行
		mainIDNum: '#num',//定义引导数字区域
		mainIDTxt: '#txt',//定义标题单独显示区域
		mainHoverLink: 'mosve',//定义指定连接CSS样式
		linkTarget: '_blank',//定义引导、标题的链接弹出方式
		timeSwitching: 5000, //图片切换间隔,默认是3秒
		fot: 200, //淡出消失时间
		fin: 200, //淡入显示时间
		auto: true //是否开启自动滚动true为默认开启
	});




//srcImg	
var currentIndexA = 0;
var DEMOA; //函数对象
var currentIDA = 0; //取得鼠标下方的对象ID
var pictureIDA = 0; //索引ID
$("#src_piclist li").eq(0).show(); //默认
autoScrollA();
$("#src_btn span").hover(function() {
    StopScrolllA();
    $("#src_btn span").removeClass("active")//所有的li去掉当前的样式加上正常的样式
    $(this).addClass("active"); //而本身则加上当前的样式去掉正常的样式
    currentIDA = $(this).attr("id"); //取当前元素的ID
    pictureIDA = currentIDA.substring(currentIDA.length - 1); //取最后一个字符
    $("#src_piclist li").eq(pictureIDA).fadeIn("slow"); //本身显示
    $("#src_piclist li").not($("#src_piclist li")[pictureIDA]).hide(); //除了自身别的全部隐藏
    
    
    $("#src_h2 li").hide();
    $("#src_h2 li").eq(pictureIDA).show();

}, function() {
    //当鼠标离开对象的时候获得当前的对象的ID以便能在启动自动时与其同步
    currentIDA = $(this).attr("id"); //取当前元素的ID
    pictureIDA = currentIDA.substring(currentIDA.length - 1); //取最后一个字符
    currentIndexA = pictureIDA;
    autoScrollA();
});
//自动滚动
function autoScrollA() {
    $("#src_btn a:last").removeClass("active");
    $("#src_h2 li:last").hide();
    $("#src_btn span").eq(currentIndexA).addClass("active");
    $("#src_btn span").eq(currentIndexA - 1).removeClass("active");
    $("#src_h2 li").eq(currentIndexA).show();
    $("#src_h2 li").eq(currentIndexA - 1).hide();
    $("#src_piclist li").eq(currentIndexA).fadeIn("slow");
    $("#src_piclist li").eq(currentIndexA - 1).hide();
    currentIndexA++; currentIndexA = currentIndexA >= 4 ? 0 : currentIndexA;
    DEMOA = setTimeout(autoScrollA, 3000);
}
function StopScrolllA()//当鼠标移动到对象上面的时候停止自动滚动
{
    clearTimeout(DEMOA);
}

})
//--END---------------------------------------------imageflash.js

//--START---------------------------------------------weather.js

function show(object_id)
{
	object = document.getElementById(object_id);
	object.style.display='block';
}

function hide(object_id)
{
	object = document.getElementById(object_id);
	object.style.display='none';
}




var GO = function(elemId)
{
	return document.getElementById(elemId);
}

function menu(mid,idx)
{
	class_name = 'menu_0' + idx;	
	GO("m_"+mid+"_"+idx).className = class_name + ' on';
	GO("c_"+mid+"_"+idx).style.display = "";
	for(var i=1;i<9;i++)
	{
		class_name = 'menu_0' + i;	
		if(!GO("m_"+mid+"_"+i)) continue;
		if(i != idx)
		{
			GO("m_"+mid+"_"+i).className = class_name;
			GO("c_"+mid+"_"+i).style.display = "none";
		}
	}
}	

function menu2(mid,idx)
{
	class_name = 'menu2_0' + idx;	
	GO("m2_"+mid+"_"+idx).className = class_name + ' on';
	GO("c2_"+mid+"_"+idx).style.display = "";
	for(var i=1;i<10;i++)
	{
		class_name = 'menu2_0' + i;	
		if(!GO("m2_"+mid+"_"+i)) continue;
		if(i != idx)
		{
			GO("m2_"+mid+"_"+i).className = class_name;
			GO("c2_"+mid+"_"+i).style.display = "none";
		}
	}
}	

function menu3(mid,idx)
	{
		class_name = 'menu3_0' + idx;	
		GO("m3_"+mid+"_"+idx).className = class_name + ' on';
		GO("c3_"+mid+"_"+idx).style.display = "";
		for(var i=1;i<10;i++)
		{
			class_name = 'menu3_0' + i;	
			if(!GO("m3_"+mid+"_"+i)) continue;
			if(i != idx)
			{
				GO("m3_"+mid+"_"+i).className = class_name;
				GO("c3_"+mid+"_"+i).style.display = "none";
			}
		}
	}

function showhide(id, count)
{
	c_dd = document.getElementById('dd_' + id);
	c_img = document.getElementById('img_' + id);
//	for(i=0;i<count;i++)
//	{
//		if(i != id)
//		{
//			cc_dd = document.getElementById('dd_' + i);
//			cc_dd.style.display = 'none';
//			cc_img = document.getElementById('img_' + i);
//			cc_img.src= 'i/icon_open.gif';
//		}
//	}
	if(c_dd.style.display=='none')
	{
		c_dd.style.display = '';
		c_img.src='../../m2/i/weather/icon_close.gif';
	}
	else
	{
		c_dd.style.display = 'none';
		c_img.src='../../m2/i/weather/icon_open.gif';
	}
}

function showhidden(id,i){
		var select_obj=document.getElementsByTagName("select");
		if(i==1){
			document.getElementById(id).style.display="";
		}else{
			document.getElementById(id).style.display="none";
		}
}

function MM_jumpMenu(targ,selObj,restore){
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

 function showdiv(thisid){
       var trid = new   Array('div1','div2','div3');
	   var tdid = new   Array('td1','td2','td3');
	   for(var i=0;i<3;i++){
	        var thisId = document.getElementById(trid[i]);
			var thisTd = document.getElementById(tdid[i]);
	       if(thisid==trid[i]){
		       thisId.style.display="block";
               thisTd.className="sec2";
		   }else{
		       thisId.style.display="none";
			   thisTd.className="sec1";
		   }
	   }
  }

//--END---------------------------------------------weather.js

//--STRAT---------------------------------------------customize.js
var english = false;

// searchBox 参数
var searchBox = searchBox || {};
// 搜索服务器路径: "/SearchBox/" - 测试环境中的相对路径[默认], URL - 指定URL
searchBox.baseURL = "http://toy.weather.com.cn/SearchBox/";
// searchBox.baseURL = "http://toy.weather.com.cn/SearchBox/";
// 语言: "zh" - [默认]
searchBox.language = english ? "en" : "zh";
// 用于放置搜索框的html元素ID: "searchBox" - [默认]
searchBox.containerId = "searchBox";
// 显示无输入时提示: false - 不显示[默认], true - 显示 "/SearchBox/searchBox/tooltips.txt"中的内容
searchBox.tooltips = true;
// 显示无输入时提示按钮: null - 不显示[默认], HTML - 显示内容
searchBox.forMouserButton = null; // "<span class='on-off'>v</span>"
// 输入无匹配时显示内容: null - 不显示[默认], HTML - 显示内容
searchBox.whenNoMatches = "<span style='color: #C5111A;'>" + (english ? "Sorry, no matching city found!" : "对不起，未找到您查询的城市天气！") + "</span>";
// 提交按钮: null - 不显示[默认], HTML - 显示内容
searchBox.submitButton = "<input class='submit' type='submit' value='' />";
// 提交查询的延迟时间: 200[默认], 单位毫秒
searchBox.waitMillis = 200;
// 无输入时搜索框默认提示: null - [默认], String - 提示内容
searchBox.defaultValue = english ? "Type name, pinyin to search" : "输入城市名、全拼、简拼、电话区号、邮编查询";

//--END---------------------------------------------weather.js

var GO = function(elemId){

	return document.getElementById(elemId);

}


	var setFonts=function(node){

		var s=node.parentNode.style.fontSize;

		var ns=document.getElementById("mainContent").getElementsByTagName("p");

		for(var i=0;i<ns.length;i++){

			ns[i].style.fontSize=s;

		}

	}
