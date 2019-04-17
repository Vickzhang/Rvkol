const fs = require('fs');

module.exports={
  'GET /ad-dashbord':async (ctx,next) => {
        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }
        const model = require('../model');
        let AD = model.AD;
        var result = await AD.findAll({
            attributes: ['adID', 'adName','adLink','adImage','adType','adHot','createdAt','adPublish'],
            order:[['adID', 'ASC']]
        });
        console.log(JSON.stringify(result));
        ctx.render('ad-dashbord.html',{
            data:result,
            title:'房车情报-广告',
        })
    },

    'GET /ad-add':async (ctx,next) => {

        if (!ctx.session.username) {
            ctx.response.redirect('/dashbord');
        }

        ctx.render('ad-add.html',{
            title:'房车情报-添加广告',
            //data:result
        })
    },

    'POST /subAD':async (ctx,next)=>{
        let ad = {
            adID: ctx.request.body.adID,
            adName:  ctx.request.body.adName,
            adLink: ctx.request.body.adLink,
            adImage:  ctx.request.body.adImage,
            adType:  ctx.request.body.adType,
            adPublish:  ctx.request.body.adPublish,
            adHot:0,
        }

        const model = require('../model');

        let AD = model.AD;
        (async () => {
            var adResult = await AD.create({
                adID: ad.adID,
                adName:  ad.adName,
                adLink: ad.adLink,
                adImage:  ad.adImage,
                adType:  ad.adType,
                adPublish:  ad.adPublish,
                adHot: ad.adHot,
            });
            console.log('created: ' + JSON.stringify(adResult));
        })();

        return ctx.body = {
            code:'提交成功！',
        }
    },

    'POST /adDel/:id':async (ctx,next) => {
        var id = ctx.params.id;

        //数据库操作
        const model = require('../model');
        let AD = model.AD;

        var result = await AD.destroy({
            where: {
                adID: id,
            }
        });
        console.log('Del: ' + JSON.stringify(result));

        return ctx.body = {
            code:'删除成功！',
        }
    },
}