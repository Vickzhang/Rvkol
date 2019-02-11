

module.exports={
    'GET /dashbord':async (ctx,next) => {
            //数据库操作
            const model = require('../model');
            let RVUser = model.RVuser;
            var result2;
            (async () => {
                var result = await RVUser.findAll();
                console.log('find: ' + JSON.stringify(result));
                console.log('names='+result[0].userName);
                result=result[0].userName;
            })();
            ctx.render('dashbord.html',{
                name:result2,
            })


        }
    }