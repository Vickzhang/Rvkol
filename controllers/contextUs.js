const userModel = require('../mode/mysql')

module.exports={
    'POST /tellUs':async (ctx, next) => {
        let user = {
            userName: ctx.request.body.userName,
            connection: ctx.request.body.connection,
            createTime: Date.now(),
            title: ctx.request.body.title,
            context:ctx.request.body.context
          }
        
          await userModel.insetUser([user.userName,user.connection,user.title,user.context,user.createTime]).then((res)=>{
            ctx.render('index.html', {
                    title: '房车情报',
                    subtitle: '全球房车领袖，最新最全的房车情报'
                })
          })

        //

    }   
}