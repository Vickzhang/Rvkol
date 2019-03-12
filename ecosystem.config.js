module.exports = {
    apps : [
        {
          name: "Rvkol",
          script: "app.js",
          watch: false,  //这里开启监听会导致上传图片时服务器自动重启,后续可以考虑精确监听
          env: {
            "PORT": 3000,
            "NODE_ENV": "development"
          },
          env_production: {
            "PORT": 443,
            "NODE_ENV": "production",
          }
        }
    ]
  }