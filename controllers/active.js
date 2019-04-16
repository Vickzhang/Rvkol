module.exports = {
    'GET /active': async (ctx, next) => {
        ctx.render('active.html', {
            title: '房车情报-电子券'
        })
    },


    'GET /active-dashbord': async (ctx, next) => {

        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }

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

    'GET /active-zhanhui': async (ctx, next) => {


        const model = require('../model');
        let activeList = model.Active;
        var active = await activeList.findAll({
             where:{
                activeID:"02"
             }
         }
        );
        console.log(JSON.stringify(active));
        ctx.render('active-zhanhui.html', {
            title: '房车情报-展会活动设置',
            active: active
        })
    },


    'GET /zhanhui': async (ctx, next) => {

        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }
        const model = require('../model');
        let activeList = model.Active;
        var active = await activeList.findAll({
             where:{
                activeID:"02"
             }
         }
        );
        console.log(JSON.stringify(active));
        ctx.render('zhanhui.html', {
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
    },

    'POST /changeZhanhui':async (ctx,next)=>{
        let active = {
            activeTitle:  ctx.request.body.activeTitle,
            activeSubTitle:  ctx.request.body.activeSubTitle,
            activeTitleImage: ctx.request.body.activeTitleImage,
            activePeople:ctx.request.body.activePeople,
            activePublish:  ctx.request.body.activePublish,
        }

        const model = require('../model');

        let Active = model.Active;
        (async () => {
            var activeResult = await Active.update({
                activeTitle:  active.activeTitle,
                activeSubTitle:  active.activeSubTitle,
                activeTitleImage: active.activeTitleImage,
                activePeople:active.activePeople,
                activePublish:  active.activePublish,
            },{
                where:{
                    activeID:"02"
                }
            });
            console.log('update: ' + JSON.stringify(activeResult));
        })();

        return ctx.body = {
            code:'修改成功！',
        }
    },
}