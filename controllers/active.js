module.exports={
    'GET /active':async (ctx,next) => {
        ctx.render('active.html',{
            title:'房车情报-电子券'
        })
    },
}