$(function () {
    /** 验证文件是否导入成功  */
    $("#form1").ajaxForm(function (data) {
        var oDiv = document.getElementById("carTitleimage");
        oDiv.innerText = data.titleFileName;
    });
});

$(function () {
    /** 验证文件是否导入成功  */
    $("#form2").ajaxForm(function (data) {
        var oDiv = document.getElementById("carMoreimage");
        oDiv.innerText = data.moreFileName;
    });
});


$(function () {
    /** 验证文件是否导入成功  */
    $("#form3").ajaxForm(function (data) {
        var oDiv = document.getElementById("carMoreimage2");
        oDiv.innerText = data.moreFileName2;
    });
});

// 文章保存

//初始化编辑器
$(document).ready( function() {
    $("#summernote").summernote({
      minHeight: 300,             // set minimum height of editor
      callbacks:{
        onImageUpload: function(file) { //图片默认以二进制的形式存储到数据库，调用此方法将请求后台将图片存储到服务器，返回图片请求地址到前端
            //将图片放入Formdate对象中      
            var formData = new FormData(); 
            //‘picture'为后台获取的文件名，file[0]是要上传的文件
            formData.append("picture", file[0]); 

            $.ajax({    
                type:'post', 
                url:'/article-uploadeImage',   
                cache: false,
                data:formData, 
                processData: false,
                contentType: false,
                dataType:'json', //请求成功后，后台返回图片访问地址字符串，故此以text格式获取，而不是json格式
                success: function(data) {
                    alert(data.code);    
                    $('#summernote').summernote('insertImage',data.pictureName); 
                }, 
                error:function(){       
                    alert("上传失败");       
                } 
            });
        }
          
      }
    });                    
  });

//保存
var save = function() {
    var markup = $('#summernote').summernote('code');
    alert(markup);
};


var saveButton = $('#save').click(() => {
    //console.log($('#frame1').contents());
    $.ajax({
        type: 'POST',
        url: '/submitCar',
        dataType: 'json',
        data: {
            carID: $('#carID').val(),
            carLogo: $('#carLogo').val(),
            carTitle1: $('#carTitle1').val(),
            carTitle2: $('#carTitle2').val(),
            carPriceMin: $('#carPriceMin').val(),
            carPriceMax: $('#carPriceMax').val(),
            carChexingjiegou: $('#carChexingjiegou').val(),
            carDipanleixing: $('#carDipanleixing').val(),
            carZhunjialeixing: $('#carZhunjialeixing').val(),
            carZuoweishu: $('#carZuoweishu').val(),
            carChechang: $('#carChechang').val(),
            carChekuang: $('#carChekuang').val(),
            carChegao: $('#carChegao').val(),
            carZhouju: $('#carZhouju').val(),
            carQianlunju: $('#carQianlunju').val(),
            carHoulunju: $('#carHoulunju').val(),
            carZuixiaolidijianxi: $('#carZuixiaolidijianxi').val(),
            carZhengbeizhiliang: $('#carZhengbeizhiliang').val(),
            carJiejinjiao: $('#carJiejinjiao').val(),
            carLiqujiao: $('#carLiqujiao').val(),
            carQianxuanguaxingshi: $('#carQianxuanguaxingshi').val(),
            carHouxuanguaxingshi: $('#carHouxuanguaxingshi').val(),
            carKebianxuangua: $('#carKebianxuangua').val(),
            carFadongjichangjiaxinghao: $('#carFadongjichangjiaxinghao').val(),
            carPailiang: $('#carPailiang').val(),
            carJinqixingshi: $('#carJinqixingshi').val(),
            carFadongjigonglv: $('#carFadongjigonglv').val(),
            carFadongjimali: $('#carFadongjimali').val(),
            carFadongjiniuju: $('#carFadongjiniuju').val(),
            carDangweishu: $('#carDangweishu').val(),
            carBiansuxiang: $('#carBiansuxiang').val(),
            carQudongfangshi: $('#carQudongfangshi').val(),
            carRanyoujibiaohao: $('#carRanyoujibiaohao').val(),
            carHuanbaobiaozhun: $('#carHuanbaobiaozhun').val(),
            carGuanfangyouhao: $('#carGuanfangyouhao').val(),
            carYouxiangrongji: $('#carYouxiangrongji').val(),
            carQianluntaiguige: $('#carQianluntaiguige').val(),
            carHouluntaiguige: $('#carHouluntaiguige').val(),
            carBeitaiguige: $('#carBeitaiguige').val(),
            carLvhejinlungu: $('#carLvhejinlungu').val(),
            carTaiyajiancexitong: $('#carTaiyajiancexitong').val(),
            carWaizhichufang: $('#carWaizhichufang').val(),
            carWaizhilinyu: $('#carWaizhilinyu').val(),
            carWaizhidianshi: $('#carWaizhidianshi').val(),
            carZheyangpeng: $('#carZheyangpeng').val(),
            carDiandongtabu: $('#carDiandongtabu').val(),
            carShiwaideng: $('#carShiwaideng').val(),
            carPati: $('#carPati').val(),
            carZixingchejia: $('#carZixingchejia').val(),
            carTuochegou: $('#carTuochegou').val(),
            carChuwugui: $('#carChuwugui').val(),
            carTuozhancang: $('#carTuozhancang').val(),
            carQita: $('#carQita').val(),
            carDuogongnengfangxiangpan: $('#carDuogongnengfangxiangpan').val(),
            carFangxiangpantiaojie: $('#carFangxiangpantiaojie').val(),
            carZhulizhuanxiangleixing: $('#carZhulizhuanxiangleixing').val(),
            carPizhizuoyi: $('#carPizhizuoyi').val(),
            carZhiwupishuangpingzuoyi: $('#carZhiwupishuangpingzuoyi').val(),
            carJiashiweizuoyitiaojie: $('#carJiashiweizuoyitiaojie').val(),
            carFujiashiweizuoyitiaojie: $('#carFujiashiweizuoyitiaojie').val(),
            carDierpaizuoyitiaojie: $('#carDierpaizuoyitiaojie').val(),
            carZuoyigaoditiaojie: $('#carZuoyigaoditiaojie').val(),
            carZuoyitongfeng: $('#carZuoyitongfeng').val(),
            carQianpaizuoyijiare: $('#carQianpaizuoyijiare').val(),
            carYinxiangpinpai: $('#carYinxiangpinpai').val(),
            carYangshengqishuliang: $('#carYangshengqishuliang').val(),
            carChezaidianshi: $('#carChezaidianshi').val(),
            carChezailanya: $('#carChezailanya').val(),
            carJiashiweianquanqinang: $('#carJiashiweianquanqinang').val(),
            carFujiashiweianquanqinang: $('#carFujiashiweianquanqinang').val(),
            carKongtiaoleixing: $('#carKongtiaoleixing').val(),
            carHoupaikongtiaochukou: $('#carHoupaikongtiaochukou').val(),
            carCheneikongqijinhua: $('#carCheneikongqijinhua').val(),
            carDaocheleida: $('#carDaocheleida').val(),
            carBingxianfuzhu: $('#carBingxianfuzhu').val(),
            carZishiyingxunhang: $('#carZishiyingxunhang').val(),
            carQuanjingshexiangtou: $('#carQuanjingshexiangtou').val(),
            carDaocheyingxiang: $('#carDaocheyingxiang').val(),
            carGPSdaohang: $('#carGPSdaohang').val(),
            carDingsuxunhang: $('#carDingsuxunhang').val(),
            carWuyaoshiqidong: $('#carWuyaoshiqidong').val(),
            carShafazuoweishu: $('#carShafazuoweishu').val(),
            carXingshikechengzuorenshu: $('#carXingshikechengzuorenshu').val(),
            carShafacaizhi: $('#carShafacaizhi').val(),
            carShafazhuo: $('#carShafazhuo').val(),
            carShengjiangzhuo: $('#carShengjiangzhuo').val(),
            carFangchezhuanyongchouyouyanji: $('#carFangchezhuanyongchouyouyanji').val(),
            carFangchezhuanyongbingxiang: $('#carFangchezhuanyongbingxiang').val(),
            carBingxiangrongji: $('#carBingxiangrongji').val(),
            carBingxiangleixing: $('#carBingxiangleixing').val(),
            carXicaichi: $('#carXicaichi').val(),
            carShuilongtoulengreshuiketiao: $('#carShuilongtoulengreshuiketiao').val(),
            carDiancilu: $('#carDiancilu').val(),
            carKaoxiang: $('#carKaoxiang').val(),
            carWeibolu: $('#carWeibolu').val(),
            carXiwanji: $('#carXiwanji').val(),
            carRanxiguanshuliang: $('#carRanxiguanshuliang').val(),
            carRanxiguanrongji: $('#carRanxiguanrongji').val(),
            carDanrenchuangshuliang: $('#carDanrenchuangshuliang').val(),
            carDanrenchuangchicun: $('#carDanrenchuangchicun').val(),
            carShuangrenchuangchicun: $('#carShuangrenchuangchicun').val(),
            carShuangrenchuangshuliang: $('#carShuangrenchuangshuliang').val(),
            carZongchuangweishu: $('#carZongchuangweishu').val(),
            carWeishengjian: $('#carWeishengjian').val(),
            carWeishengjianxingshi: $('#carWeishengjianxingshi').val(),
            carLinyuqi: $('#carLinyuqi').val(),
            carZuobianqi: $('#carZuobianqi').val(),
            carWeishengjianxishouchi: $('#carWeishengjianxishouchi').val(),
            carNuanfengchukou: $('#carNuanfengchukou').val(),
            carHuanqishan: $('#carHuanqishan').val(),
            carReshuiqi: $('#carReshuiqi').val(),
            carReshuiqileixing: $('#carReshuiqileixing').val(),
            carXiyiji: $('#carXiyiji').val(),
            carTaiyangnengdianchiban: $('#carTaiyangnengdianchiban').val(),
            carTaixiangnengdianchibanfadianliang: $('#carTaixiangnengdianchibanfadianliang').val(),
            carFadianji: $('#carFadianji').val(),
            carFadianjileixing: $('#carFadianjileixing').val(),
            carNibianqi: $('#carNibianqi').val(),
            carNibianqigonglv: $('#carNibianqigonglv').val(),
            carZhongyangkongzhimianban: $('#carZhongyangkongzhimianban').val(),
            carDianpingshuliang: $('#carDianpingshuliang').val(),
            carDianpingdianliang: $('#carDianpingdianliang').val(),
            carFangchezhuanyongshuibeng: $('#carFangchezhuanyongshuibeng').val(),
            carJingshuixiangrongji: $('#carJingshuixiangrongji').val(),
            carHeishuixiangrongji: $('#carHeishuixiangrongji').val(),
            carHuishuixiangrongji: $('#carHuishuixiangrongji').val(),
            carPaiwufangshi: $('#carPaiwufangshi').val(),
            carYinshuijinghuaxitong: $('#carYinshuijinghuaxitong').val(),
            carChezaiWifi: $('#carChezaiWifi').val(),
            carWeixingdianshi: $('#carWeixingdianshi').val(),
            carChezaidianshi: $('#carChezaidianshi').val(),
            carChezaiKTV: $('#carChezaiKTV').val(),
            carDVDjitou: $('#carDVDjitou').val(),
            carChezaiyingxiang: $('#carChezaiyingxiang').val(),
            carYinxiangshuliang: $('#carYinxiangshuliang').val(),
            carZhucheranyoujiarexitong: $('#carZhucheranyoujiarexitong').val(),
            carFangchezhuanyongkongtiao: $('#carFangchezhuanyongkongtiao').val(),
            carKongtiaoxingshi: $('#carKongtiaoxingshi').val(),
            carRanqinuanfengxitong: $('#carRanqinuanfengxitong').val(),
            carYanwubaojingxi: $('#carYanwubaojingxi').val(),
            carMeiqibaojingqi: $('#carMeiqibaojingqi').val(),
            carYiyanghuatanbaojingqi: $('#carYiyanghuatanbaojingqi').val(),
            carTitleImage: $('#carTitleimage').text(),
            carMoreImage: $('#carMoreimage').text(),
            carMoreImage2: $('#carMoreimage2').text(),
        }
    })
});