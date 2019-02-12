module.exports={
    'GET /dashbord':async (ctx,next) => {
            //数据库操作
            const model = require('../model');
            let RVUser = model.RVuser;

            var result = await RVUser.findAll();


            ctx.render('dashbord.html',{
                data:result
            });

            console.log(JSON.stringify(result));
        }
    }