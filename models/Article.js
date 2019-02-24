const db = require('../db');

module.exports = db.defineModel('Articles', {
    articleID:db.STRING(20),
    articleTitle: db.STRING(20),
    articleXiangguanchexing:db.STRING(20),
    articleZuozhe:db.STRING(20),
    articleWenzhangleixing:db.string(20),
    articleContext:db.LONGTEXT
});