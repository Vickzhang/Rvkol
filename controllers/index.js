
module.exports={
    'GET /':async (ctx,next) => {
                //数据库操作
                const model = require('../model');
                 let Article = model.Article;

                 var carArticle = await Article.findAll({
                    attributes: ['articleTitle','articleID','articleTitleImage','articleZuozhe','updatedAt','articleHot'],
                    where: {
                        
                        articleWenzhangleixing: "车型文章",
                        articlePublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                 });

                // console.log(JSON.stringify(carArticle));

                var carVedio = await Article.findAll({
                    attributes: ['articleTitle','articleID','articleTitleImage','articleZuozhe','updatedAt','articleHot'],
                     where: {
                        articleWenzhangleixing: "车型视频",
                        articlePublish:true
                     },
                     order:[['updatedAt', 'DESC']]
                 });

                 var carNews = await Article.findAll({
                    attributes: ['articleTitle','articleID','articleTitleImage','articleZuozhe','updatedAt','articleHot'],
                    where: {
                       articleWenzhangleixing: "资讯",
                       articlePublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var carTravel = await Article.findAll({
                    attributes: ['articleTitle','articleID','articleTitleImage','articleZuozhe','updatedAt','articleHot'],
                    where: {
                       articleWenzhangleixing: "旅行游记",
                       articlePublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var carUse = await Article.findAll({
                    attributes: ['articleTitle','articleID','articleTitleImage','articleZuozhe','updatedAt','articleHot'],
                    where: {
                       articleWenzhangleixing: "用车",
                       articlePublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });
                var hotArticle = await Article.findAll({
                    attributes: ['articleTitle','articleID','articleTitleImage','articleZuozhe','updatedAt','articleHot'],
                    where: {
                       isHot:true
                    },
                    order:[['updatedAt', 'DESC']]
                });

                let Car = model.Car;

                //按车型
                var carTypeZixingshiB = await Car.findAll({
                    attributes: ['carTitle1','carID','updatedAt'],
                    where: {
                       carChexingjiegou: "自行式B",
                       carPublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var carTypePikafangche = await Car.findAll({
                    attributes: ['carTitle1','carID','updatedAt'],
                    where: {
                        carChexingjiegou: "皮卡房车",
                       carPublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var carTypeZixingshiC = await Car.findAll({
                    attributes: ['carTitle1','carID','updatedAt'],
                    where: {
                        carChexingjiegou: "自行式C",
                       carPublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });


                var carPrice0to3 = await Car.findAll({
                    attributes: ['carTitle1','carID','updatedAt'],
                    where: {
                       carPriceMin: {
                        '$gt': 0,
                        '$lte': 30,
                       },
                       carPublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var carPrice3to5 = await Car.findAll({
                    attributes: ['carTitle1','carID','updatedAt'],
                    where: {
                       carPriceMin: {
                        '$gt': 30,
                        '$lte': 50,
                       },
                       carPublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });


                var carPrice5to10 = await Car.findAll({
                    attributes: ['carTitle1','carID','updatedAt'],
                    where: {
                       carPriceMin: {
                        '$gt': 50,
                        '$lte': 100,
                       },
                       carPublish:true
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var SuggestCar = await Car.findAll({
                    attributes: ['carTitle1','carID','carTitleImage','carPriceMin','carHot'],
                    where: {
                       isHot:true
                    },
                    order:[['carHot', 'DESC']]
                });


                
                var HotCar = await Car.findAll({
                    attributes: ['carTitle1','carID','carTitleImage','carPriceMin','carHot'],
                    where: {
                       //isHot:true
                    },
                    order:[['carHot', 'DESC']]
                });

                let AD = model.AD;

                var Banner1=await AD.findAll({
                    where: {
                       adType:'广告位1',
                       adPublish:1
                    },
                });

                var Banner2=await AD.findAll({
                    where: {
                       adType:'广告位2',
                       adPublish:1
                    },
                });

                var Lunbo=await AD.findAll({
                    where: {
                       adType:'轮播广告',
                       adPublish:1
                    
                    },
                });

                var FirstAD=await AD.findAll({
                    where: {
                       adType:'首屏轮播',
                       adPublish:1
                    
                    },
                });
                console.log(JSON.stringify(Lunbo));
        ctx.render('index.html',{
            title:'房车情报',
            subtitle:'全球房车领袖，最新最全的房车情报',
            carArticle:carArticle.slice(0,10),
            carVedio:carVedio.slice(0,4),
            carNews:carNews.slice(0,10),
            carTravel:carTravel.slice(0,10),
            carUse:carUse.slice(0,10),
            carTypeZixingshiB:carTypeZixingshiB.slice(0,5),
            carTypeZixingshiC:carTypeZixingshiC.slice(0,5),
            carTypePikafangche:carTypePikafangche.slice(0,5),
            carPrice0to3:carPrice0to3.slice(0,5),
            carPrice3to5:carPrice3to5.slice(0,5),
            carPrice5to10:carPrice5to10.slice(0,5),
            carHotArticle:hotArticle.slice(0,3),
            carHotCar:HotCar.slice(0,5),
            carHotCarSuggest:SuggestCar.slice(0,5),
            banner1:Banner1,
            banner2:Banner2,
            lunbo:Lunbo,
            FirstAD:FirstAD
        })
    }
}