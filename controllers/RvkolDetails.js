function PriceJudge(p) {
    switch (p) {
        case "0-1":
            {
                return [0, 10];
            }
            break;
        case "1-3":
            {
                return [10, 30];
            }
            break;
        case "3-5":
            {
                return [30, 50];
            }
            break;
        case "5-10":
            {
                return [50, 100];
            }
            break;
        case "10-50":
            {
                return [100, 500];
            }
            break;

        default:
            {
                return [0, 500];
            }
            break;
    }
}

function LogoJudge(l) {
    switch (l) {
        case "1":
            {
                return "瑞弗";
            }
            break;
        case "2":
            {
                return "上汽大通";
            }
            break;
        case "3":
            {
                return "凯伦宾威";
            }
            break;
        case "4":
            {
                return "中天";
            }
            break;
        case "5":
            {
                return "华晨";
            }
            break;
        case "6":
            {
                return "齐星";
            }
            break;
        case "7":
            {
                return "览众";
            }
            break;
        case "8":
            {
                return "旌航";
            }
            break;
        case "9":
            {
                return "湖光";
            }
            break;
        case "10":
            {
                return "亚特";
            }
            break;
        case "11":
            {
                return "德兴";
            }
            break;
        case "12":
            {
                return "顺旅";
            }
            break;
        case "13":
            {
                return "极速";
            }
            break;
            case "14":
            {
                return "飞神";
            }
            break;
            case "15":
            {
                return "深圳四驱";
            }
            break;
            case "16":
            {
                return "中汽京福";
            }
            break;

            case "17":
            {
                return "江铃";
            }
            break;
            case "18":
            {
                return "阿科米";
            }
            break;
            case "19":
            {
                return "雅升";
            }
            break;

            case "20":
            {
                return "金冠";
            }
            break;
            case "21":
            {
                return "侣友";
            }
            break;

            case "22":
            {
                return "中亚";
            }
            break;

            case "23":
            {
                return "飞翔";
            }
            break;

            case "24":
            {
                return "澎力特";
            }
            break;
            case "25":
            {
                return "阿迪雅";
            }
            break;

        default:
            {
                return "阿迪雅";
            }
            break;
    }
}

function DipanJudge(d) {
    switch (d) {
        case "1":
            {
                return "依维柯";
            }
            break;
        case "2":
            {
                return "大通";
            }
            break;
        case "3":
            {
                return "奔驰";
            }
            break;
        case "4":
            {
                return "福特";
            }
            break;
        case "5":
            {
                return "长城";
            }
            break;
        case "6":
            {
                return "东风御风";
            }
            break;
        case "7":
            {
                return "黄海";
            }
            break;
        case "8":
            {
                return "江淮";
            }
            break;
        case "9":
            {
                return "中兴领主";
            }
            break;
        case "10":
            {
                return "福田";
            }
            break;
        case "11":
            {
                return "五十铃";
            }
            break;

            case "12":
            {
                return "金杯";
            }
            break;
            case "13":
            {
                return "菲亚特ducato";
            }
            break;



        default:
            {
                return "福特";
            }
            break;
    }
}


function LeixingJudge(x) {
    switch (x) {
        case "1":
            {
                return "自行式A";
            }
            break;
        case "2":
            {
                return "自行式B";
            }
            break;
        case "3":
            {
                return "自行式C";
            }
            break;
        case "4":
            {
                return "皮卡房车";
            }
            break;
        case "5":
            {
                return "拖挂式";
            }
            break;




        default:
            {
                return "自行式B";
            }
            break;
    }
}


module.exports = {
    'GET /cars': async (ctx, next) => {
        const model = require('../model');
        let Car = model.Car;
        var result = await Car.findAll({
            where:{
                carPublish:true,
            }
        });

        ctx.render('cars.html', {
            data: result,
            title:'房车情报-车型库',
            subtitle:'全球房车领袖，最新最全的房车情报'
        })
    },

    'GET /cars/:p/:l/:d/:x': async (ctx, next) => {
        var p = ctx.params.p.split("=")[1];
        var l = ctx.params.l.split("=")[1];
        var d = ctx.params.d.split("=")[1];
        var x = ctx.params.x.split("=")[1];
        var result;


        //接下来判断不同选择的实际对应值
        var priceResult = PriceJudge(p);
        var LogoResult = LogoJudge(l);
        var dipanResult = DipanJudge(d);
        var leixingResult = LeixingJudge(x);

        const model = require('../model');
        let Car = model.Car;

        if (p == "all" && l == "all" && d == "all" && x == "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitle1','carTitleImage','carLogo','carPriceMin'],
            });
        } 
        
        
        else if (p != "all" && l == "all" && d == "all" && x == "all") {
            result = await Car.findAll({
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    }
                }
            });
        } else if (p == "all" && l != "all" && d == "all" && x == "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {
                    carLogo: LogoResult
                }
            });

        } else if (p == "all" && l == "all" && d != "all" && x == "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {
                    carDipanleixing: dipanResult
                }
            });
        } else if (p == "all" && l == "all" && d == "all" && x != "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {
                    carChexingjiegou: leixingResult
                }
            });

        } else if (p == "all" && l != "all" && d != "all" && x == "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {
                    carLogo: LogoResult,
                    carDipanleixing: dipanResult
                }
            });

        } else if (p != "all" && l == "all" && d != "all" && x == "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    },
                    carDipanleixing: dipanResult
                }
            });
        } else if (p != "all" && l != "all" && d == "all" && x == "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    },
                    carLogo: LogoResult
                }
            });

        } else if (p != "all" && l == "all" && d == "all" && x != "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    },
                    carChexingjiegou: leixingResult
                }
            });

        } else if (p == "all" && l != "all" && d == "all" && x != "all") {
            result = await Car.findAll({
                attributes: ['carID','carTitleImage','carTitleImage','carLogo','carPriceMin'],
                where: {

                    carLogo: LogoResult,
                    carChexingjiegou: leixingResult
                }
            });

        } else if (p == "all" && l == "all" && d != "all" && x != "all") {
            result = await Car.findAll({
                where: {

                    carDipanleixing: dipanResult,
                    carChexingjiegou: leixingResult
                }
            });

        } else if (p != "all" && l != "all" && d != "all" && x == "all") {
            result = await Car.findAll({
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    },
                    carLogo: LogoResult,
                    carDipanleixing: dipanResult
                }
            });

        } else if (p != "all" && l != "all" && d == "all" && x != "all") {
            result = await Car.findAll({
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    },
                    carLogo: LogoResult,
                    carChexingjiegou: LeixingJudge
                }
            });

        } else if (p != "all" && l == "all" && d != "all" && x != "all") {
            result = await Car.findAll({
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    },
                    carDipanleixing: dipanResult,
                    carChexingjiegou: LeixingJudge
                }
            });

        } else if (p == "all" && l != "all" && d != "all" && x != "all") {
            result = await Car.findAll({
                where: {
                    carLogo: LogoResult,
                    carDipanleixing: dipanResult,
                    carChexingjiegou: LeixingJudge
                }
            });

        } else {

            result = await Car.findAll({
                where: {
                    carPriceMin: {
                        '$gt': priceResult[0],
                        '$lte': priceResult[1],
                    },
                    carLogo: LogoResult,
                    carDipanleixing: dipanResult,
                    carChexingjiegou: LeixingJudge
                }
            });

        }



        ctx.render('cars.html', {
            data: result,
            title:'房车情报-车型库',
            subtitle:'全球房车领袖，最新最全的房车情报'
        })
    },



    'GET /RvDetails/:id': async (ctx, next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Car = model.Car;

        var carInform = await Car.findAll({
            where: {
                carID: id,
            }
        });

        await Car.increment({
            carHot : 1,
            },{
                where:{
                    carID:id
                }
            }
        )

        let Articles = model.Article;
        var ArticleInform = await Articles.findAll({
            where: {
                articleXiangguanchexing: id,
            }
        });
        //console.log(JSON.stringify(result));

        ctx.render('RvDetails.html', {
            data: carInform,
            carArticles:ArticleInform,
            title:"房车情报-"+carInform[0].carTitle1
        })
    }
}
