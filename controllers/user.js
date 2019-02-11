module.exports={
    'GET /users':async (ctx,next) => {
        ctx.render('users.html',{
            title:'房车情报后台管理系统'
        })
    }
}