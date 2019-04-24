// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');


// 导入controller middleware:
const controller = require('./controller');
//判断运行环境
const isProduction = process.env.NODE_ENV === 'production';

//导入调用Nunjucks
const templating = require('./templating.js');
//引用 koa-session  用于用户认证
const session=require('koa-session');
//导入koaBody
const koaBody = require('koa-body');
//上传所需文件
const getUploadDirName=require('./utils/getUploadDirname');
const checkDirExist=require('./utils/checkDirExist');
const addHit=require('./utils/addHit');
const path=require('path');



//=============================================================================

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.keys=['my code skill is awesome'];
//=======================


//记录Url以及页面执行时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var 
        start = new Date().getTime(),
        execTime;
    //if (!ctx.path.startsWith('/static')&&!ctx.path.startsWith('/dashbord')) 
          const websites = await addHit(ctx.path);
          const totalhit=websites.totalhit;
          ctx.state = Object.assign(ctx.state, { totalhit: totalhit });
          //console.log(ctx.state);
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});


app.use(session({
  key: 'koa:sess', /** cookie的名称，可以不管 */
  maxAge: 7200000, /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
},app));


//使用koabody模块
app.use(koaBody({
  multipart: true, 
  jsonLimit:"5mb",
  textLimit:"5mb",
  formLimit:"5mb",
  formidable: {
    maxFileSize: 200*1024*1024, // 设置上传文件大小最大限制，默认2M
    maxFieldsSize:10*1024*104,
    //uploadDir: path.join(__dirname, './static/img/Details'),
    keepExtensions: true,
      onFileBegin:(name,file) => {
        // 最终要保存到的文件夹目录
        const dirName = getUploadDirName();
        const dir = path.join(__dirname, `/static/img/Details/${dirName}`);
        checkDirExist(dir);
        // 重新覆盖 file.path 属性
        file.path = `${dir}/${file.name}`;
        app.context.uploadpath = app.context.uploadpath ? app.context.uploadpath : {};
        app.context.uploadpath[name] = `/static/img/Details/${dirName}/${file.name}`;
        //console.log(`/static/img/Details/${dirName}/${file.name}`);
      },
        onError:(err)=>{
          console.log(err);
        }
  } 
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



//Controller
app.use(controller());

console.log('isProduciton'+isProduction);


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');