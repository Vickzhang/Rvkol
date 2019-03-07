// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');


// 导入controller middleware:
const controller = require('./controller');
//判断运行环境
const isProduction = process.env.NODE_ENV === 'production';

//导入调用Nunjucks
const templating = require('./templating.js');
//导入koaBody
const koaBody = require('koa-body');
//上传所需文件
const getUploadDirName=require('./utils/getUploadDirname');
const checkDirExist=require('./utils/checkDirExist');
const path=require('path');

//=============================================================================

// 创建一个Koa对象表示web app本身:
const app = new Koa();

//=================================================================================

//记录Url以及页面执行时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var 
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});
//使用koabody模块
app.use(koaBody({
  multipart: true, 
  jsonLimit:"5mb",
  textLimit:"5mb",
  formLimit:"5mb",
  formidable: {
    maxFileSize: 200*1024*1024, // 设置上传文件大小最大限制，默认2M
    maxFieldsSize:10*1024*104,
    uploadDir: path.join(__dirname, './static/img'),
      keepExtensions: true,
      maxFieldsSize: 2 * 1024 * 1024,
      onFileBegin:(name,file) => {
        // 最终要保存到的文件夹目录
        const dirName = getUploadDirName();
        console.log(dirName);
        const dir = path.join(__dirname, `/static/img/${dirName}`);
        checkDirExist(dir);
        // 获取文件名称

        // 重新覆盖 file.path 属性
        file.path = `${dir}/${file.name}`;
        console.log(file.path);
        },
        onError:(err)=>{
          console.log(err);
        }
  } 
    // multipart:true,
    // encoding:'gzip',
    // formidable:{
    //   uploadDir: path.join(__dirname, './static/img'),
    //   keepExtensions: true,
    //   maxFieldsSize: 2 * 1024 * 1024,
    //   onFileBegin:(name,file) => {
    //    console.log(file);
    //   // 获取文件后缀
    //   //const ext = getUploadFileExt(file.name);
    //   // 最终要保存到的文件夹目录
    //   const dirName = getUploadDirName();
    //   console.log(dirName);
    //   const dir = path.join(__dirname, `/static/img/${dirName}`);

    //   // 获取文件名称

    //   // 重新覆盖 file.path 属性
    //   file.path = `${dir}/${file.name}`;
    //   console.log(file.path);
    //   },
    //   onError:(err)=>{
    //     console.log(err);
    //   }
    // }
  }));

//静态文件
if (true) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}


app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));





// 加入 poster解析
//app.use(bodyParser());


//Controller
app.use(controller());

console.log('isProduciton'+isProduction);


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');