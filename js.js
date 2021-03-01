let htmlWidth =document.documentElement.clientWidth || document.body.clientWidth;
console.log(htmlWidth);
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize=htmlWidth /20 +'px';


var btn=document.querySelector("button");
var txt=document.querySelector("input");
btn.onclick=function(){
    var val=txt.value;
    var xhr=new XMLHttpRequest();
    xhr.open('get','https://www.tianqiapi.com/free/day?appid=35816831&appsecret=v3vvYHZ3&city=' +val);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200)
        {
            var resultObj=JSON.parse(xhr.responseText);
            console.log(resultObj);
            var city=resultObj.city;
            var temnow=resultObj.tem;
            var weather=resultObj.wea;
            var wind=resultObj.win;
            document.querySelector(".city").innerHTML=city;
            document.querySelector(".temnow").innerHTML='实时温度：'+temnow+'℃'
            document.querySelector(".weather").innerHTML='天气状况：'+weather;
            document.querySelector(".wind").innerHTML='风向：'+wind;
        }
    }
    xhr.send();
    var xhrn=new XMLHttpRequest();
    xhrn.open('get','https://www.tianqiapi.com/free/week?appid=35816831&appsecret=v3vvYHZ3&city=' +val);
    xhrn.onreadystatechange=function()
    {
        if(xhrn.readyState==4 && xhrn.status==200)
        {
            var result=JSON.parse(xhrn.responseText);
            console.log(result);
            var first=result.data[0];
            var first_time=first.date;
            var first_wea=first.wea;
            var first_most=first.tem_day;
            var first_last=first.tem_night;
            document.querySelector('.first').innerHTML=first_time+first_wea+first_most+'℃/'+first_last+'℃';
            var second=result.data[1];
            var second_time=second.date;
            var second_wea=second.wea;
            var second_most=second.tem_day;
            var second_last=second.tem_night;
            document.querySelector('.second').innerHTML=second_time+second_wea+second_most+'℃/'+second_last+'℃';
            var third=result.data[2];
            var third_time=third.date;
            var third_wea=third.wea;
            var third_most=third.tem_day;
            var third_last=third.tem_night;
            document.querySelector('.third').innerHTML=third_time+third_wea+third_most+'℃/'+third_last+'℃';
            var fourth=result.data[3];
            var fourth_time=fourth.date;
            var fourth_wea=fourth.wea;
            var fourth_most=fourth.tem_day;
            var fourth_last=fourth.tem_night;
            document.querySelector('.fourth').innerHTML=fourth_time+fourth_wea+fourth_most+'℃/'+fourth_last+'℃';
            var fifth=result.data[4];
            var fifth_time=fifth.date;
            var fifth_wea=fifth.wea;
            var fifth_most=fifth.tem_day;
            var fifth_last=fifth.tem_night;
            document.querySelector('.fifth').innerHTML=fifth_time+fifth_wea+fifth_most+'℃/'+fifth_last+'℃';
            var sixth=result.data[5];
            var sixth_time=sixth.date;
            var sixth_wea=sixth.wea;
            var sixth_most=sixth.tem_day;
            var sixth_last=sixth.tem_night;
            document.querySelector('.sixth').innerHTML=sixth_time+sixth_wea+sixth_most+'℃/'+sixth_last+'℃';
            var seventh=result.data[6];
            var seventh_time=seventh.date;
            var seventh_wea=seventh.wea;
            var seventh_most=seventh.tem_day;
            var seventh_last=seventh.tem_night;
            document.querySelector('.seventh').innerHTML=seventh_time+seventh_wea+seventh_most+'℃/'+seventh_last+'℃';
        }
    }
xhrn.send();
}
var point1=document.getElementsByClassName('point1')[0];
var point2=document.getElementsByClassName('point2')[0];
var item1=document.getElementsByClassName('item1')[0];
var item2=document.getElementsByClassName('item2')[0];
point1.onclick=function(){
    point1.style.color="snow";
    point2.style.color="black";
    item1.style.opacity="1";
    item2.style.opacity="0";
}
point2.onclick=function(){
    point2.style.color="snow";
    point1.style.color="black";
    item2.style.opacity="1";
    item1.style.opacity="0";
}





