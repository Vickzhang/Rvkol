module.exports={
    'GET /dashbord':async (ctx,next) => {
            //数据库操作
            const model = require('../model');
            let RVUser = model.RVuser;

            var result = await RVUser.findAll();


            ctx.render('dashbord.html',{
                data:result,
                title:'房车情报后台管理系统'
            });

            console.log(JSON.stringify(result));
        }
    }