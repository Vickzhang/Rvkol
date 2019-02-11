module.exports={
    'POST /tellUs':async (ctx, next) => {
        let user = {
            userName: ctx.request.body.userName,
            connection: ctx.request.body.connection,
            createTime: Date.now(),
            title: ctx.request.body.title,
            context:ctx.request.body.context
          }
        
        //数据库操作
        const model = require('../model');

        let RVUser = model.RVuser;


        (async () => {
            var RVuser = await RVUser.create({
                userName: user.userName,
                connection: user.connection,
                title: user.title,
                context: user.context
            });
            console.log('created: ' + JSON.stringify(RVuser));
        })();

        //

    }   
}