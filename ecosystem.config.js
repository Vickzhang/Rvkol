module.exports = {
    apps : [
        {
          name: "namexxx",
          script: "./bin/www",
          watch: true,
          env: {
            "PORT": 3030,
            "NODE_ENV": "development"
          },
          env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
          }
        }
    ]
  }