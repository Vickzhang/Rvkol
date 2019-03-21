const db = require('../db');

module.exports = db.defineModel('Articles', {
    articleID:db.STRING(20),
    articleTitle: db.STRING(50),
    articleTitleImage: db.STRING(100),
    articleXiangguanchexing:db.STRING(20),
    articleZuozhe:db.STRING(20),
    articleWenzhangleixing:db.STRING(20),
    articleContext:db.TEXT('long'),
    articlePublish:db.BOOLEAN,
    articleHot:db.INTEGER(10)
});