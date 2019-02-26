module.exports={
    'GET /cars':async(ctx,next)=>{
        const model = require('../model');
        let Car = model.Car;
        var result = await Car.findAll();

        ctx.render('cars.html',{
            data:result
        })
    },

    'GET /cars/:p/:l/:d':async(ctx,next)=>{
        var p =ctx.params.p.split("=")[1];
        var l =ctx.params.l.split("=")[1];
        var d =ctx.params.d.split("=")[1];
        var result;
        if(p=="all"&&l=="all"&&d=="all"){
            result = await Car.findAll();
        }
        else if(p=="all"&&l=="all"&&d!="all"){
            result = await Car.findAll({
                where:{
                    car
                }
            });
        }
        else if(p=="all"&&l!="all"&&d=="all"){

        }
        else if(p!="all"&&l=="all"&&d=="all"){

        }
        else if(p=="all"&&l!="all"&&d!="all"){

        }
        else if(p!="all"&&l=="all"&&d!="all"){

        }
        else if(p!="all"&&l!="all"&&d!="all"){

        }
        else{

        }


        const model = require('../model');
        let Car = model.Car;


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

