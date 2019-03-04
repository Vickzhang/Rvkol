

// $(function () {
//     /** 验证文件是否导入成功  */
//     $("#form1").ajaxForm(function (data) {
//         var oDiv = document.getElementById("carTitleimage");
//         oDiv.innerText = data.titleFileName;
//     });
// });

// $(function () {
//     /** 验证文件是否导入成功  */
//     $("#form2").ajaxForm(function (data) {
//         var oDiv = document.getElementById("carMoreimage");
//         oDiv.innerText = data.moreFileName;
//     });
// });


// $(function () {
//     /** 验证文件是否导入成功  */
//     $("#form3").ajaxForm(function (data) {
//         var oDiv = document.getElementById("carMoreimage2");
//         oDiv.innerText = data.moreFileName2;
//     });
// });

// 文章保存

//初始化编辑器
$(document).ready( function() {
    $("#summernote").summernote({
      minHeight: 300,             // set minimum height of editor
      lang: 'zh-CN',
      placeholder: '填写文章....',
      toolbar: [
        // <!--字体工具-->
        ['fontname', ['fontname']], //字体系列                                 
        ['style', ['bold', 'italic', 'underline', 'clear']], // 字体粗体、字体斜体、字体下划线、字体格式清除       
        ['font', ['strikethrough', 'superscript', 'subscript']], //字体划线、字体上标、字体下标   
        ['fontsize', ['fontsize']], //字体大小                                
        ['color', ['color']], //字体颜色
        
        //<!--段落工具-->                
        ['style', ['style']],//样式
        ['para', ['ul', 'ol', 'paragraph']], //无序列表、有序列表、段落对齐方式
        ['height', ['height']], //行高
        
        //<!--插入工具-->    
        ['table',['table']], //插入表格    
        ['hr',['hr']],//插入水平线                
        ['link',['link']], //插入链接                
        ['picture',['picture']], //插入图片                
        ['video',['video']], //插入视频
        
        //<!--其它-->
        ['fullscreen',['fullscreen']], //全屏
        ['codeview',['codeview']], //查看html代码
        ['undo',['undo']], //撤销
        ['redo',['redo']], //取消撤销
        ['help',['help']], //帮助
      ],
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
    //var post= JSON.stringify(markup)
    alert(post);
    $.ajax({
        type: 'POST',
        url: '/subArticle',
        dataType: 'json',
        data: {
            articleID: $('#articleID').val(),
            articleTitle: $('#articleTitle').val(),
            articleTitleImage: $('#articleTitleImage').val(),
            articleXiangguanchexing: $('#articleXiangguanchexing').val(),
            articleZuozhe: $('#articleZuozhe').val(),
            articleWenzhangleixing: $('#articleWenzhangleixing').val(),
            articleContext: markup,
            articlePublish: 0,    
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("上传失败");       
        } 
    })
};

var articleChange = function() {
    var markup = $('#summernote').summernote('code');
    //alert(markup);
    $.ajax({
        type: 'POST',
        url: '/changeArticle',
        dataType: 'json',
        data: {
            articleID: $('#articleID').val(),
            articleTitle: $('#articleTitle').val(),
            articleTitleImage: $('#articleTitleImage').val(),
            articleXiangguanchexing: $('#articleXiangguanchexing').val(),
            articleZuozhe: $('#articleZuozhe').val(),
            articleWenzhangleixing: $('#articleWenzhangleixing').val(),
            articleContext: markup,
            articlePublish: 0,    
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("上传失败");       
        } 
    })
};


var saveButton = $('#save').click(() => {
    var MoreImage = $("#carMoreimage").val().split("\n").join(",");
    var MoreImage2 = $("#carMoreimage2").val().split("\n").join(",");
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
            carTitleImage: $('#carTitleimage').val(),
            carMoreImage: MoreImage,
            carMoreImage2: MoreImage2,
            carPublish: 0,
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("上传失败");       
        } 
    })
});


var saveChangeButton = $('#saveChange').click(() => {
    var MoreImage = $("#carMoreimage").val().split("\n").join(",");
    var MoreImage2 = $("#carMoreimage2").val().split("\n").join(",");
    //console.log($('#frame1').contents());
    $.ajax({
        type: 'POST',
        url: '/changeCar',
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
            carTitleImage: $('#carTitleimage').val(),
            carMoreImage: MoreImage,
            carMoreImage2: MoreImage2,
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("上传失败");       
        } 
    })
});



var articleDel =function(id){
    var delUrl='/articleDel/'+id;
    //alert(delUrl);
    $.ajax({
        type: 'POST',
        url: delUrl,
        dataType: 'json',
        data: {
            
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("删除失败");       
        } 
    })
}

var articlePublish =function(id){
    var publishUrl='/articlePublish/'+id;
    //alert(delUrl);
    $.ajax({
        type: 'POST',
        url: publishUrl,
        dataType: 'json',
        data: {
            
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("发布失败");       
        } 
    })
}


var articleUnPublish =function(id){
    var UnpublishUrl='/articleUnPublish/'+id;
    //alert(delUrl);
    $.ajax({
        type: 'POST',
        url: UnpublishUrl,
        dataType: 'json',
        data: {
            
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("取消发布失败");       
        } 
    })
}


var carDel =function(id){
    var delUrl='/carDel/'+id;
    //alert(delUrl);
    $.ajax({
        type: 'POST',
        url: delUrl,
        dataType: 'json',
        data: {
            
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("删除失败");       
        } 
    })
}

var carPublish =function(id){
    var publishUrl='/carPublish/'+id;
    //alert(delUrl);
    $.ajax({
        type: 'POST',
        url: publishUrl,
        dataType: 'json',
        data: {
            
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("发布错误");       
        } 
    })
}


var carUnPublish =function(id){
    var UnpublishUrl='/carUnPublish/'+id;
    //alert(delUrl);
    $.ajax({
        type: 'POST',
        url: UnpublishUrl,
        dataType: 'json',
        data: {
            
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("取消发布失败");       
        } 
    })
}