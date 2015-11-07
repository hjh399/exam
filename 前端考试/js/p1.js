window.onload=function p1(){
	var timeInterval=5000;
	var curIndex=1;
	//时间间隔 单位毫秒
	var arr=new Array();
	arr[0]="http://open.163.com/";
	arr[1]="http://study.163.com/";
	arr[2]="http://www.icourse163.org/";

	var img=document.getElementById("p1-i");
	var a=document.getElementById("p1-a");	
	
	function changeImg(){

		
		var arr1 = new Array();
		arr1[0]=document.getElementById("p1-1");
		arr1[1]=document.getElementById("p1-2");
		arr1[2]=document.getElementById("p1-3");

		if (curIndex==arr.length)
			{
			curIndex=1;
			arr1[0].style.backgroundPosition="0px -20px";
			arr1[2].style.backgroundPosition="0px -35px";
			}
		else
			{
			curIndex++;
			arr1[curIndex-1].style.backgroundPosition="0px -20px";
			arr1[curIndex-2].style.backgroundPosition="0px -35px";
			}

		img.src="./image/banner"+curIndex+".jpg";
		a.href=arr[curIndex-1];
		arr1[curIndex-1].style.backgroundPosition="0px -20px";
	} 

	var dingshiqi = setInterval(changeImg,timeInterval);

	a.onmouseover = function(){
		clearInterval(dingshiqi);
	}
	a.onmouseout = function(){
		dingshiqi = setInterval(changeImg,timeInterval);		
	}
}