var getCookie=function(Name) 
{ 
	var search = Name + "=" 
	if(document.cookie.length > 0) 
	{ 
		offset = document.cookie.indexOf(search) 
		if(offset != -1) 
		{ 
			offset += search.length 
			end = document.cookie.indexOf(";", offset) 
			if(end == -1) end = document.cookie.length 
			return unescape(document.cookie.substring(offset, end)) 
		} 
		else return "" 
	} 
}
CreateJumpList();

function CreateJumpList()
{
	try 
	{
	  if (window.external.msIsSiteMode()) {
		window.external.msSiteModeClearJumpList();
		window.external.msSiteModeCreateJumpList("已经定制的城市");
		var iscustom=true;
		ie9alarmareaid='';
                   for (i=6;i>0;i--)
		{
			IE9aeraid='ctid'+i;
			IE9aeraname='city'+i;
			
			if (getCookie(IE9aeraid) && getCookie(IE9aeraname))
			{
				iscustom=false;
				areaid=getCookie(IE9aeraid);
				$item={
					"name":getCookie(IE9aeraname),
					"uri":"http://www.weather.com.cn/weather/"+areaid+".shtml"
				};
				window.external.msSiteModeAddJumpListItem($item.name+'天气预报',$item.uri,"http://www.weather.com.cn/favicon.ico","self");
				ie9alarmareaid += '|'+areaid+'|'+areaid.substr(0,7)+'|'+areaid.substr(0,5);
			}
		}
		if (iscustom)
		{
			window.external.msSiteModeAddJumpListItem("定制我的城市","http://www.weather.com.cn/static/custom/select.html","http://www.weather.com.cn/favicon.ico","self");
			window.external.msSiteModeAddJumpListItem("北京天气预报","http://www.weather.com.cn/weather/101010100.shtml","http://www.weather.com.cn/favicon.ico","self");
			ie9alarmareaid='|101010100|1010101|10101';			
		}
		//加载预警信息
		ie9alarmareaid=ie9alarmareaid.substr(1);
		var head=document.getElementsByTagName('head').item(0); 
		
		var script=document.createElement('script'); 
		script.src='http://lab.weather.com.cn/alarm/grepalarm.php?areaid='+ie9alarmareaid+'&count=0&name=ie9alarminfo&time='+Math.random(); 
		script.type='text/javascript'; 
		script.defer=true; 
		script.onreadystatechange = function() {
			if(script.readyState == "loaded" || script.readyState == "complete") {
				Loadie9Alarm();
			}
		}
                  /*
		script.onload = function() {
			Loadie9Alarm();
		}*/
		void( head.appendChild(script)); 
	  }
	} catch (ex) {}
}
function Loadie9Alarm()
{
	
         if (ie9alarminfo.count > 0)
	{
		
            window.external.msSiteModeAddJumpListItem("定制城市的气象灾害预警","http://www.weather.com.cn/alarm/newalarmlist.shtml?areaids="+ie9alarmareaid,"http://www.weather.com.cn/m2/i/icon/faviconalarm.ico","self");
	   window.external.msSiteModeSetIconOverlay("http://www.weather.com.cn/m2/i/icon/faviconalarm.ico","Overlay 1");    
	   window.external.msSiteModeActivate();	
	}
}
