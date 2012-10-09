//marquee 插件
(function($){
$.fn.extend({
        Scroll:function(opt,callback){
                //参数初始化
                if(!opt) var opt={};
                var _this=this.eq(0).find("ul:first");
                var     lineH=_this.find("li:first").height(), //获取行高
                        line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                        speed=opt.speed?parseInt(opt.speed,10):500, //卷动速度，数值越大，速度越慢（毫秒）
                        timer=opt.timer?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
                if(line==0) line=1;
                var upHeight=0-line*lineH;
                   //try {
                    if (typeof (timerID)== 'number')clearInterval(timerID);
		// }catch(G){}
		 timerID=setInterval("scrollUp()",timer);
		
				
				
                //滚动函数
                scrollUp=function(){
                        _this.animate({
                                marginTop:upHeight
                        },speed,function(){
                                for(i=1;i<=line;i++){
                                        _this.find("li").eq(0).appendTo(_this);						
                                };
                                _this.css({marginTop:0});
								
								
                        });
                }
				
                //鼠标事件绑定
                _this.hover(
					function(){
                        clearInterval(timerID);
						
					},
					function(){
                        timerID=setInterval("scrollUp()",timer);
						
                	}
		);				
        }        
})
})(jQuery);














$(document).ready(function(){
    
         $(".maptabbox").unbind();
         $(".maptabbox").mouseenter(function(){
            $(this).find(".maptabboxin").show();
         });
         $(".maptabbox").mouseleave(function(){
            $(this).find(".maptabboxin").hide();
         });

$("#scrollDiv").Scroll({line:1,speed:1000,timer:4000});
	$('.RadarSatellit').find('li').mouseover(function() {
var t0=$('.RadarSatellit').find('li').index(this);
$('.RadarSatelliteim').hide();
$('.RadarSatelliteim').eq(t0).show();
$('.RadarSatellit').find('li').removeClass('moverad')
$(this).addClass('moverad');
return false;
})
$('.RadarSatellit').find('li').eq(0).trigger("mouseover");
//右边栏的‘热点专题’的JS
$('.topicesBox').eq(0).show();
$('#topicsNav').children('li').mousemove(function() {
var n=$('#topicsNav').children('li').index(this);
$('#topicsNav').children('li').removeClass('move')
$(this).addClass('move');
$('.topicesBox').hide();
$('.topicesBox').eq(n).show();
});


$('.weatherProducts').find('dl:odd').attr('style','float:right');


//左边栏的‘监测产品’JS
/*$('#climateMonitoringShowIMG').find('dd').empty();
var n0=$('#climateMonitoringShowNAV').children('dl').eq(0).find('a').attr('href');
var n1=$('#climateMonitoringShowNAV').children('dl').eq(0).find('dd').text();
$('#climateMonitoringShowIMG').find('a').attr('href',n0);
//$('#climateMonitoringShowIMG').find('img').attr('src',n0);
$('#climateMonitoringShowIMG').find('dd').append(n1);	
$('#climateMonitoringShowNAV').children('dl').find('a').click(function() { return false;})
$('#climateMonitoringShowNAV').children('dl').mousemove(function() {
var imgHref=$(this).find('a').attr('href');
var imgTxt=$(this).find('dd').text();
$('#climateMonitoringShowIMG').find('dd').empty();
$('#climateMonitoringShowIMG').find('img').attr('src',imgHref);
$('#climateMonitoringShowIMG').find('dd').append(imgTxt);
$('#climateMonitoringShowIMG').find('a').attr('href',imgHref);
});
*/
$('#climateMonitoringShowIMG').find('dd').empty();
var n0=$('#climateMonitoringShowNAV').children('dl').eq(0).find('img').attr('src');
var n1=$('#climateMonitoringShowNAV').children('dl').eq(0).find('dd').text();
if (n0!=undefined)
{
  mn0=n0.replace('/s/','/m/');
  ln0=n0.replace('/s/','/l/');
} else
{
  mn0="aaaa";
  ln0="bbbb";
}
$('#climateMonitoringShowIMG').find('a').attr('href',ln0);
$('#climateMonitoringShowIMG').find('img').attr('src',mn0);
$('#climateMonitoringShowIMG').find('dd').append(n1);	
$('#climateMonitoringShowNAV').children('dl').find('a').click(function() { return false;});
$('#climateMonitoringShowNAV').children('dl').mouseenter(function() {
var imgHref=$(this).find('img').attr('src');
var mimgHref=imgHref.replace('/s/','/m/');
var limgHref=imgHref.replace('/s/','/l/');
var imgTxt=$(this).find('dd').text();
$('#climateMonitoringShowIMG').find('dd').empty();
$('#climateMonitoringShowIMG').find('img').attr('src',mimgHref);
$('#climateMonitoringShowIMG').find('dd').append(imgTxt);
$('#climateMonitoringShowIMG').find('a').attr('href',limgHref);
});
//左边栏的‘未来6小时预报’JS
$('.future6ForecastBox').eq(0).show();
$('#future6ForecastNav').find('a').click(function() {
var t0=$('#future6ForecastNav').find('a').index(this);
$('.future6ForecastBox').hide();
$('.future6ForecastBox').eq(t0).show();
$('#future6ForecastNav').find('a').removeClass('move');
$(this).addClass('move');
return false;
})
	
$('.weatherTAB').eq(0).show();
$('.weatherTopTabNav').find('li').click(function() {
	var nn=	$('.weatherTopTabNav').find('li').index(this);
	$('.weatherTopTabNav').find('li').removeClass('moveNav');
	$(this).addClass('moveNav');
	
	$('.weatherTAB').hide();
	$('.weatherTAB').eq(nn).show();
	
})

//隐藏‘未来6小时预报’JS

$('.contraction').toggle(
function() {
		$('#forecastID').slideUp();
		$(this).attr('src','http://www.weather.com.cn/m2/i/jia01.gif');
	},
	function() {
		$('#forecastID').slideDown();
		$(this).attr('src','http://www.weather.com.cn/m2/i/jian02.gif');
	}

);	
$('.contraction2').toggle(
	function() {
		$('#futureForecastBox').slideUp();
		$(this).attr('src','http://www.weather.com.cn/m2/i/jia01.gif')
	},
	function() {
		$('#futureForecastBox').slideDown();
		$(this).attr('src','http://www.weather.com.cn/m2/i/jian02.gif')
	}
)	
	

$('.peopleInterview').find('dl:last').attr('id','last');
$('.topics11').find('dl:last').attr('id','last2');


//广西预报
$('.urbandd').eq(0).show();
$('#urbandd7').find('a').click(function() {
var t0=$('#urbandd7').find('a').index(this);
$('.urbandd').hide();
$('.urbandd').eq(t0).show();
$('#urbandd7').find('a').removeClass('move')
$(this).addClass('move');
return false;
})
$('.urban').eq(0).show();
$('#urbandd7').find('a').click(function(){
var t0=$('#urbandd7').find('a').index(this);
$('.urban').hide();
$('.urban').eq(t0).show();

})
//北京主要城市24小时预报TAB切换
$("#travelID").find('dl').eq(0).show();
$('.travelNav').find('li').click(function() {
	 //var obj=$(this).parents(".lqiangtravel");
          var linum=$('.travelNav').find('li').index(this);
	$('#travelID').find('dl').hide();
	$('#travelID').find('dl').eq(linum).show();
	return false;								  						  
})

/*$(".lqiangtravel").each(function(){
       $(this).find("#travelID").find('dl').eq(0).show();   
});
$('.travelNav').find('li').click(function() {
	 var obj=$(this).parents(".lqiangtravel");
          var linum=obj.find('.travelNav').find('li').index(this);
	obj.find('#travelID').find('dl').hide();
	obj.find('#travelID').find('dl').eq(linum).show();
	return false;								  						  
})*/
//天气查询
         

function request(paras){ 
var url = location.href;  
var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");  
var paraObj = {}  
for (i=0; j=paraString[i]; i++){  
paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);  
}  
var returnValue = paraObj[paras.toLowerCase()];  
if(typeof(returnValue)=="undefined"){  
return "";  
}else{  
return returnValue; 
}
}
$(function(){
	$areaid=request('areaid');
	$exp=/[0-9]{9}/;
         $url=location.href;
          if(!$exp.test($areaid))$areaid=$url.slice($url.lastIndexOf('/')+1,$url.lastIndexOf('.'));
	if(!$exp.test($areaid))$areaid='101010100';
	$provid=$areaid.substr(0,5);
	$districtid=$areaid.substr(5,2);
	$cityid=$areaid.substr(7,2);
	$chinaURL='/data/city3jdata/china.html';
	$provURL='/data/city3jdata/provshi/'+$provid+'.html';
	var $districtURL;
	if ($provid=='10101' || $provid=='10102' || $provid=='10103' || $provid=='10104')
	{
		$districtURL='/data/city3jdata/station/'+$provid+$cityid+'.html';
	}else
	{
		$districtURL='/data/city3jdata/station/'+$provid+$districtid+'.html';
	}
	
	$.ajax({type:'GET',url:$chinaURL,async:true,dataType:'json',success:function(data){
		$("#prov").empty();
                  $navprovname= $.trim($(".location .master a").eq(1).text());
		$.each(data,function(i,items){
			if ( i == $provid)
			{
			$('<option selected="selected" value="'+i+'">'+items+'</option>').appendTo("#prov");
			}else
			{
			$('<option value="'+i+'">'+items+'</option>').appendTo("#prov");
			}
		})
	}});
	$.ajax({type:'GET',url:$provURL,async:true,dataType:'json',success:function(data){
		$(".sel #district").empty();
		$.each(data,function(i,items){
			if (i == $districtid)
			{
			$('<option selected="selected" value="'+i+'">'+items+'</option>').appendTo(".sel #district");
			}else
			{
			$('<option value="'+i+'">'+items+'</option>').appendTo(".sel #district");
			}
		})
	}});
	$.ajax({type:'GET',url:$districtURL,async:true,dataType:'json',success:function(data){
		$(".sel #city").empty();
		$.each(data,function(i,items){
			if (i == $cityid)
			{
			$('<option selected="selected" value="'+i+'">'+items+'</option>').appendTo(".sel #city");
			}else
			{
			$('<option value="'+i+'">'+items+'</option>').appendTo(".sel #city");
			}
		})
	}});
	$(".sel #district").change(function(){
		$.ajax({type:'GET',url:'/data/city3jdata/station/'+$("#prov").val()+$("#district").val()+'.html',async:true,dataType:'json',success:function(data){
			$(".sel #city").empty();
			$.each(data,function(i,items){
				$('<option value="'+i+'">'+items+'</option>').appendTo(".sel #city");
			})
		}});
	});
	$(".sel #prov").change(function(){
		$.ajax({type:'GET',url:'/data/city3jdata/provshi/'+$("#prov").val()+'.html',async:false,dataType:'json',success:function(data){
			$(".sel #district").empty();
			$.each(data,function(i,items){
				$('<option value="'+i+'">'+items+'</option>').appendTo(".sel #district");
			})
		}});
		$.ajax({type:'GET',url:'/data/city3jdata/station/'+$("#prov").val()+$("#district").val()+'.html',async:true,dataType:'json',success:function(data){
			$(".sel #city").empty();
			$.each(data,function(i,items){
				$('<option value="'+i+'">'+items+'</option>').appendTo(".sel #city");
			})
		}});
	});
	$("#weatherselect").click(function(){
		$provid=$(".sel #prov").val();
		$districtid=$(".sel #district").val();
		$cityid=$(".sel #city").val();
		var $realid;
		if ($provid=='10101' || $provid=='10102' || $provid=='10103' || $provid=='10104')
		{
			$realid=$provid+$cityid+$districtid;
		}else
		{
			$realid=$provid+$districtid+$cityid;
		}
                  if ($cityid.length == 9)$realid=$cityid;

		$href='http://www.weather.com.cn/weather/'+$realid+'.shtml';

                 //window.open($href , window.opener); 
                window.open($href); 
	});
})


//天气查询结束


$('.hotSpotsBox').eq(0).show();
$('.weatherRankingBox').eq(0).show();
$('#hosSpotsNav').find('li').mouseover(function() {
	var ii=$('#hosSpotsNav').find('li').index(this);
	$('#hosSpotsNav').find('li').removeClass('move');
	$(this).addClass('move')
	$('.hotSpotsBox').hide();
	$('.hotSpotsBox').eq(ii).show();
	return false;	
})
$('#weatherRankingNav').find('li').mouseover(function() {
	var ii=$('#weatherRankingNav').find('li').index(this);
	$('#weatherRankingNav').find('li').removeClass('move');
	$(this).addClass('move')
	$('.weatherRankingBox').hide();
	$('.weatherRankingBox').eq(ii).show();
	return false;	
})

$('.lifeTravel div').eq(0).show();
$('#lifeTravelNav').children('li').mouseover(function() {
var n=$('#lifeTravelNav').children('li').index(this);
$('#lifeTravelNav').children('li').removeClass('move')
$(this).addClass('move');
$('.lifeTravel div').hide();
$('.lifeTravel div').eq(n).show();
});
//气象科普调用的JS脚本-------------------------------------------------------------------------begin
$('#disadvantageMain').find('dl').eq(0).show();
$('#disadvantageMainNav').find('li').click(function() { return false;});
$('#disadvantageMainNav').find('li').mouseover(function() {
		$('#disadvantageMain').find('dl').hide();
		var gnum=$('#disadvantageMainNav').find('li').index(this);
		$('#disadvantageMain').find('dl').eq(gnum).show();
		$('#disadvantageMainNav').find('li').removeClass('move');
		$(this).addClass('move');													
										
});
$('.climateBox').eq(0).show();
$('.wikipediaBox1').eq(0).show();
$('.wikipediaBox2').eq(0).show();
$('.spectacularBox').eq(0).show();
$('.spectacularBox2').eq(0).show();
$('#climateNavID').find('li').click(function() {return false;})
$('#wikipediaNavID1').find('li').click(function() {return false;})
$('#wikipediaNavID2').find('li').click(function() {return false;})
$('#spectacularNavID1').find('li').click(function() {return false;})
$('#spectacularNavID2').find('li').click(function() {return false;})

$('#climateNavID').find('li').mouseover(function() {
	var ii=$('#climateNavID').find('li').index(this);
	$('#climateNavID').find('li').removeClass('move');
	$(this).addClass('move')
	$('.climateBox').hide();
	$('.climateBox').eq(ii).show();
	return false;	
})
$('#wikipediaNavID1').find('li').mouseover(function() {
	var ii=$('#wikipediaNavID1').find('li').index(this);
	if (ii==0) { return false;}
	$('#wikipediaNavID1').find('li').removeClass('move');
	$(this).addClass('move')
	$('.wikipediaBox1').hide();
	$('.wikipediaBox1').eq(ii-1).show();
	return false;	
})
$('#wikipediaNavID2').find('li').mouseover(function() {
	var ii=$('#wikipediaNavID2').find('li').index(this);
	if (ii==0) { return false;}
	$('#wikipediaNavID2').find('li').removeClass('move');
	$(this).addClass('move')
	$('.wikipediaBox2').hide();
	$('.wikipediaBox2').eq(ii-1).show();
	return false;	
})
$('#spectacularNavID1').find('li').mouseover(function() {
	var ii=$('#spectacularNavID1').find('li').index(this);
	if (ii==0) { return false;}
	$('#spectacularNavID1').find('li').removeClass('move');
	$(this).addClass('move')
	$('.spectacularBox').hide();
	$('.spectacularBox').eq(ii-1).show();
	return false;	
})

$('#spectacularNavID2').find('li').mouseover(function() {
	var ii=$('#spectacularNavID2').find('li').index(this);
	if (ii==0) { return false;}
	$('#spectacularNavID2').find('li').removeClass('move');
	$(this).addClass('move')
	$('.spectacularBox2').hide();
	$('.spectacularBox2').eq(ii-1).show();
	return false;	
})
//气象科普调用的JS脚本-------------------------------------------------------------------------end




//灾害预警
$('.preventionVideo').find('dl:odd').css('float','right');


$('.RadarSatelliteimg').eq(0).show();
$('.RadarSatellite').find('li').mouseover(function() {
var t0=$('.RadarSatellite').find('li').index(this);
$('.RadarSatelliteimg').hide();
$('.RadarSatelliteimg').eq(t0).show();
$('.RadarSatellite').find('li').removeClass('moverad')
$(this).addClass('moverad');
return false;
})	

//生活天气
$('.parkwayChurchBox').eq(0).show();
//$('#parkwayChurch').children('li').find('a').click(function() {return false;});
$('.movieCommendFlash').eq(0).show();
//$('#recommendedVideo').children('li').find('a').click(function() {return false;});

$('#parkwayChurch').children('li').mousemove(function() {
var n=$('#parkwayChurch').children('li').index(this);
$('.parkwayChurchBox').hide();
$('.parkwayChurchBox').eq(n).show();
});

$('#recommendedVideo').children('li').mousemove(function() {
var n=$('#recommendedVideo').children('li').index(this);
$('.movieCommendFlash').hide();
$('.movieCommendFlash').eq(n).show();
});

//天气视频
$('.preventionVideoBox').find('dl:odd').attr('style','float:right');
$('.VideoBox').find('dl:odd').attr('style','float:right');




$(".VideoContent").eq(0).show();
	$("#VideoContent").find("a").mouseover(function(){
	var qhTab=$("#VideoContent").find("a").index(this);
	$(".VideoContent").hide();
	$(".VideoContent").eq(qhTab).css("display","block");
	return false;
		
	});

//天气预报
// 主要城市天气提醒
//$(".weatherRemindedBox").eq(0).show();
$("#movieCommendImage").find("a").mouseover(function(){
	var qhTab=$("#movieCommendImage").find("a").index(this);
         $("#movieCommendImage").find("a").removeClass("tqtxmove");
         $(this).addClass("tqtxmove");    
	$(".weatherRemindedBox").hide();
	$(".weatherRemindedBox").eq(qhTab).css("display","block");
	return false;		
	});
$("#movieCommendImage").find("a").eq(2).trigger("mouseover");

//天气预报
// 主要城市天气提醒详情页


$("#dayNightBox").find("img").mouseover(function(){
			var qhTab=$("#dayNightBox").find("img").index(this);
			$(".dayNightContent").hide();
			$(".dayNightContent").eq(qhTab).css("display","block");
			return false;
		
		});	








$(".LmeteorologicalKnowledgeBox1").eq(0).show();
			$("#LmeteorologicalKnowledgeBox").find("a").mouseover(function(){
				var qhTab=$("#LmeteorologicalKnowledgeBox").find("a").index(this);
				$(".LmeteorologicalKnowledgeBox1").hide();
				$(".LmeteorologicalKnowledgeBox1").eq(qhTab).css("display","block");
				return false;
		
		});

$(".gaoWenFlashContentRight").eq(0).show();
			$("#gaowen").find("li").mouseover(function(){
				var qhTab=$("#gaowen").find("li").index(this);
				$(".gaoWenFlashContentRight").hide();
				$(".gaoWenFlashContentRight").eq(qhTab).css("display","block");
				return false;
		
		});

			$("#affairStoreroomFlash").find("a").mouseover(function(){
				var qhTab=$("#affairStoreroomFlash").find("a").index(this);
				$(".affairStoreroomContent").hide();
				$(".affairStoreroomContent").eq(qhTab).css("display","block");
				return false;
		
		});


			$("#recoveryDirectoryFlash").find("a").mouseover(function(){
				var qhTab=$("#recoveryDirectoryFlash").find("a").index(this);
				$(".recoveryDirectoryContentFlash").hide();
				$(".recoveryDirectoryContentFlash").eq(qhTab).css("display","block");
				return false;
		
		});







//neimeng


$('.picShow4').eq(0).show();
$('#llqqtab_leftbox').find('a').click(function() {
var t0=$('#llqqtab_leftbox').find('a').index(this);
$('.picShow4').hide();
$('.picShow4').eq(t0).show();
$('#llqqtab_leftbox').find('a').removeClass('move')
$(this).addClass('move');
return false;
})
$('.inlandWeatherForecastContent').eq(0).show();
$('#lqinlandWeatherForecast').find('a').click(function() {
var t0=$('#lqinlandWeatherForecast').find('a').index(this);
$('.inlandWeatherForecastContent').hide();
$('.inlandWeatherForecastContent').eq(t0).show();
$('#lqinlandWeatherForecast').find('a').removeClass('move')
$(this).addClass('move');
return false;
})

$('.LmeteorologicalKnowledgeBox1').eq(0).show();
$('#d_jiangshui').find('span').mouseover(function() {
var t0=$('#d_jiangshui').find('span').index(this);
$('.LmeteorologicalKnowledgeBox1').hide();
$('.LmeteorologicalKnowledgeBox1').eq(t0).show();
$('#d_jiangshui').find('span').removeClass('move')
$(this).addClass('move');
return false;
})
$('.LmeteorologicalKnowledgeBox1').eq(0).show();
$('#LmeteorologicalKnowledgeBox').find('span').mouseover(function() {
var t0=$('#LmeteorologicalKnowledgeBox').find('span').index(this);
$('.LmeteorologicalKnowledgeBox1').hide();
$('.LmeteorologicalKnowledgeBox1').eq(t0).show();
$('#LmeteorologicalKnowledgeBox').find('span').removeClass('move')
$(this).addClass('move');
return false;
})

//东盟
$(".city").hover(function(e){
	var tab=$(".city").index(this);
	//$(".kuang").eq(tab).css({"top":e.clientY+5,"left":e.clientX+5});
	$(".kuang").eq(tab).show();
},function(){
    $(".kuang").hide();
});

	

function show1()
{
		document.getElementById("ul1").style.display="block";
		document.getElementById("ul2").style.display="none";
}
function show2()
{
		document.getElementById("ul1").style.display="none";
		document.getElementById("ul2").style.display="block";
}

function doZoom(size){
document.getElementById('zoom').style.fontSize=size+'px'
setTailPosition()
}

function MM_jumpMenu(targ,selObj,restore){
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}




//天气预报JS--------------------begin
$URL=window.location.href;
$('#weatherClickYubao').toggle(
	function() {
		$('#weatherYubao2').slideDown();
		$(this).html('关闭未来4-7天天气预报');
		return false;
	},
	function() {
		$('#weatherYubao2').slideUp();
		$(this).html('查看未来4-7天天气预报');
		return false;
	}
)
if ($URL.indexOf("7d")>-1)
{
	$('#weatherClickYubao').trigger("click");	
}	
//天气预报JS--------------------end

$('.rxlForecastBox').eq(0).show();
$('#rxlForecastBoxJs').find('a').click(function() {
	var t0=$('#rxlForecastBoxJs').find('a').index(this);
	$('.rxlForecastBox').hide();
	$('.rxlForecastBox').eq(t0).show();
	$('#rxlForecastBoxJs').find('a').removeClass('move')
	$(this).addClass('move');
	return false;
})

$(".weatherFeatureContent1").eq(0).show();
			$("#weatherFeatureList1").find("li").click(function(){
				var qhTab=$("#weatherFeatureList1").find("li").index(this);
				$(".weatherFeatureContent1").hide();
				$(".weatherFeatureContent1").eq(qhTab).css("display","block");
				return false;
		
		});


//专题
$(".rlifeWeatherForecastRight").eq(0).show();
			$("#rlifeWeatherForecastLeft").find("img").mouseover(function(){
				var qhTab=$("#rlifeWeatherForecastLeft").find("img").index(this);
				$(".rlifeWeatherForecastRight").hide();
				$(".rlifeWeatherForecastRight").eq(qhTab).css("display","block");
				return false;
		
			});





$(".da").find("a").click(function(){
				$(".rainstormRecoveryDirectory").find("dl").css("font-size","16px");
				});
$(".zhong").find("a").click(function(){
				$(".rainstormRecoveryDirectory").find("dl").css("font-size","14px");
				});
$(".xiao").find("a").click(function(){
				$(".rainstormRecoveryDirectory").find("dl").css("font-size","12px");
				});



$(".hotSpotsNav li a").click(function(){return false;});



setTimeout('xhgdplay()',5000);

	$(".xhgd li").hover(function(){
		$(".xhgd li.one").removeClass("one");
		$(this).addClass("one");
		$(".xhgd p img").attr('src',$(this).find('a').attr("imghref"));
		$(".xhgd p a").attr('href',$(this).find('a').attr("href"));
	});

setTimeout('cdplay()',5500);

})

function cdplay(){
          var let=$("#rightWeatherIg ul li").length;
          $obj=$("#rightWeatherIg ul li:visible");
          $pd=$("#rightWeatherIg ul li").index($obj)+1;
          $obj.hide();
         
         if($pd== let)
          {
          $("#rightWeatherIg ul li:first").show();   
          }else{ 
              $obj.next().show();
         }
          
        	 setTimeout('cdplay()',5500);
         
}




function xhgdplay(){
	$tab=$(".xhgd li").index($(".xhgd li.one"));
	if ($tab == $(".xhgd li").length-1)$tab=-1;
	$(".xhgd li.one").removeClass("one");
	$(".xhgd p img").attr('src',$(".xhgd li").eq($tab+1).find('a').attr("imghref"));
	$(".xhgd p a").attr('href',$(".xhgd li").eq($tab+1).find('a').attr("href"));
	$(".xhgd li").eq($tab+1).addClass("one");
	setTimeout('xhgdplay()',5000);
}

