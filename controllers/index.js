
module.exports={
    'GET /':async (ctx,next) => {
        ctx.render('index.html',{
            title:'房车情报',
            subtitle:'一家有情怀的房车信息网'
        })
    }
}