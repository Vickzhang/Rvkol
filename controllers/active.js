module.exports = {
    'GET /active': async (ctx, next) => {
        ctx.render('active.html', {
            title: '房车情报-电子券'
        })
    },


    'GET /active-dashbord': async (ctx, next) => {

        const model = require('../model');
        let activeList = model.Active;

        var active = await activeList.findAll({
            order: [['updatedAt', 'DESC']]
        }

        );

        ctx.render('active-dashbord.html', {
            title: '房车情报-活动管理',
            active: active
        })
    },

    'POST /ActiveCountAdd': async (ctx, next) => {


        //数据库操作
        const model = require('../model');
        let activePeople = model.Active;

        var result = await activePeople.increment({
            activePeople : 1,
            },{
                where:{
                    activePublish:1
                }

            }

        );

        console.log('PeopleAdd: ' + JSON.stringify(result));

        return ctx.body = {
            code: '操作成功！',
        }
    }
}