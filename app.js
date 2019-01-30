// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

//导入koa posterParse
const bodyParser = require('koa-bodyparser');
// 导入controller middleware:
const controller = require('./controller');
//判断运行环境
const isProduction = process.env.NODE_ENV === 'production';

//导入调用Nunjucks
const templating = require('./templating.js');
//导入文件读取服务
//const service = require('./webService/webService.js');

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



//静态文件
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}


app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));



// 加入 poster解析
app.use(bodyParser());


//Controller
app.use(controller());


console.log(isProduction);


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');