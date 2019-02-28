
module.exports={
    'GET /':async (ctx,next) => {
                //数据库操作
                const model = require('../model');
                 let Article = model.Article;

                 var carArticle = await Article.findAll({
                    where: {
                        articleWenzhangleixing: "车型文章",
                    },
                    order:[['updatedAt', 'DESC']]
                 });

                // console.log(JSON.stringify(carArticle));

                var carVedio = await Article.findAll({
                     where: {
                        articleWenzhangleixing: "车型视频",
                     },
                     order:[['updatedAt', 'DESC']]
                 });

                 var carNews = await Article.findAll({
                    where: {
                       articleWenzhangleixing: "资讯",
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var carTravel = await Article.findAll({
                    where: {
                       articleWenzhangleixing: "旅行游记",
                    },
                    order:[['updatedAt', 'DESC']]
                });

                var carUse = await Article.findAll({
                    where: {
                       articleWenzhangleixing: "用车",
                    },
                    order:[['updatedAt', 'DESC']]
                });



        ctx.render('index.html',{
            title:'房车情报',
            subtitle:'全球房车领袖，最新最全的房车情报',
            carArticle:carArticle.slice(0,3),
            carVedio:carVedio.slice(0,3),
            carNews:carNews.slice(0,3),
            carTravel:carTravel.slice(0,3),
            carUse:carUse.slice(0,3),
        })
    }
}