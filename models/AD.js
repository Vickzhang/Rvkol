const db = require('../db');

module.exports = db.defineModel('ADs', {
    adID:db.STRING(20),
    adName:db.STRING(50),
    adLink:db.STRING(50),
    adImage: db.STRING(50),
    adType: db.STRING(50),
    adHot:db.INTEGER(10),
    adPublish:db.BOOLEAN
});