function ajax(obj) {
    // var xhr = (function () {
    //     创建XMLHttpRequest对象
    //     if (typeof XMLHttpRequest != 'undefined') {
    //         // code for IE7+, Firefox, Chrome, Opera, Safari
    //         return new XMLHttpRequest();
    //     } else if (typeof ActiveXObject != 'undefined') {
    //         // code for IE6, IE5
    //         var version = [
    //                                     'MSXML2.XMLHttp.6.0',
    //                                     'MSXML2.XMLHttp.3.0',
    //                                     'MSXML2.XMLHttp'
    //         ];
    //         for (var i = 0; version.length; i ++) {
    //             try {
    //                 return new ActiveXObject(version[i]);
    //             } catch (e) {
    //                 //跳过
    //             }    
    //         }
    //     } else {
    //         throw new Error('您的系统或浏览器不支持XHR对象！');
    //     }
    // })();

    var xhr = new XMLHttpRequest();


    //url加随机参数，防止缓存
    obj.url = obj.url + '?rand=' + Math.random();
    //请求参数格式化，encodeURIComponent编码参数可以出现
    obj.data = (function (data) {
        var arr = [];
        for (var i in data) { 
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        }
        return arr.join('&');
    })(obj.data);
    if (obj.method === 'get') obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data;
    if (obj.async === true) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                callback();
            }
        };
    }
      
    xhr.open(obj.method, obj.url, obj.async);
    if (obj.method === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(obj.data);    
    } else {
        xhr.send(null);
    }
    if (obj.async === false) {
        callback();
    }
    function callback() {
        if (xhr.status == 200) {
            obj.success(xhr.responseText);            //回调传递参数
        } else {
            alert('获取数据错误！错误代号：' + xhr.status + '，错误信息：' + xhr.statusText);
        }    
    }
}
f1();
// 点击产品设计时
function f1(){
ajax({
    method : 'get',
    url : 'http://study.163.com/webDev/couresByCategory.htm',
    data : {
        'pageNo':'2',
        'psize':'12',
        'type':'10'
    },
    success : function (data) {
        console.log(data);
        var _data= JSON.parse(data);
  
        var oDiv = document.getElementById("p4-l-body");
        
        oDiv.innerHTML=null;

        for(i=0;i<_data.list.length;i++){
            var oLi = document.createElement("li");
            oDiv.appendChild(oLi);
  
            var _img = document.createElement("img");
            var _name = document.createElement("p");
            var _price = document.createElement("p");
            var _description = document.createElement("p");
  
            _img.setAttribute("class", "p4-l-b-i");
            _img.setAttribute("src", _data.list[i].bigPhotoUrl);
  
            _name.setAttribute("class", "p4-l-b-1");
            _name.innerHTML=_data.list[i].name;

            _price.setAttribute("class", "p4-l-b-2");
            _price.innerHTML="价格："+_data.list[i].price;
            
            _description.setAttribute("class", "p4-l-b-3");
            _description.innerHTML=_data.list[i].description;
  
            oLi.appendChild(_img);
            oLi.appendChild(_name);
            oLi.appendChild(_price);
            oLi.appendChild(_description);
        }
    },
    async : true
});
color("t1");
}

// 点击编程语言时
function f2(){
ajax({
    method : 'get',
    url : 'http://study.163.com/webDev/couresByCategory.htm',
    data : {
        'pageNo':'2',
        'psize':'12',
        'type':'20'
    },
    success : function (data) {
        console.log(data);
        var _data= JSON.parse(data);
  
        var oDiv = document.getElementById("p4-l-body");

        oDiv.innerHTML=null;
  
        for(i=0;i<_data.list.length;i++){
            var oLi = document.createElement("li");
            oDiv.appendChild(oLi);
  
            var _img = document.createElement("img");
            var _name = document.createElement("p");
            var _price = document.createElement("p");
            var _description = document.createElement("p");
  
            _img.setAttribute("class", "p4-l-b-i");
            _img.setAttribute("src", _data.list[i].bigPhotoUrl);
  
            _name.setAttribute("class", "p4-l-b-1");
            _name.innerHTML=_data.list[i].name;

            _price.setAttribute("class", "p4-l-b-2");
            _price.innerHTML="价格："+_data.list[i].price;

            _description.setAttribute("class", "p4-l-b-3");
            _description.innerHTML=_data.list[i].description;
  
            oLi.appendChild(_img);
            oLi.appendChild(_name);
            oLi.appendChild(_price);
            oLi.appendChild(_description);
        }
    },
    async : true
});
color("t2");
}

function color(obj){
    if (obj=="t1") {
        var t1 = document.getElementById("p4-l-t-1");
        var t2 = document.getElementById("p4-l-t-2");

        t1.style.color="#ffffff";
        t1.style.backgroundColor="#39a030";
        t2.style.color="#666666";
        t2.style.backgroundColor="#ffffff";
    }
    else if (obj=="t2"){
        var t1 = document.getElementById("p4-l-t-1");
        var t2 = document.getElementById("p4-l-t-2");       

        t1.style.color="#666666";
        t1.style.backgroundColor="#ffffff";
        t2.style.color="#ffffff";
        t2.style.backgroundColor="#39a030";
    }


}