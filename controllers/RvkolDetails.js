module.exports={
    'GET /RvDetails/:id':async(ctx,next)=>{
        var id =ctx.params.id;
        ctx.render('RvDetails.html',{
            title:'房车情报',
            subtitle:'全球房车领袖，最新最全的房车情报',
            id:id
        })
    }
}

