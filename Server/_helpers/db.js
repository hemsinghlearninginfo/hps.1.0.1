const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    MyError: require('../Model/myError.model'),

    User: require('../Model/user.model'),
    UserLoginTrack: require('../Model/userLoginTrack.model'),
    FAQ: require('../Model/faq.model'),
    NewsLetter: require('../Model/newsletter.model'),
    WriteUp: require('../Model/writeup.model'),
    UploadedFile: require('../Model/uploadedFile.model'),
    Market: require('../Model/market.model'),
    ChatMessage: require('../Model/chatMessage.model')
};