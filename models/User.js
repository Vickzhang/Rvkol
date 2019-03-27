const db = require('../db');

module.exports = db.defineModel('users', {
    username: {
        type: db.STRING(100),
        unique: true
    },
    password: db.STRING(100),
});