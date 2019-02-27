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