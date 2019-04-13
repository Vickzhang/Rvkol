
function PriceArticle(l) {
    switch (l) {
        case "1":
            {
                return "车型文章";
            }
            break;
        case "2":
            {
                return "车型视频";
            }
            break;
        case "3":
            {
                return "资讯";
            }
            break;
            case "4":
            {
                return "旅行游记";
            }
            break;
            case "5":
            {
                return "用车";
            }
            break;

        default:
            {
                return "车型文章";
            }
            break;
    }
}



const fs = require('fs');

module.exports={
    'GET /articles/:l':async (ctx,next) => {
        var l = ctx.params.l;
        var leixingResult=PriceArticle(l);
        const model = require('../model');
        let Article = model.Article;
        var result = await Article.findAll({
            attributes: ['articleID', 'articleZuozhe','articleTitleImage','articleTitle','updatedAt'],
            order:[['articleID', 'ASC']],
            where:{
                articleWenzhangleixing:leixingResult
            }
        });
        console.log(JSON.stringify(result));
        ctx.render('articles.html',{
            title:'房车情报-车型文章',
            subTitle:leixingResult,
            data:result
        })
    },


    'GET /article-dashbord':async (ctx,next) => {
        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }
        const model = require('../model');
        let Article = model.Article;
        var result = await Article.findAll({
            attributes: ['articleID', 'articleZuozhe','articleWenzhangleixing','articleTitle','articlePublish','updatedAt'],
            order:[['articleID', 'ASC']]
        });
        console.log(JSON.stringify(result));
        ctx.render('article-dashbord.html',{
            data:result,
            title:'房车情报-文章/视频管理',
        })
    },
    'GET /article-add':async (ctx,next) => {

        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }

        ctx.render('article-add.html',{
            title:'房车情报-添加文章/视频',
            //data:result
        })
    },

    'GET /article-change/:id':async (ctx,next) => {

        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Article = model.Article;

        var result = await Article.findAll({
            where: {
                articleID: id,
            }
        });

        console.log(JSON.stringify(result));

        ctx.render('article-change.html', {
            data: result,
            title:'文章/视频编辑',
        })
    },

    'GET /article-hot':async (ctx,next) => {

        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }
        const model = require('../model');
        let Article = model.Article;
        var result = await Article.findAll({
            attributes: ['articleID', 'articleTitle','articleHot','isHot'],
            order:[['articleHot', 'Desc']]
        });
        ctx.render('article-hot.html',{
            title:'房车情报-添加文章/视频',
            data:result
        })
    },

    'GET /articleDetails/:id':async (ctx,next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Article = model.Article;

        var result = await Article.findAll({
            where: {
                articleID: id,
            }
        });


        await Article.increment({
            articleHot : 1,
            },{
                where:{
                    articleID:id
                }
            }
        )

        console.log(JSON.stringify(result));

        ctx.render('articleDetails.html', {
            data: result,
            title:result[0].articleTitle,
        })
    },
    'POST /subArticle':async (ctx,next)=>{
        let article = {
            articleID: ctx.request.body.articleID,
            articleTitle:  ctx.request.body.articleTitle,
            articleTitleImage: ctx.request.body.articleTitleImage,
            articleXiangguanchexing:  ctx.request.body.articleXiangguanchexing,
            articleZuozhe:  ctx.request.body.articleZuozhe,
            articleWenzhangleixing:  ctx.request.body.articleWenzhangleixing,
            articleContext:  ctx.request.body.articleContext,
            articlePublish:  ctx.request.body.articlePublish,
            articleHot:0,
            isHot:false
        }

        const model = require('../model');

        let Article = model.Article;
        (async () => {
            var articleResult = await Article.create({
                articleID: article.articleID,
                articleTitle:  article.articleTitle,
                articleTitleImage: article.articleTitleImage,
                articleXiangguanchexing:  article.articleXiangguanchexing,
                articleZuozhe:  article.articleZuozhe,
                articleWenzhangleixing:  article.articleWenzhangleixing,
                articleContext: article.articleContext,
                articlePublish:  article.articlePublish,
                articleHot:article.articleHot,
                isHot:article.isHot
            });
            console.log('created: ' + JSON.stringify(articleResult));
        })();

        return ctx.body = {
            code:'提交成功！',
        }
    },

    'POST /changeArticle':async (ctx,next)=>{
        let article = {
            articleID: ctx.request.body.articleID,
            articleTitle:  ctx.request.body.articleTitle,
            articleTitleImage: ctx.request.body.articleTitleImage,
            articleXiangguanchexing:  ctx.request.body.articleXiangguanchexing,
            articleZuozhe:  ctx.request.body.articleZuozhe,
            articleWenzhangleixing:  ctx.request.body.articleWenzhangleixing,
            articleContext:  ctx.request.body.articleContext,
            articlePublish:  ctx.request.body.articlePublish,
        }

        const model = require('../model');

        let Article = model.Article;
        (async () => {
            var articleResult = await Article.update({
                articleID: article.articleID,
                articleTitle:  article.articleTitle,
                articleTitleImage: article.articleTitleImage,
                articleXiangguanchexing:  article.articleXiangguanchexing,
                articleZuozhe:  article.articleZuozhe,
                articleWenzhangleixing:  article.articleWenzhangleixing,
                articleContext: article.articleContext,
                articlePublish:  article.articlePublish,
            },{
                where:{
                    articleID:article.articleID,
                }
            });
            console.log('update: ' + JSON.stringify(articleResult));
        })();

        return ctx.body = {
            code:'修改成功！',
        }
    },
    'POST /articleDel/:id':async (ctx,next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Article = model.Article;

        var result = await Article.destroy({
            where: {
                articleID: id,
            }
        });
        console.log('Del: ' + JSON.stringify(result));

        return ctx.body = {
            code:'删除成功！',
        }
    },

    'POST /articlePublish/:id':async (ctx,next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Article = model.Article;

        var result = await Article.update({
            articlePublish:1,
        },{
            where:{
                articleID:id,
            }
        }
    );
        console.log('Del: ' + JSON.stringify(result));

        return ctx.body = {
            code:'发布成功！',
        }
    },

    'POST /articleUnPublish/:id':async (ctx,next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Article = model.Article;

        var result = await Article.update({
            articlePublish:0,
        },{
            where:{
                articleID:id,
            }
        }
    );
        console.log('unPublish: ' + JSON.stringify(result));

        return ctx.body = {
            code:'操作成功！',
        }
    },


    'POST /articleHot/:id':async (ctx,next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Article = model.Article;

        var result = await Article.update({
            isHot:1,
        },{
            where:{
                articleID:id,
            }
        }
    );
        console.log('Hot: ' + JSON.stringify(result));

        return ctx.body = {
            code:'设置热门成功！',
        }
    },

    'POST /articleUnHot/:id':async (ctx,next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Article = model.Article;

        var result = await Article.update({
            isHot:0,
        },{
            where:{
                articleID:id,
            }
        }
    );
        console.log('unPublish: ' + JSON.stringify(result));

        return ctx.body = {
            code:'取消热门成功！',
        }
    },



    
    'POST /article-uploadeImage':async (ctx,next)=>{
        //文件上传
        //配置
        const articlePicture = ctx.request.files.picture; // 获取上传文件
        console.log(articlePicture.name);
        const reader = fs.createReadStream(articlePicture.path); // 创建可读流
        const ext = articlePicture.name.split('.').pop(); // 获取上传文件扩展名
        const fileName=`static/img/article/${articlePicture.name}`;
        const upStream = fs.createWriteStream(fileName); // 创建可写流
        reader.pipe(upStream); // 可读流通过管道写入可写流

        return ctx.body = {
            code:'提交成功！',
            pictureName: fileName,
        }
        
        
    },
}