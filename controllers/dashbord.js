const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    'GET /dashbord':async (ctx,next) => {
            //数据库操作

            ctx.render('Login.html',{
                title:'房车情报后台管理系统'
            });

        },

        'GET /dashbord/:id':async (ctx,next) => {

            if (!ctx.session.username) {
                ctx.response.redirect('/dashbord');
            }

            var page=ctx.params.id;
            var pageSize=20;
            //数据库操作
            const model = require('../model');
            let RVUser = model.RVuser;
            
            var result = await RVUser.findAndCountAll({
                order:[['createdAt', 'DESC']],
                offset:(page - 1) * pageSize,//开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
                limit:pageSize//每页限制返回的数据条数
            }
                
            );

            let testDriver = model.testDrive;
            var testResult = await testDriver.findAndCountAll({
                order:[['createdAt', 'DESC']],
                offset:(page - 1) * pageSize,//开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
                limit:pageSize//每页限制返回的数据条数
            });

            let Cars = model.Car;
            var carsResult = await Cars.count({
                where:{

                }
            });

            let Articles = model.Article;
            var articlesResult = await Articles.count({
                where:{

                }
            });


            console.log(carsResult);
            ctx.render('dashbord.html',{
                testDrive:testResult.rows,
                data:result.rows,
                title:'房车情报后台管理系统',
                page:page,
                totalhit:ctx.state.totalhit,
                totalMessage:result.count,
                totalCars:carsResult,
                totalArticles:articlesResult,
                username:ctx.session.username
            });

        }

    }