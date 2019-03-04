module.exports={

    'GET /contactUS':async (ctx,next) => {
        ctx.render('contactUS.html',{
            title:'房车情报-联系我们'
        })
    },

    'GET /testDrive':async (ctx,next) => {
        ctx.render('testDrive.html',{
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

    }  ,


    'POST /testDrive':async (ctx, next) => {
        let user = {
            testDriveName: ctx.request.body.testDriveName,
            testDriveConnection: ctx.request.body.testDriveConnection,
            testDriveCar:ctx.request.body.testDriveCar,
          }
        
        //数据库操作
        const model = require('../model');
        let testDrive = model.testDrive;
        (async () => {
            var RVTestDriver = await testDrive.create({
                testDriveName: user.testDriveName,
                testDriveConnection: user.testDriveConnection,
                testDriveCar:user.testDriveCar
            });
            console.log('created: ' + JSON.stringify(RVTestDriver));
        })();

        return ctx.body = {
            code:'提交成功！',
            
        }
        //

    }  
}