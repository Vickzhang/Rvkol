const userModel = require('../mode/mysql')

module.exports={
    'POST /contextUs':async (ctx, next) => {
        let user = {
            userName: ctx.request.body.userName,
            connection: ctx.request.body.connection,
            createTime: Date.now(),
            title: ctx.request.body.title,
            context:ctx.request.body.context
          }
        
          await userModel.insetUser([user.userName,user.connection,user.title,user.context,user.createTime]).then((res)=>{
              console.log('提交成功!')
              
          })

    }   
}