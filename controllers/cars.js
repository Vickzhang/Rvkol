const fs = require('fs');

////const checkDirExist = require('../utils/checkDirExist');
//const getUploadDirName = require('../utils/getUploadDirName');

function checkDirExist(p) {
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  }


  function getUploadDirName(){
    const date = new Date();
    let month = Number.parseInt(date.getMonth()) + 1;
    month = month.toString().length > 1 ? month : `0${month}`;
    const dir = `${date.getFullYear()}${month}${date.getDate()}${date.getHours()}${date.getMinutes()}`;
    return dir;
  }


module.exports={
    'GET /cars-dashbord':async (ctx,next) => {
        const model = require('../model');
        let Car = model.Car;
        var result = await Car.findAll();
        console.log(JSON.stringify(result));
        ctx.render('cars-dashbord.html',{
            data:result
        })
    },

    'GET /cars-add':async (ctx,next) => {
        ctx.render('cars-add.html',{
            title:'房车情报后台管理系统'
        })
    },

    'GET /cars-change/:id':async (ctx,next) => {
        var id =ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Car = model.Car;

        var result = await Car.findAll({
            where: {
                carID:id,
            }
        });
        console.log(JSON.stringify(result));
        ctx.render('cars-change.html',{
            data:result,
        })
    },


    'POST /cars-titleImage':async (ctx,next)=>{
        //文件上传
        //配置
        const file = ctx.request.files.file; // 获取上传文件
        const reader = fs.createReadStream(file.path); // 创建可读流
        //const ext = file.name.split('.').pop(); // 获取上传文件扩展名
        const dir =`static/img/Details/${getUploadDirName()}`;
        checkDirExist(dir);
        const fileName=`${dir}/${file.name}`;
        const upStream = fs.createWriteStream(fileName); // 创建可写流
        reader.pipe(upStream); // 可读流通过管道写入可写流
        
        console.log(fileName);
        return ctx.body = {
            code: 'success',
            titleFileName: fileName
        }
        
    },


        'POST /cars-moreImage':async (ctx,next)=>{
            //文件上传
            //配置
            const files = ctx.request.files.file; // 获取上传文件
            
            var fileNames=new Array();
            for (let file of files) {
                // 创建可读流
                const reader = fs.createReadStream(file.path);
                // 获取上传文件扩展名
                //const ext = file.name.split('.').pop(); // 获取上传文件扩展名
                const dir =`static/img/Details/${getUploadDirName()}`;
                checkDirExist(dir);
                const fileName=`${dir}/${file.name}`;
                fileNames.push(fileName);
                const upStream = fs.createWriteStream(fileName); // 创建可写流
                reader.pipe(upStream); // 可读流通过管道写入可写流
                // 可读流通过管道写入可写流
                reader.pipe(upStream);
              }
              console.log(fileNames);
            
            return ctx.body = {
                code: 'success',
                moreFileName: fileNames
            }
            
    },

    'POST /cars-moreImage2':async (ctx,next)=>{
        //文件上传
        //配置
        const files = ctx.request.files.file; // 获取上传文件
        
        var fileNames=new Array();
        for (let file of files) {
            // 创建可读流
            const reader = fs.createReadStream(file.path);
            // 获取上传文件扩展名
            //const ext = file.name.split('.').pop(); // 获取上传文件扩展名
            const dir =`static/img/Details/${getUploadDirName()}`;
            checkDirExist(dir);
            const fileName=`${dir}/${file.name}`;
            fileNames.push(fileName);
            const upStream = fs.createWriteStream(fileName); // 创建可写流
            reader.pipe(upStream); // 可读流通过管道写入可写流
            // 可读流通过管道写入可写流
            reader.pipe(upStream);
          }
          console.log(fileNames);
        
        return ctx.body = {
            code: 'success',
            moreFileName2: fileNames
        }
        
    },

    'POST /submitCar':async (ctx, next) => {
        console.log(ctx.request.body.carTitleImage)
        let carDetail = {
            carID: ctx.request.body.carID,
            carLogo:  ctx.request.body.carLogo,
            carTitle1: ctx.request.body.carTitle1,
            carTitle2:  ctx.request.body.carTitle2,
            carPriceMin:  ctx.request.body.carPriceMin,
            carPriceMax:  ctx.request.body.carPriceMax,
            carChexingjiegou: ctx.request.body.carChexingjiegou,
            carDipanleixing:  ctx.request.body.carDipanleixing,
            carZhunjialeixing:  ctx.request.body.carZhunjialeixing,
            carZuoweishu:  ctx.request.body.carZuoweishu,
            carChechang:  ctx.request.body.carChechang,
            carChekuang:  ctx.request.body.carChekuang,
            carChegao:  ctx.request.body.carChegao,
            carZhouju:  ctx.request.body.carZhouju,
            carQianlunju:  ctx.request.body.carQianlunju,
            carHoulunju:  ctx.request.body.carHoulunju,
            carZuixiaolidijianxi: ctx.request.body.carZuixiaolidijianxi,
            carZhengbeizhiliang: ctx.request.body.carZhengbeizhiliang,
            carJiejinjiao: ctx.request.body.carJiejinjiao,
            carLiqujiao: ctx.request.body.carLiqujiao,
            carQianxuanguaxingshi: ctx.request.body.carQianxuanguaxingshi,
            carHouxuanguaxingshi: ctx.request.body.carHouxuanguaxingshi,
            carKebianxuangua: ctx.request.body.carKebianxuangua,
            carFadongjichangjiaxinghao: ctx.request.body.carFadongjichangjiaxinghao,
            carPailiang: ctx.request.body.carPailiang,
            carJinqixingshi: ctx.request.body.carJinqixingshi,
            carFadongjigonglv: ctx.request.body.carFadongjigonglv,
            carFadongjimali: ctx.request.body.carFadongjimali,
            carFadongjiniuju: ctx.request.body.carFadongjiniuju,
            carDangweishu: ctx.request.body.carDangweishu,
            carBiansuxiang: ctx.request.body.carBiansuxiang,
            carQudongfangshi: ctx.request.body.carQudongfangshi,
            carRanyoujibiaohao: ctx.request.body.carRanyoujibiaohao,
            carHuanbaobiaozhun: ctx.request.body.carHuanbaobiaozhun,
            carGuanfangyouhao: ctx.request.body.carGuanfangyouhao,
            carYouxiangrongji: ctx.request.body.carYouxiangrongji,
            carQianluntaiguige: ctx.request.body.carQianluntaiguige,
            carHouluntaiguige: ctx.request.body.carHouluntaiguige,
            carBeitaiguige: ctx.request.body.carBeitaiguige,
            carLvhejinlungu: ctx.request.body.carLvhejinlungu,
            carTaiyajiancexitong: ctx.request.body.carTaiyajiancexitong,
            carWaizhichufang:ctx.request.body.carWaizhichufang,
            carWaizhilinyu:ctx.request.body.carWaizhilinyu,
            carWaizhidianshi:ctx.request.body.carWaizhidianshi,
            carZheyangpeng:ctx.request.body.carZheyangpeng,
            carDiandongtabu:ctx.request.body.carDiandongtabu,
            carShiwaideng:ctx.request.body.carShiwaideng,
            carPati:ctx.request.body.carPati,
            carZixingchejia:ctx.request.body.carZixingchejia,
            carTuochegou:ctx.request.body.carTuochegou,
            carChuwugui:ctx.request.body.carChuwugui,
            carTuozhancang:ctx.request.body.carTuozhancang,
            carQita:ctx.request.body.carQita,
            carDuogongnengfangxiangpan: ctx.request.body.carDuogongnengfangxiangpan,
            carFangxiangpantiaojie: ctx.request.body.carFangxiangpantiaojie,
            carZhulizhuanxiangleixing: ctx.request.body.carZhulizhuanxiangleixing,
            carPizhizuoyi: ctx.request.body.carPizhizuoyi,
            carZhiwupishuangpingzuoyi: ctx.request.body.carZhiwupishuangpingzuoyi,
            carFangxiangpantiaojie: ctx.request.body.carFangxiangpantiaojie,
            carJiashiweizuoyitiaojie: ctx.request.body.carJiashiweizuoyitiaojie,
            carFujiashiweizuoyitiaojie: ctx.request.body.carFujiashiweizuoyitiaojie,
            carDierpaizuoyitiaojie: ctx.request.body.carDierpaizuoyitiaojie,
            carZuoyigaoditiaojie: ctx.request.body.carZuoyigaoditiaojie,
            carZuoyitongfeng: ctx.request.body.carZuoyitongfeng,
            carQianpaizuoyijiare: ctx.request.body.carQianpaizuoyijiare,
            carYinxiangpinpai: ctx.request.body.carYinxiangpinpai,
            carYangshengqishuliang: ctx.request.body.carYangshengqishuliang,
            carChezaidianshi: ctx.request.body.carChezaidianshi,
            carChezailanya: ctx.request.body.carChezailanya,
            carJiashiweianquanqinang: ctx.request.body.carJiashiweianquanqinang,
            carFujiashiweianquanqinang: ctx.request.body.carFujiashiweianquanqinang,
            carKongtiaoleixing: ctx.request.body.carKongtiaoleixing,
            carHoupaikongtiaochukou: ctx.request.body.carHoupaikongtiaochukou,
            carCheneikongqijinhua: ctx.request.body.carCheneikongqijinhua,
            carDaocheleida: ctx.request.body.carDaocheleida,
            carBingxianfuzhu: ctx.request.body.carBingxianfuzhu,
            carZishiyingxunhang: ctx.request.body.carZishiyingxunhang,
            carQuanjingshexiangtou: ctx.request.body.carQuanjingshexiangtou,
            carDaocheyingxiang: ctx.request.body.carDaocheyingxiang,
            carGPSdaohang: ctx.request.body.carGPSdaohang,
            carDingsuxunhang: ctx.request.body.carDingsuxunhang,
            carWuyaoshiqidong: ctx.request.body.carWuyaoshiqidong,
            carShafazuoweishu: ctx.request.body.carShafazuoweishu,
            carXingshikechengzuorenshu: ctx.request.body.carXingshikechengzuorenshu,
            carShafacaizhi: ctx.request.body.carShafacaizhi,
            carShafazhuo: ctx.request.body.carShafazhuo,
            carShengjiangzhuo: ctx.request.body.carShengjiangzhuo,
            carFangchezhuanyongchouyouyanji: ctx.request.body.carFangchezhuanyongchouyouyanji,
            carFangchezhuanyongbingxiang: ctx.request.body.carFangchezhuanyongbingxiang,
            carBingxiangrongji: ctx.request.body.carBingxiangrongji,
            carBingxiangleixing: ctx.request.body.carBingxiangleixing,
            carXicaichi: ctx.request.body.carXicaichi,
            carShuilongtoulengreshuiketiao: ctx.request.body.carShuilongtoulengreshuiketiao,
            carDiancilu: ctx.request.body.carDiancilu,
            carKaoxiang: ctx.request.body.carKaoxiang,
            carWeibolu: ctx.request.body.carWeibolu,
            carXiwanji: ctx.request.body.carXiwanji,
            carRanxiguanshuliang: ctx.request.body.carRanxiguanshuliang,
            carRanxiguanrongji: ctx.request.body.carRanxiguanrongji,
            carDanrenchuangshuliang: ctx.request.body.carDanrenchuangshuliang,
            carDanrenchuangchicun: ctx.request.body.carDanrenchuangchicun,
            carShuangrenchuangchicun: ctx.request.body.carShuangrenchuangchicun,
            carShuangrenchuangshuliang: ctx.request.body.carShuangrenchuangshuliang,
            carZongchuangweishu: ctx.request.body.carZongchuangweishu,
            carWeishengjian: ctx.request.body.carWeishengjian,
            carWeishengjianxingshi: ctx.request.body.carWeishengjianxingshi,
            carLinyuqi: ctx.request.body.carLinyuqi,
            carZuobianqi: ctx.request.body.carZuobianqi,
            carWeishengjianxishouchi: ctx.request.body.carWeishengjianxishouchi,
            carNuanfengchukou: ctx.request.body.carNuanfengchukou,
            carHuanqishan: ctx.request.body.carHuanqishan,
            carReshuiqi: ctx.request.body.carReshuiqi,
            carReshuiqileixing: ctx.request.body.carReshuiqileixing,
            carXiyiji: ctx.request.body.carXiyiji,
            carTaiyangnengdianchiban: ctx.request.body.carTaiyangnengdianchiban,
            carTaixiangnengdianchibanfadianliang: ctx.request.body.carTaixiangnengdianchibanfadianliang,
            carFadianji: ctx.request.body.carFadianji,
            carFadianjileixing: ctx.request.body.carFadianjileixing,
            carNibianqi: ctx.request.body.carNibianqi,
            carNibianqigonglv: ctx.request.body.carNibianqigonglv,
            carZhongyangkongzhimianban: ctx.request.body.carZhongyangkongzhimianban,
            carDianpingshuliang: ctx.request.body.carDianpingshuliang,
            carDianpingdianliang: ctx.request.body.carDianpingdianliang,
            carFangchezhuanyongshuibeng: ctx.request.body.carFangchezhuanyongshuibeng,
            carJingshuixiangrongji: ctx.request.body.carJingshuixiangrongji,
            carHeishuixiangrongji: ctx.request.body.carHeishuixiangrongji,
            carHuishuixiangrongji: ctx.request.body.carHuishuixiangrongji,
            carPaiwufangshi: ctx.request.body.carPaiwufangshi,
            carYinshuijinghuaxitong: ctx.request.body.carYinshuijinghuaxitong,
            carChezaiWifi: ctx.request.body.carChezaiWifi,
            carWeixingdianshi: ctx.request.body.carWeixingdianshi,
            carChezaidianshi: ctx.request.body.carChezaidianshi,
            carChezaiKTV: ctx.request.body.carChezaiKTV,
            carDVDjitou: ctx.request.body.carDVDjitou,
            carChezaiyingxiang: ctx.request.body.carChezaiyingxiang,
            carYinxiangshuliang: ctx.request.body.carYinxiangshuliang,
            carZhucheranyoujiarexitong: ctx.request.body.carZhucheranyoujiarexitong,
            carFangchezhuanyongkongtiao: ctx.request.body.carFangchezhuanyongkongtiao,
            carKongtiaoxingshi: ctx.request.body.carKongtiaoxingshi,
            carRanqinuanfengxitong: ctx.request.body.carRanqinuanfengxitong,
            carYanwubaojingxi: ctx.request.body.carYanwubaojingxi,
            carMeiqibaojingqi: ctx.request.body.carMeiqibaojingqi,
            carYiyanghuatanbaojingqi: ctx.request.body.carYiyanghuatanbaojingqi,
            carTitleImage: ctx.request.body.carTitleImage,
            carMoreImage: ctx.request.body.carMoreImage,
            carMoreImage2: ctx.request.body.carMoreImage2,
          }
        //   console.log(carDetail);
          //数据库操作
        const model = require('../model');

        let Car = model.Car;
        (async () => {
            var RVuser = await Car.create({
                carID: carDetail.carID,
                carLogo:  carDetail.carLogo,
                carTitle1: carDetail.carTitle1,
                carTitle2:  carDetail.carTitle2,
                carPriceMin:  carDetail.carPriceMin,
                carPriceMax:  carDetail.carPriceMax,
                carChexingjiegou: carDetail.carChexingjiegou,
                carDipanleixing:  carDetail.carDipanleixing,
                carZhunjialeixing:  carDetail.carZhunjialeixing,
                carZuoweishu:  carDetail.carZuoweishu,
                carChechang:  carDetail.carChechang,
                carChekuang:  carDetail.carChekuang,
                carChegao:  carDetail.carChegao,
                carZhouju:  carDetail.carZhouju,
                carQianlunju:  carDetail.carQianlunju,
                carHoulunju:  carDetail.carHoulunju,
                carZuixiaolidijianxi: carDetail.carZuixiaolidijianxi,
                carZhengbeizhiliang: carDetail.carZhengbeizhiliang,
                carJiejinjiao: carDetail.carJiejinjiao,
                carLiqujiao: carDetail.carLiqujiao,
                carQianxuanguaxingshi: carDetail.carQianxuanguaxingshi,
                carHouxuanguaxingshi: carDetail.carHouxuanguaxingshi,
                carKebianxuangua: carDetail.carKebianxuangua,
                carFadongjichangjiaxinghao: carDetail.carFadongjichangjiaxinghao,
                carPailiang: carDetail.carPailiang,
                carJinqixingshi: carDetail.carJinqixingshi,
                carFadongjigonglv: carDetail.carFadongjigonglv,
                carFadongjimali: carDetail.carFadongjimali,
                carFadongjiniuju: carDetail.carFadongjiniuju,
                carDangweishu: carDetail.carDangweishu,
                carBiansuxiang: carDetail.carBiansuxiang,
                carQudongfangshi: carDetail.carQudongfangshi,
                carRanyoujibiaohao: carDetail.carRanyoujibiaohao,
                carHuanbaobiaozhun: carDetail.carHuanbaobiaozhun,
                carGuanfangyouhao: carDetail.carGuanfangyouhao,
                carYouxiangrongji: carDetail.carYouxiangrongji,
                carQianluntaiguige: carDetail.carQianluntaiguige,
                carHouluntaiguige: carDetail.carHouluntaiguige,
                carBeitaiguige: carDetail.carBeitaiguige,
                carLvhejinlungu: carDetail.carLvhejinlungu,
                carTaiyajiancexitong: carDetail.carTaiyajiancexitong,
                carWaizhichufang:carDetail.carWaizhichufang,
                carWaizhilinyu:carDetail.carWaizhilinyu,
                carWaizhidianshi:carDetail.carWaizhidianshi,
                carZheyangpeng:carDetail.carZheyangpeng,
                carDiandongtabu:carDetail.carDiandongtabu,
                carShiwaideng:carDetail.carShiwaideng,
                carPati:carDetail.carPati,
                carZixingchejia:carDetail.carZixingchejia,
                carTuochegou:carDetail.carTuochegou,
                carChuwugui:carDetail.carChuwugui,
                carTuozhancang:carDetail.carTuozhancang,
                carQita:carDetail.carQita,
                carDuogongnengfangxiangpan: carDetail.carDuogongnengfangxiangpan,
                carFangxiangpantiaojie: carDetail.carFangxiangpantiaojie,
                carZhulizhuanxiangleixing: carDetail.carZhulizhuanxiangleixing,
                carPizhizuoyi: carDetail.carPizhizuoyi,
                carZhiwupishuangpingzuoyi: carDetail.carZhiwupishuangpingzuoyi,
                carJiashiweizuoyitiaojie: carDetail.carJiashiweizuoyitiaojie,
                carFujiashiweizuoyitiaojie: carDetail.carFujiashiweizuoyitiaojie,
                carDierpaizuoyitiaojie: carDetail.carDierpaizuoyitiaojie,
                carZuoyigaoditiaojie: carDetail.carZuoyigaoditiaojie,
                carZuoyitongfeng: carDetail.carZuoyitongfeng,
                carQianpaizuoyijiare: carDetail.carQianpaizuoyijiare,
                carYinxiangpinpai: carDetail.carYinxiangpinpai,
                carYangshengqishuliang: carDetail.carYangshengqishuliang,
                carChezaidianshi: carDetail.carChezaidianshi,
                carChezailanya: carDetail.carChezailanya,
                carJiashiweianquanqinang: carDetail.carJiashiweianquanqinang,
                carFujiashiweianquanqinang: carDetail.carFujiashiweianquanqinang,
                carKongtiaoleixing: carDetail.carKongtiaoleixing,
                carHoupaikongtiaochukou: carDetail.carHoupaikongtiaochukou,
                carCheneikongqijinhua: carDetail.carCheneikongqijinhua,
                carDaocheleida: carDetail.carDaocheleida,
                carBingxianfuzhu: carDetail.carBingxianfuzhu,
                carZishiyingxunhang: carDetail.carZishiyingxunhang,
                carQuanjingshexiangtou: carDetail.carQuanjingshexiangtou,
                carDaocheyingxiang: carDetail.carDaocheyingxiang,
                carGPSdaohang: carDetail.carGPSdaohang,
                carDingsuxunhang: carDetail.carDingsuxunhang,
                carWuyaoshiqidong: carDetail.carWuyaoshiqidong,
                carShafazuoweishu: carDetail.carShafazuoweishu,
                carXingshikechengzuorenshu: carDetail.carXingshikechengzuorenshu,
                carShafacaizhi: carDetail.carShafacaizhi,
                carShafazhuo: carDetail.carShafazhuo,
                carShengjiangzhuo: carDetail.carShengjiangzhuo,
                carFangchezhuanyongchouyouyanji: carDetail.carFangchezhuanyongchouyouyanji,
                carFangchezhuanyongbingxiang: carDetail.carFangchezhuanyongbingxiang,
                carBingxiangrongji: carDetail.carBingxiangrongji,
                carBingxiangleixing: carDetail.carBingxiangleixing,
                carXicaichi: carDetail.carXicaichi,
                carShuilongtoulengreshuiketiao: carDetail.carShuilongtoulengreshuiketiao,
                carDiancilu: carDetail.carDiancilu,
                carKaoxiang: carDetail.carKaoxiang,
                carWeibolu: carDetail.carWeibolu,
                carXiwanji: carDetail.carXiwanji,
                carRanxiguanshuliang: carDetail.carRanxiguanshuliang,
                carRanxiguanrongji: carDetail.carRanxiguanrongji,
                carDanrenchuangshuliang: carDetail.carDanrenchuangshuliang,
                carDanrenchuangchicun: carDetail.carDanrenchuangchicun,
                carShuangrenchuangchicun: carDetail.carShuangrenchuangchicun,
                carShuangrenchuangshuliang: carDetail.carShuangrenchuangshuliang,
                carZongchuangweishu: carDetail.carZongchuangweishu,
                carWeishengjian: carDetail.carWeishengjian,
                carWeishengjianxingshi: carDetail.carWeishengjianxingshi,
                carLinyuqi: carDetail.carLinyuqi,
                carZuobianqi: carDetail.carZuobianqi,
                carWeishengjianxishouchi: carDetail.carWeishengjianxishouchi,
                carNuanfengchukou: carDetail.carNuanfengchukou,
                carHuanqishan: carDetail.carHuanqishan,
                carReshuiqi: carDetail.carReshuiqi,
                carReshuiqileixing: carDetail.carReshuiqileixing,
                carXiyiji: carDetail.carXiyiji,
                carTaiyangnengdianchiban: carDetail.carTaiyangnengdianchiban,
                carTaixiangnengdianchibanfadianliang: carDetail.carTaixiangnengdianchibanfadianliang,
                carFadianji: carDetail.carFadianji,
                carFadianjileixing: carDetail.carFadianjileixing,
                carNibianqi: carDetail.carNibianqi,
                carNibianqigonglv: carDetail.carNibianqigonglv,
                carZhongyangkongzhimianban: carDetail.carZhongyangkongzhimianban,
                carDianpingshuliang: carDetail.carDianpingshuliang,
                carDianpingdianliang: carDetail.carDianpingdianliang,
                carFangchezhuanyongshuibeng: carDetail.carFangchezhuanyongshuibeng,
                carJingshuixiangrongji: carDetail.carJingshuixiangrongji,
                carHeishuixiangrongji: carDetail.carHeishuixiangrongji,
                carHuishuixiangrongji: carDetail.carHuishuixiangrongji,
                carPaiwufangshi: carDetail.carPaiwufangshi,
                carYinshuijinghuaxitong: carDetail.carYinshuijinghuaxitong,
                carChezaiWifi: carDetail.carChezaiWifi,
                carWeixingdianshi: carDetail.carWeixingdianshi,
                carChezaidianshi: carDetail.carChezaidianshi,
                carChezaiKTV: carDetail.carChezaiKTV,
                carDVDjitou: carDetail.carDVDjitou,
                carChezaiyingxiang: carDetail.carChezaiyingxiang,
                carYinxiangshuliang: carDetail.carYinxiangshuliang,
                carZhucheranyoujiarexitong: carDetail.carZhucheranyoujiarexitong,
                carFangchezhuanyongkongtiao: carDetail.carFangchezhuanyongkongtiao,
                carKongtiaoxingshi: carDetail.carKongtiaoxingshi,
                carRanqinuanfengxitong: carDetail.carRanqinuanfengxitong,
                carYanwubaojingxi: carDetail.carYanwubaojingxi,
                carMeiqibaojingqi: carDetail.carMeiqibaojingqi,
                carYiyanghuatanbaojingqi: carDetail.carYiyanghuatanbaojingqi,
                carTitleImage: carDetail.carTitleImage,
                carMoreImage: carDetail.carMoreImage,
                carMoreImage2: carDetail.carMoreImage2,
            });
            console.log('created: ' + JSON.stringify(RVuser));
        })();
        //
    } ,
    
    'POST /changeCar':async (ctx, next) => {
        let carDetail = {
            carID: ctx.request.body.carID,
            carLogo:  ctx.request.body.carLogo,
            carTitle1: ctx.request.body.carTitle1,
            carTitle2:  ctx.request.body.carTitle2,
            carPriceMin:  ctx.request.body.carPriceMin,
            carPriceMax:  ctx.request.body.carPriceMax,
            carChexingjiegou: ctx.request.body.carChexingjiegou,
            carDipanleixing:  ctx.request.body.carDipanleixing,
            carZhunjialeixing:  ctx.request.body.carZhunjialeixing,
            carZuoweishu:  ctx.request.body.carZuoweishu,
            carChechang:  ctx.request.body.carChechang,
            carChekuang:  ctx.request.body.carChekuang,
            carChegao:  ctx.request.body.carChegao,
            carZhouju:  ctx.request.body.carZhouju,
            carQianlunju:  ctx.request.body.carQianlunju,
            carHoulunju:  ctx.request.body.carHoulunju,
            carZuixiaolidijianxi: ctx.request.body.carZuixiaolidijianxi,
            carZhengbeizhiliang: ctx.request.body.carZhengbeizhiliang,
            carJiejinjiao: ctx.request.body.carJiejinjiao,
            carLiqujiao: ctx.request.body.carLiqujiao,
            carQianxuanguaxingshi: ctx.request.body.carQianxuanguaxingshi,
            carHouxuanguaxingshi: ctx.request.body.carHouxuanguaxingshi,
            carKebianxuangua: ctx.request.body.carKebianxuangua,
            carFadongjichangjiaxinghao: ctx.request.body.carFadongjichangjiaxinghao,
            carPailiang: ctx.request.body.carPailiang,
            carJinqixingshi: ctx.request.body.carJinqixingshi,
            carFadongjigonglv: ctx.request.body.carFadongjigonglv,
            carFadongjimali: ctx.request.body.carFadongjimali,
            carFadongjiniuju: ctx.request.body.carFadongjiniuju,
            carDangweishu: ctx.request.body.carDangweishu,
            carBiansuxiang: ctx.request.body.carBiansuxiang,
            carQudongfangshi: ctx.request.body.carQudongfangshi,
            carRanyoujibiaohao: ctx.request.body.carRanyoujibiaohao,
            carHuanbaobiaozhun: ctx.request.body.carHuanbaobiaozhun,
            carGuanfangyouhao: ctx.request.body.carGuanfangyouhao,
            carYouxiangrongji: ctx.request.body.carYouxiangrongji,
            carQianluntaiguige: ctx.request.body.carQianluntaiguige,
            carHouluntaiguige: ctx.request.body.carHouluntaiguige,
            carBeitaiguige: ctx.request.body.carBeitaiguige,
            carLvhejinlungu: ctx.request.body.carLvhejinlungu,
            carTaiyajiancexitong: ctx.request.body.carTaiyajiancexitong,
            carWaizhichufang:ctx.request.body.carWaizhichufang,
            carWaizhilinyu:ctx.request.body.carWaizhilinyu,
            carWaizhidianshi:ctx.request.body.carWaizhidianshi,
            carZheyangpeng:ctx.request.body.carZheyangpeng,
            carDiandongtabu:ctx.request.body.carDiandongtabu,
            carShiwaideng:ctx.request.body.carShiwaideng,
            carPati:ctx.request.body.carPati,
            carZixingchejia:ctx.request.body.carZixingchejia,
            carTuochegou:ctx.request.body.carTuochegou,
            carChuwugui:ctx.request.body.carChuwugui,
            carTuozhancang:ctx.request.body.carTuozhancang,
            carQita:ctx.request.body.carQita,
            carDuogongnengfangxiangpan: ctx.request.body.carDuogongnengfangxiangpan,
            carFangxiangpantiaojie: ctx.request.body.carFangxiangpantiaojie,
            carZhulizhuanxiangleixing: ctx.request.body.carZhulizhuanxiangleixing,
            carPizhizuoyi: ctx.request.body.carPizhizuoyi,
            carZhiwupishuangpingzuoyi: ctx.request.body.carZhiwupishuangpingzuoyi,
            carFangxiangpantiaojie: ctx.request.body.carFangxiangpantiaojie,
            carJiashiweizuoyitiaojie: ctx.request.body.carJiashiweizuoyitiaojie,
            carFujiashiweizuoyitiaojie: ctx.request.body.carFujiashiweizuoyitiaojie,
            carDierpaizuoyitiaojie: ctx.request.body.carDierpaizuoyitiaojie,
            carZuoyigaoditiaojie: ctx.request.body.carZuoyigaoditiaojie,
            carZuoyitongfeng: ctx.request.body.carZuoyitongfeng,
            carQianpaizuoyijiare: ctx.request.body.carQianpaizuoyijiare,
            carYinxiangpinpai: ctx.request.body.carYinxiangpinpai,
            carYangshengqishuliang: ctx.request.body.carYangshengqishuliang,
            carChezaidianshi: ctx.request.body.carChezaidianshi,
            carChezailanya: ctx.request.body.carChezailanya,
            carJiashiweianquanqinang: ctx.request.body.carJiashiweianquanqinang,
            carFujiashiweianquanqinang: ctx.request.body.carFujiashiweianquanqinang,
            carKongtiaoleixing: ctx.request.body.carKongtiaoleixing,
            carHoupaikongtiaochukou: ctx.request.body.carHoupaikongtiaochukou,
            carCheneikongqijinhua: ctx.request.body.carCheneikongqijinhua,
            carDaocheleida: ctx.request.body.carDaocheleida,
            carBingxianfuzhu: ctx.request.body.carBingxianfuzhu,
            carZishiyingxunhang: ctx.request.body.carZishiyingxunhang,
            carQuanjingshexiangtou: ctx.request.body.carQuanjingshexiangtou,
            carDaocheyingxiang: ctx.request.body.carDaocheyingxiang,
            carGPSdaohang: ctx.request.body.carGPSdaohang,
            carDingsuxunhang: ctx.request.body.carDingsuxunhang,
            carWuyaoshiqidong: ctx.request.body.carWuyaoshiqidong,
            carShafazuoweishu: ctx.request.body.carShafazuoweishu,
            carXingshikechengzuorenshu: ctx.request.body.carXingshikechengzuorenshu,
            carShafacaizhi: ctx.request.body.carShafacaizhi,
            carShafazhuo: ctx.request.body.carShafazhuo,
            carShengjiangzhuo: ctx.request.body.carShengjiangzhuo,
            carFangchezhuanyongchouyouyanji: ctx.request.body.carFangchezhuanyongchouyouyanji,
            carFangchezhuanyongbingxiang: ctx.request.body.carFangchezhuanyongbingxiang,
            carBingxiangrongji: ctx.request.body.carBingxiangrongji,
            carBingxiangleixing: ctx.request.body.carBingxiangleixing,
            carXicaichi: ctx.request.body.carXicaichi,
            carShuilongtoulengreshuiketiao: ctx.request.body.carShuilongtoulengreshuiketiao,
            carDiancilu: ctx.request.body.carDiancilu,
            carKaoxiang: ctx.request.body.carKaoxiang,
            carWeibolu: ctx.request.body.carWeibolu,
            carXiwanji: ctx.request.body.carXiwanji,
            carRanxiguanshuliang: ctx.request.body.carRanxiguanshuliang,
            carRanxiguanrongji: ctx.request.body.carRanxiguanrongji,
            carDanrenchuangshuliang: ctx.request.body.carDanrenchuangshuliang,
            carDanrenchuangchicun: ctx.request.body.carDanrenchuangchicun,
            carShuangrenchuangchicun: ctx.request.body.carShuangrenchuangchicun,
            carShuangrenchuangshuliang: ctx.request.body.carShuangrenchuangshuliang,
            carZongchuangweishu: ctx.request.body.carZongchuangweishu,
            carWeishengjian: ctx.request.body.carWeishengjian,
            carWeishengjianxingshi: ctx.request.body.carWeishengjianxingshi,
            carLinyuqi: ctx.request.body.carLinyuqi,
            carZuobianqi: ctx.request.body.carZuobianqi,
            carWeishengjianxishouchi: ctx.request.body.carWeishengjianxishouchi,
            carNuanfengchukou: ctx.request.body.carNuanfengchukou,
            carHuanqishan: ctx.request.body.carHuanqishan,
            carReshuiqi: ctx.request.body.carReshuiqi,
            carReshuiqileixing: ctx.request.body.carReshuiqileixing,
            carXiyiji: ctx.request.body.carXiyiji,
            carTaiyangnengdianchiban: ctx.request.body.carTaiyangnengdianchiban,
            carTaixiangnengdianchibanfadianliang: ctx.request.body.carTaixiangnengdianchibanfadianliang,
            carFadianji: ctx.request.body.carFadianji,
            carFadianjileixing: ctx.request.body.carFadianjileixing,
            carNibianqi: ctx.request.body.carNibianqi,
            carNibianqigonglv: ctx.request.body.carNibianqigonglv,
            carZhongyangkongzhimianban: ctx.request.body.carZhongyangkongzhimianban,
            carDianpingshuliang: ctx.request.body.carDianpingshuliang,
            carDianpingdianliang: ctx.request.body.carDianpingdianliang,
            carFangchezhuanyongshuibeng: ctx.request.body.carFangchezhuanyongshuibeng,
            carJingshuixiangrongji: ctx.request.body.carJingshuixiangrongji,
            carHeishuixiangrongji: ctx.request.body.carHeishuixiangrongji,
            carHuishuixiangrongji: ctx.request.body.carHuishuixiangrongji,
            carPaiwufangshi: ctx.request.body.carPaiwufangshi,
            carYinshuijinghuaxitong: ctx.request.body.carYinshuijinghuaxitong,
            carChezaiWifi: ctx.request.body.carChezaiWifi,
            carWeixingdianshi: ctx.request.body.carWeixingdianshi,
            carChezaidianshi: ctx.request.body.carChezaidianshi,
            carChezaiKTV: ctx.request.body.carChezaiKTV,
            carDVDjitou: ctx.request.body.carDVDjitou,
            carChezaiyingxiang: ctx.request.body.carChezaiyingxiang,
            carYinxiangshuliang: ctx.request.body.carYinxiangshuliang,
            carZhucheranyoujiarexitong: ctx.request.body.carZhucheranyoujiarexitong,
            carFangchezhuanyongkongtiao: ctx.request.body.carFangchezhuanyongkongtiao,
            carKongtiaoxingshi: ctx.request.body.carKongtiaoxingshi,
            carRanqinuanfengxitong: ctx.request.body.carRanqinuanfengxitong,
            carYanwubaojingxi: ctx.request.body.carYanwubaojingxi,
            carMeiqibaojingqi: ctx.request.body.carMeiqibaojingqi,
            carYiyanghuatanbaojingqi: ctx.request.body.carYiyanghuatanbaojingqi,
            carTitleImage: ctx.request.body.carTitleImage,
            carMoreImage: ctx.request.body.carMoreImage,
            carMoreImage2: ctx.request.body.carMoreImage2,
          }
          //数据库操作
        const model = require('../model');

        let Car = model.Car;
        (async () => {
            var RVuser = await Car.update(
                {
                carID: carDetail.carID,
                carLogo:  carDetail.carLogo,
                carTitle1: carDetail.carTitle1,
                carTitle2:  carDetail.carTitle2,
                carPriceMin:  carDetail.carPriceMin,
                carPriceMax:  carDetail.carPriceMax,
                carChexingjiegou: carDetail.carChexingjiegou,
                carDipanleixing:  carDetail.carDipanleixing,
                carZhunjialeixing:  carDetail.carZhunjialeixing,
                carZuoweishu:  carDetail.carZuoweishu,
                carChechang:  carDetail.carChechang,
                carChekuang:  carDetail.carChekuang,
                carChegao:  carDetail.carChegao,
                carZhouju:  carDetail.carZhouju,
                carQianlunju:  carDetail.carQianlunju,
                carHoulunju:  carDetail.carHoulunju,
                carZuixiaolidijianxi: carDetail.carZuixiaolidijianxi,
                carZhengbeizhiliang: carDetail.carZhengbeizhiliang,
                carJiejinjiao: carDetail.carJiejinjiao,
                carLiqujiao: carDetail.carLiqujiao,
                carQianxuanguaxingshi: carDetail.carQianxuanguaxingshi,
                carHouxuanguaxingshi: carDetail.carHouxuanguaxingshi,
                carKebianxuangua: carDetail.carKebianxuangua,
                carFadongjichangjiaxinghao: carDetail.carFadongjichangjiaxinghao,
                carPailiang: carDetail.carPailiang,
                carJinqixingshi: carDetail.carJinqixingshi,
                carFadongjigonglv: carDetail.carFadongjigonglv,
                carFadongjimali: carDetail.carFadongjimali,
                carFadongjiniuju: carDetail.carFadongjiniuju,
                carDangweishu: carDetail.carDangweishu,
                carBiansuxiang: carDetail.carBiansuxiang,
                carQudongfangshi: carDetail.carQudongfangshi,
                carRanyoujibiaohao: carDetail.carRanyoujibiaohao,
                carHuanbaobiaozhun: carDetail.carHuanbaobiaozhun,
                carGuanfangyouhao: carDetail.carGuanfangyouhao,
                carYouxiangrongji: carDetail.carYouxiangrongji,
                carQianluntaiguige: carDetail.carQianluntaiguige,
                carHouluntaiguige: carDetail.carHouluntaiguige,
                carBeitaiguige: carDetail.carBeitaiguige,
                carLvhejinlungu: carDetail.carLvhejinlungu,
                carTaiyajiancexitong: carDetail.carTaiyajiancexitong,
                carWaizhichufang:carDetail.carWaizhichufang,
                carWaizhilinyu:carDetail.carWaizhilinyu,
                carWaizhidianshi:carDetail.carWaizhidianshi,
                carZheyangpeng:carDetail.carZheyangpeng,
                carDiandongtabu:carDetail.carDiandongtabu,
                carShiwaideng:carDetail.carShiwaideng,
                carPati:carDetail.carPati,
                carZixingchejia:carDetail.carZixingchejia,
                carTuochegou:carDetail.carTuochegou,
                carChuwugui:carDetail.carChuwugui,
                carTuozhancang:carDetail.carTuozhancang,
                carQita:carDetail.carQita,
                carDuogongnengfangxiangpan: carDetail.carDuogongnengfangxiangpan,
                carFangxiangpantiaojie: carDetail.carFangxiangpantiaojie,
                carZhulizhuanxiangleixing: carDetail.carZhulizhuanxiangleixing,
                carPizhizuoyi: carDetail.carPizhizuoyi,
                carZhiwupishuangpingzuoyi: carDetail.carZhiwupishuangpingzuoyi,
                carJiashiweizuoyitiaojie: carDetail.carJiashiweizuoyitiaojie,
                carFujiashiweizuoyitiaojie: carDetail.carFujiashiweizuoyitiaojie,
                carDierpaizuoyitiaojie: carDetail.carDierpaizuoyitiaojie,
                carZuoyigaoditiaojie: carDetail.carZuoyigaoditiaojie,
                carZuoyitongfeng: carDetail.carZuoyitongfeng,
                carQianpaizuoyijiare: carDetail.carQianpaizuoyijiare,
                carYinxiangpinpai: carDetail.carYinxiangpinpai,
                carYangshengqishuliang: carDetail.carYangshengqishuliang,
                carChezaidianshi: carDetail.carChezaidianshi,
                carChezailanya: carDetail.carChezailanya,
                carJiashiweianquanqinang: carDetail.carJiashiweianquanqinang,
                carFujiashiweianquanqinang: carDetail.carFujiashiweianquanqinang,
                carKongtiaoleixing: carDetail.carKongtiaoleixing,
                carHoupaikongtiaochukou: carDetail.carHoupaikongtiaochukou,
                carCheneikongqijinhua: carDetail.carCheneikongqijinhua,
                carDaocheleida: carDetail.carDaocheleida,
                carBingxianfuzhu: carDetail.carBingxianfuzhu,
                carZishiyingxunhang: carDetail.carZishiyingxunhang,
                carQuanjingshexiangtou: carDetail.carQuanjingshexiangtou,
                carDaocheyingxiang: carDetail.carDaocheyingxiang,
                carGPSdaohang: carDetail.carGPSdaohang,
                carDingsuxunhang: carDetail.carDingsuxunhang,
                carWuyaoshiqidong: carDetail.carWuyaoshiqidong,
                carShafazuoweishu: carDetail.carShafazuoweishu,
                carXingshikechengzuorenshu: carDetail.carXingshikechengzuorenshu,
                carShafacaizhi: carDetail.carShafacaizhi,
                carShafazhuo: carDetail.carShafazhuo,
                carShengjiangzhuo: carDetail.carShengjiangzhuo,
                carFangchezhuanyongchouyouyanji: carDetail.carFangchezhuanyongchouyouyanji,
                carFangchezhuanyongbingxiang: carDetail.carFangchezhuanyongbingxiang,
                carBingxiangrongji: carDetail.carBingxiangrongji,
                carBingxiangleixing: carDetail.carBingxiangleixing,
                carXicaichi: carDetail.carXicaichi,
                carShuilongtoulengreshuiketiao: carDetail.carShuilongtoulengreshuiketiao,
                carDiancilu: carDetail.carDiancilu,
                carKaoxiang: carDetail.carKaoxiang,
                carWeibolu: carDetail.carWeibolu,
                carXiwanji: carDetail.carXiwanji,
                carRanxiguanshuliang: carDetail.carRanxiguanshuliang,
                carRanxiguanrongji: carDetail.carRanxiguanrongji,
                carDanrenchuangshuliang: carDetail.carDanrenchuangshuliang,
                carDanrenchuangchicun: carDetail.carDanrenchuangchicun,
                carShuangrenchuangchicun: carDetail.carShuangrenchuangchicun,
                carShuangrenchuangshuliang: carDetail.carShuangrenchuangshuliang,
                carZongchuangweishu: carDetail.carZongchuangweishu,
                carWeishengjian: carDetail.carWeishengjian,
                carWeishengjianxingshi: carDetail.carWeishengjianxingshi,
                carLinyuqi: carDetail.carLinyuqi,
                carZuobianqi: carDetail.carZuobianqi,
                carWeishengjianxishouchi: carDetail.carWeishengjianxishouchi,
                carNuanfengchukou: carDetail.carNuanfengchukou,
                carHuanqishan: carDetail.carHuanqishan,
                carReshuiqi: carDetail.carReshuiqi,
                carReshuiqileixing: carDetail.carReshuiqileixing,
                carXiyiji: carDetail.carXiyiji,
                carTaiyangnengdianchiban: carDetail.carTaiyangnengdianchiban,
                carTaixiangnengdianchibanfadianliang: carDetail.carTaixiangnengdianchibanfadianliang,
                carFadianji: carDetail.carFadianji,
                carFadianjileixing: carDetail.carFadianjileixing,
                carNibianqi: carDetail.carNibianqi,
                carNibianqigonglv: carDetail.carNibianqigonglv,
                carZhongyangkongzhimianban: carDetail.carZhongyangkongzhimianban,
                carDianpingshuliang: carDetail.carDianpingshuliang,
                carDianpingdianliang: carDetail.carDianpingdianliang,
                carFangchezhuanyongshuibeng: carDetail.carFangchezhuanyongshuibeng,
                carJingshuixiangrongji: carDetail.carJingshuixiangrongji,
                carHeishuixiangrongji: carDetail.carHeishuixiangrongji,
                carHuishuixiangrongji: carDetail.carHuishuixiangrongji,
                carPaiwufangshi: carDetail.carPaiwufangshi,
                carYinshuijinghuaxitong: carDetail.carYinshuijinghuaxitong,
                carChezaiWifi: carDetail.carChezaiWifi,
                carWeixingdianshi: carDetail.carWeixingdianshi,
                carChezaidianshi: carDetail.carChezaidianshi,
                carChezaiKTV: carDetail.carChezaiKTV,
                carDVDjitou: carDetail.carDVDjitou,
                carChezaiyingxiang: carDetail.carChezaiyingxiang,
                carYinxiangshuliang: carDetail.carYinxiangshuliang,
                carZhucheranyoujiarexitong: carDetail.carZhucheranyoujiarexitong,
                carFangchezhuanyongkongtiao: carDetail.carFangchezhuanyongkongtiao,
                carKongtiaoxingshi: carDetail.carKongtiaoxingshi,
                carRanqinuanfengxitong: carDetail.carRanqinuanfengxitong,
                carYanwubaojingxi: carDetail.carYanwubaojingxi,
                carMeiqibaojingqi: carDetail.carMeiqibaojingqi,
                carYiyanghuatanbaojingqi: carDetail.carYiyanghuatanbaojingqi,
                carTitleImage: carDetail.carTitleImage,
                carMoreImage: carDetail.carMoreImage,
                carMoreImage2: carDetail.carMoreImage2,
            },{
                where:{
                    carID:carDetail.carID,
                }
            }
        );
            console.log('change: ' + JSON.stringify(RVuser));
        })();
        //
    }  
}