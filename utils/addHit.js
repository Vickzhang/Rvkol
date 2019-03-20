



        async function addHit(p) {

            const model = require('../model');
            let WebSite = model.WebSite;
            
            if (!p.startsWith('/static')&&!p.startsWith('/dashbord')) {
                var result = await WebSite.increment({
                    totalhit : 1,
                    },{
                        where:{
                            websiteID:1
                        }
        
                    }
                )
            }

    

            var websites=await WebSite.findAll()

            return websites[0];
        }

        module.exports = addHit;
        
