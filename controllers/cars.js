module.exports={
    'GET /cars-dashbord':async (ctx,next) => {
        ctx.render('cars-dashbord.html',{
            title:'房车情报后台管理系统'
        })
    },

    'GET /cars-add':async (ctx,next) => {
        ctx.render('cars-add.html',{
            title:'房车情报后台管理系统'
        })
    },

    'post /cars-titleImage':async (ctx,next)=>{
        const multer = require('koa-multer');//加载koa-multer模块
        //文件上传
        //配置
        var storage = multer.diskStorage({
        //文件保存路径
            destination: function (req, file, cb) {
            cb(null, '/static/Details/')
        },
        //修改文件名称
        filename: function (req, file, cb) {
            var fileFormat = (file.originalname).split(".");
            cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
        }
        })
        //加载配置
        var upload = multer({ storage: storage });
        //路由
        upload.single('file');

            ctx.body = {
                filename: ctx.req.file.filename//返回文件名
            }
        console.log(ctx.req.file.filename);
    }
}