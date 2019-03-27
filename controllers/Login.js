// const sha1=require('sha1');

// var config = {
//     wechat:{
//       appID:'wx7157fe49fb90c141',
//       appSecret:"6f3b6c39aab57d27dfec8b204df84066",
//       token:'rvkolforWechat'
//     }
//   }




module.exports={

  'POST /login': async (ctx, next) => {

    var username= ctx.request.body.username;
    var password = ctx.request.body.password;

    const model = require('../model');
    let User = model.User;

    var result = await User.findAll({
      where: {
          username: username,
          password:password

      }
  });

    if (result.length>0) {
         //保存登录状态
        ctx.session.username = username;
        ctx.body = { success: true, msg: '登录成功！' };
    }
    else{
        ctx.body = { success: false, msg: '账号或密码错误！' };
    }

}

    // 'GET /weChat':async (ctx,next) => {

    //     console.log(ctx.request.body);
    //     var token=config.wechat.token;
    //     var signature=ctx.request.body.signature;
    //     var nonce=ctx.request.body.nonce;
    //     var timestamp=ctx.request.body.timestamp;
    //     var ecostr=ctx.request.body.ecostr;
    //     //字典排序
    //     var str=[token,timestamp,nonce].sort().join('');
    //     var sha=sha1(str);
      
    //     if(sha==signature){
    //       etx.body=ecostr+'';
    //     }else{
    //       ctx.body="wrong";
    //     }

    //     //ctx.render('Login.html',{
    //     //})
    // }
}