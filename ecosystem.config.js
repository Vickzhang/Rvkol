module.exports = {
    apps : [
        {
          name: "Rvkol",
          script: "app.js",
          watch: true,
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