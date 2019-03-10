const sha1=require('sha1');

var config = {
    wechat:{
      appID:'wx7157fe49fb90c141',
      appSecret:"6f3b6c39aab57d27dfec8b204df84066",
      token:'rvkolforWechat'
    }
  }




module.exports={
    'GET /weChat':async (ctx,next) => {

        console.log(ctx.request.body);
        var token=config.wechat.token;
        var signature=ctx.request.body.signature;
        var nonce=ctx.request.body.nonce;
        var timestamp=ctx.request.body.timestamp;
        var ecostr=ctx.request.body.ecostr;
        //字典排序
        var str=[token,timestamp,nonce].sort().join('');
        var sha=sha1(str);
      
        if(sha==signature){
          this.body=ecostr+'';
        }else{
          this.body="wrong";
        }

        //ctx.render('Login.html',{
        //})
    }
}