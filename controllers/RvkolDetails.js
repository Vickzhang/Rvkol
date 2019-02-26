module.exports={
    'GET /cars':async(ctx,next)=>{
        const model = require('../model');
        let Car = model.Car;
        var result = await Car.findAll();

        ctx.render('cars.html',{
            data:result
        })
    },

    'GET /cars/:p&:l&:d':async(ctx,next)=>{
        var p =ctx.params.p;
        var l =ctx.params.l;
        var d =ctx.params.d;

        console.log(p+l+d);


        const model = require('../model');
        let Car = model.Car;
        var result = await Car.findAll();

        ctx.render('cars.html',{
            data:result
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

