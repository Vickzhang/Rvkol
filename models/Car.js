const db = require('../db');

module.exports = db.defineModel('Cars', {
    carID:db.STRING(10),
    carLogo:db.STRING(20),
    carTitle1:db.STRING(20),
    carTitle2:db.TEXT,
    carPriceMin:db.DOUBLE(20), //最小价格
    carType:db.STRING(20), //最房车类型
    carChexingjiegou:db.STRING(20),
    carDipanleixing:db.STRING(20),
    carZhunjialeixing:db.STRING(20),
    carZuoweishu:db.STRING(20),
    carChechang:db.STRING(20),
    carChekuang:db.STRING(20),
    carChegao:db.STRING(20),
    carZhouju:db.STRING(20),
    carQianlunju:db.STRING(20),
    carHoulunju:db.STRING(20),
    carZuixiaolidijianxi:db.STRING(20),
    carZhengbeizhiliang:db.STRING(20),
    carJiejinjiao:db.STRING(20),
    carLiqujiao:db.STRING(20),
    carQianxuanguaxingshi:db.STRING(20),
    carHouxuanguaxingshi:db.STRING(20),
    carKebianxuangua:db.STRING(20),
    carFadongjichangjiaxinghao:db.STRING(20),
    carPailiang:db.STRING(20),
    carJinqixingshi:db.STRING(20),
    carFadongjigonglv:db.STRING(20),
    carFadongjimali:db.STRING(20),
    carFadongjiniuju:db.STRING(20),
    carDangweishu:db.STRING(20),
    carBiansuxiang:db.STRING(20),
    carQudongfangshi:db.STRING(20),
    carRanyoujibiaohao:db.STRING(20),
    carHuanbaobiaozhun:db.STRING(20),
    carGuanfangyouhao:db.STRING(20),
    carYouxiangrongji:db.STRING(20),
    carQianluntaiguige:db.STRING(20),
    carHouluntaiguige:db.STRING(20),
    carBeitaiguige:db.STRING(20),
    carLvhejinlungu:db.STRING(20),
    carTaiyajiancexitong:db.STRING(20),
    carWaizhichufang:db.STRING(20),
    carWaizhilinyu: db.STRING(20),
    carWaizhidianshi:db.STRING(20),
    carZheyangpeng:db.STRING(20),
    carDiandongtabu:db.STRING(20),
    carShiwaideng:db.STRING(20),
    carPati: db.STRING(20),
    carZixingchejia: db.STRING(20),
    carTuochegou: db.STRING(20),
    carChuwugui:db.STRING(20),
    carTuozhancang: db.STRING(20),
    carQita: db.STRING(20),
    carDuogongnengfangxiangpan:db.STRING(20),
    carFangxiangpantiaojie:db.STRING(20),
    carZhulizhuanxiangleixing:db.STRING(20),
    carPizhizuoyi:db.STRING(20),
    carZhiwupishuangpingzuoyi:db.STRING(20),
    carJiashiweizuoyitiaojie:db.STRING(20),
    carFujiashiweizuoyitiaojie:db.STRING(20),
    carDierpaizuoyitiaojie:db.STRING(20),
    carZuoyigaoditiaojie:db.STRING(20),
    carZuoyitongfeng:db.STRING(20),
    carQianpaizuoyijiare:db.STRING(20),
    carYinxiangpinpai:db.STRING(20),
    carYangshengqishuliang:db.STRING(20),
    carChezaidianshi:db.STRING(20),
    carChezailanya:db.STRING(20),
    carJiashiweianquanqinang:db.STRING(20),
    carFujiashiweianquanqinang:db.STRING(20),
    carKongtiaoleixing:db.STRING(20),
    carHoupaikongtiaochukou:db.STRING(20),
    carCheneikongqijinhua:db.STRING(20),
    carDaocheleida:db.STRING(20),
    carBingxianfuzhu:db.STRING(20),
    carZishiyingxunhang:db.STRING(20),
    carQuanjingshexiangtou:db.STRING(20),
    carDaocheyingxiang:db.STRING(20),
    carGPSdaohang:db.STRING(20),
    carDingsuxunhang:db.STRING(20),
    carWuyaoshiqidong:db.STRING(20),
    carShafazuoweishu:db.STRING(20),
    carXingshikechengzuorenshu:db.STRING(20),
    carShafacaizhi:db.STRING(20),
    carShafazhuo:db.STRING(20),
    carShengjiangzhuo:db.STRING(20),
    carFangchezhuanyongchouyouyanji:db.STRING(20),
    carFangchezhuanyongbingxiang:db.STRING(20),
    carBingxiangrongji:db.STRING(20),
    carBingxiangleixing:db.STRING(20),
    carXicaichi:db.STRING(20),
    carShuilongtoulengreshuiketiao:db.STRING(20),
    carDiancilu:db.STRING(20),
    carKaoxiang:db.STRING(20),
    carWeibolu:db.STRING(20),
    carXiwanji:db.STRING(20),
    carRanxiguanshuliang:db.STRING(20),
    carRanxiguanrongji:db.STRING(20),
    carDanrenchuangshuliang:db.STRING(20),
    carDanrenchuangchicun:db.STRING(20),
    carShuangrenchuangchicun:db.STRING(20),
    carShuangrenchuangshuliang:db.STRING(20),
    carZongchuangweishu:db.STRING(20),
    carWeishengjian:db.STRING(20),
    carWeishengjianxingshi:db.STRING(20),
    carLinyuqi:db.STRING(20),
    carZuobianqi:db.STRING(20),
    carWeishengjianxishouchi:db.STRING(20),
    carNuanfengchukou:db.STRING(20),
    carHuanqishan:db.STRING(20),
    carReshuiqi:db.STRING(20),
    carReshuiqileixing:db.STRING(20),
    carXiyiji:db.STRING(20),
    carTaiyangnengdianchiban:db.STRING(20),
    carTaixiangnengdianchibanfadianliang:db.STRING(20),
    carFadianji:db.STRING(20),
    carFadianjileixing:db.STRING(20),
    carNibianqi:db.STRING(20),
    carNibianqigonglv:db.STRING(20),
    carZhongyangkongzhimianban:db.STRING(20),
    carDianpingshuliang:db.STRING(20),
    carDianpingdianliang:db.STRING(20),
    carFangchezhuanyongshuibeng:db.STRING(20),
    carJingshuixiangrongji:db.STRING(20),
    carHeishuixiangrongji:db.STRING(20),
    carHuishuixiangrongji:db.STRING(20),
    carPaiwufangshi:db.STRING(20),
    carYinshuijinghuaxitong:db.STRING(20),
    carChezaiWifi:db.STRING(20),
    carWeixingdianshi:db.STRING(20),
    carChezaidianshi:db.STRING(20),
    carChezaiKTV:db.STRING(20),
    carDVDjitou:db.STRING(20),
    carChezaiyingxiang:db.STRING(20),
    carYinxiangshuliang:db.STRING(20),
    carZhucheranyoujiarexitong:db.STRING(20),
    carFangchezhuanyongkongtiao:db.STRING(20),
    carKongtiaoxingshi:db.STRING(20),
    carRanqinuanfengxitong:db.STRING(20),
    carYanwubaojingxi:db.STRING(20),
    carMeiqibaojingqi:db.STRING(20),
    carYiyanghuatanbaojingqi:db.STRING(20),
    carTitleImage:db.STRING(300),
    carMoreImage:db.STRING(2000),
    carMoreImage2:db.STRING(2000),
    carPublish:db.BOOLEAN,
    carHot:db.INTEGER(10)
});