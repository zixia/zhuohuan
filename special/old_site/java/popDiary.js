function popDiary()
{	var msg="";
	var dateMsg="";
	var windMsg="";
	var weatherMsg="";
	var changeMsg="";
	var nvgtMsg="";
	var wellMsg="不知我的这位朋友是不是使用的800X600的分辨率，16K以上的颜色来浏览呀！不是的话，可能会有些地方不好看。哎，我还多什么心呢？现在谁还用640X480了。^_^";

	var i,j,k;
	var weather=new makearray(10);
	var direction=new makearray(4);
	var today=new Date();
	var hBirthday=new Date(98,4,1);
	var changeDate=new Date(document.lastModified);

	weather[0]="一般";weather[1]="晴朗";weather[2]="阴天";weather[3]="多云转晴";weather[4]="晴转多云";weather[5]="小雨";weather[6]="大雨";weather[7]="多云，有雨";weather[8]="小雨转晴";weather[9]="下了一天雨";weather[10]="万里无云";weather[11]="压抑";
	direction[0]="东南";direction[1]="东";direction[2]="南";direction[3]="西";direction[4]="北";direction[5]="东北";direction[6]="西南";direction[7]="西北";

	weatherMsg="天气："+weather[Math.floor(Math.random()*10+0.5)];

	i=Math.floor(Math.random()*6+0.5);
	windMsg=direction[i]+"风";
	while((j=Math.floor(Math.random()*6+0.5))==i);
	windMsg+="转"+direction[j]+"风"+(k=Math.floor(Math.random()*3+0.5))+"到"+(k+Math.floor(Math.random()*3+0.5))+"级";
	
	dateMsg=today.getYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日"+"　　星期"+today.getDay();
	
	nvgtMsg="今天又有朋友用第"+navigator.appVersion+"版的"+navigator.appName+"浏览器访问了我的主页。";
	if(navigator.appName!="Netscape")
		nvgtMsg+="但是目前我只对我的主页做过Netscape4.04版本上的测验。:( 所以，我想她可能会遇到一些错误吧！:-P 我希望她遇到错误能通知我，不知道她会不会帮我这个忙呢？ :)";


	changeMsg="这次最后维护我的主页是什么时候来着？大概是"+changeDate.getYear()+"年"+(changeDate.getMonth()+1)+"月"+changeDate.getDate()+"日"+changeDate.getHours()+"点"+changeDate.getMinutes()+"分... ....恩，是哪一秒呢？嘻嘻，记不得喽~。^_^";
	if(today.getMonth()>changeDate.getMonth()||(today.getMonth()==changeDate.getMonth())&&(today.getDate()-changeDate.getDate())>5)
		changeMsg+="唉，因为各种各样的原因，我已经"+(today.getMonth()-changeDate.getMonth())+"个月零"+(today.getDate()-changeDate.getDate())+"天没有维护我可爱的家了:(... ...真是对不起这位网友呀！我什么时候变得这么懒了... ...真是！.... 过两天一定要好好干活！:)我衷心希望这位网友不要生气呀！^_^";

	msg="<html><head><meta http-equiv='Content-Type' content='text/html; charset=gb2312'><title>卓桓日志 -哇！！你看了！你偷看我的日记！！！这个...你要保守秘密呦~</title></head><body bgcolor=Black background='images/background.gif' text=Yellow>"

	msg+="<center><font face='宋体' color=Lime><h4>"+dateMsg+"　　"+windMsg+"　　"+weatherMsg+"</h4></center><hr></font><p><font face='楷体_GB2312'>";

	msg+="　　"+nvgtMsg+"呵呵，我很高兴呦~^_^。想起来也很有意思，自从我在1998年5月份开始制作我的个人主页到现在也"+((today.getYear()-hBirthday.getYear())*12+today.getMonth()-hBirthday.getMonth())+"个月了。嘻嘻，在建设这个主页的过程中，我体会到了技术并不是很重要，谁都会学会的(只要肯花时间~_^)。但是，思想和内容是一时半会儿而学不会的，而我好象就缺乏这一点(唉，好象和编MUD有着异曲同工只处?... :)。<br>　　"+changeMsg+"<br>";

	msg+="　　"+wellMsg+"<br>";

	msg+="<br><br><br><br><center><form name=input><font face='仿宋'><input type=button name=button value='呸！搞什么啦！不看！哼～～～没意思~_~' onClick='window.close()'></form></center></font></body></html>";
	Diary=open("","Diary","width=580,height=400,scrollbars");
	Diary.document.clear();
	Diary.document.write(msg);
	Diary.focus();
	return;
}

	