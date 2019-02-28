const fs = require('fs');

module.exports={
    'GET /article-dashbord':async (ctx,next) => {
        const model = require('../model');
        let Article = model.Article;
        var result = await Article.findAll();
        console.log(JSON.stringify(result));
        ctx.render('article-dashbord.html',{
            data:result
        })
    },
    'GET /article-add':async (ctx,next) => {
        //const model = require('../model');
        //let Car = model.Car;
        //var result = await Car.findAll();
        //console.log(JSON.stringify(result));
        ctx.render('article-add.html',{
            //data:result
        })
    },

    'GET /article-change/:id':async (ctx,next) => {
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

        console.log(JSON.stringify(result));

        ctx.render('articleDetails.html', {
            data: result,
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