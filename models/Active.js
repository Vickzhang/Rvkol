const db = require('../db');

module.exports = db.defineModel('Actives', {
    activeID:db.STRING(20),
    activeTitle: db.STRING(50),
    activeSubTitle:db.STRING(255),
    activeTitleImage: db.STRING(100),
    activePeople:db.INTEGER(10),
    activeLink:db.STRING(50),
    activePublish:db.BOOLEAN
});