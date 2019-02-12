const db = require('../db');

module.exports = db.defineModel('Cars', {
    
    userName:db.STRING(20),
    connection: db.STRING(100),
    targetCar:db.STRING(100),
});