const db = require('../db');

module.exports = db.defineModel('testDrives', {
    testDriveName:db.STRING(20),
    testDriveConnection: db.STRING(100),
    testDriveCar:db.STRING(100),
});