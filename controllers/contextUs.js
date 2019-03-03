module.exports={

    'GET /contactUS':async (ctx,next) => {
        ctx.render('contactUS.html',{
            title:'房车情报-联系我们'
        })
    },


    'POST /tellUs':async (ctx, next) => {
        let user = {
            userName: ctx.request.body.userName,
            connection: ctx.request.body.connection,
            targetCar:ctx.request.body.targetCar,
          }
        
        //数据库操作
        const model = require('../model');
        let RVUser = model.RVuser;
        (async () => {
            var RVuser = await RVUser.create({
                userName: user.userName,
                connection: user.connection,
                targetCar:user.targetCar
            });
            console.log('created: ' + JSON.stringify(RVuser));
        })();
        return ctx.body = {
            code:'提交成功！',
            
        }
        //

    }  
}