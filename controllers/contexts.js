module.exports={
    'GET /contexts':async (ctx,next) => {
        ctx.render('contexts.html',{
            title:'房车情报后台管理系统'
        })
    }
}