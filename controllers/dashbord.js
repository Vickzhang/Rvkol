module.exports={
    'GET /dashbord':async (ctx,next) => {
        ctx.render('dashbord.html',{
            title:'房车情报后台管理系统'
        })
    }
}