window.onload=function(){
    changeStatus(window.location.href)
}



$(".select-box li").click(function(){
    $(this).addClass('on').siblings().removeClass("on");
    window.location.href=getSelect();
})


function getSelect(){
    var url =window.location.href;
    var arr=[];
    var select=[];

    //每次刷新后清除url参数
    arr=url.split("/p");
    url=arr[0];
    //获取选中参数
    $(".select-box ul").each(function(){
        var p=$(this);
        var _where=[],name,attr;

        _where['name']=$(this).attr("class");

        p.find("li").each(function(){
            if($(this).hasClass("on")){
                _where['attr']=$(this).attr("data-attr");
            }
        });
        select.push(_where)
    });

    //重新复制url
    if(select.length>1){
        var url1='';
        for(var i=0;i<select.length;i++){
            url1+=select[i]['name']+"="+select[i]['attr']+"/";

        }
        url=url+"/"+url1;
        return url.substr(0,url.length-1);
    }
}

//页面Div默认选中已选择的条件
function changeStatus(url){
    var params=url.split("s/")[1];

    if(params){
        _arr=params.split("/");
    }else{
        return false;
    }

    //对应url参数获取已经选择的条件,添加on样式
    for(var i=0;i<_arr.length;i++){
        var name,attr;
        var _name=$(".select-box >ul").eq(i).attr("class");
        var div_attr=$(".select-box > ul").eq(i).find("li");
        var _attr;

        name = _arr[i].split("=")[0];
        attr = _arr[i].split("=")[1];
        div_attr.each(function(){
            var obj=$(this);
            _attr=obj.attr("data-attr");
            if(name==_name&&attr==_attr){
                obj.addClass("on").siblings().removeClass("on");
            }
        });
    }
}