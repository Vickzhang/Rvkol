module.exports={
    'GET /cars':async(ctx,next)=>{
        ctx.render('cars.html',{

        })
    },



    'GET /RvDetails/:id':async(ctx,next)=>{
        var id =ctx.params.id;

        //数据库操作
        const model = require('../model');
        let Car = model.Car;

        var result = await Car.findAll({
            where: {
                carID:id,
            }
        });

        console.log(JSON.stringify(result));

        ctx.render('RvDetails.html',{
            data:result,
        })
    }
}

