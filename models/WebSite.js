const db = require('../db');

module.exports = db.defineModel('websites', {
    websiteID:db.STRING(20),
    totalhit :db.INTEGER(10),
    
});