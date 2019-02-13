const db = require('../db');

module.exports = db.defineModel('Cars', {
    carID:db.ID,
    carLogo:db.STRING(20),
    carTitle1:db.STRING(20),
    carTitle2:db.TEXT,
    carPriceMin:db.DOUBLE(10), //最小价格
    carPriceMax:db.DOUBLE(10), //最大价格
    carChexingjiegou:
    carDipanleixing:
    carZhunjialeixing:
    carZuoweishu:
    carChechang:
    carChekuang:
    carCheGao:
    carZhouju:
    carQianlunju:
    carHoulunju:
    carZuixiaolidijianxi:
    carZhengbeizhiliang:
    carJiejinjiao:
    carLiqujiao:
    carXuanGua:
    carQianxuanguaxingshi:
    carHouxuanguaxingshi:
    carKebianxuangua:
    carFadongjichangjiaxinghao:
    carPailiang:
    carJinqixingshi:
    carFadongjigonglv:
    carFadongjimali:
    carFadongjiniuju:
    carGangticailiao:
    carGanggaicailiao:
    carDangweishu:
    carBiansuxiang:
    carQudongfangshi:
    carRanyoujibiaohao:
    carHuanbaobiaozhun:
    carGuanfangyouhao:
    carYouxiangrongji:
    carQianluntaiguige:
    carHouluntaiguige:
    carBeitaiguige:
    carLvhejinlungu:
    carTaiyajiancexitong:
    



});