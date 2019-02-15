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
    }
}