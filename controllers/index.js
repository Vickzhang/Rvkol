
module.exports={
    'GET /':async (ctx,next) => {
        ctx.render('index.html',{
            title:'房车情报',
            subtitle:'全球房车领袖，最新最全的房车情报'
        })
    }
}