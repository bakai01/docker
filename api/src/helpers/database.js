const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

module.exports.connectMONGO = () => {
    mongoose.connect(MONGODB_URI);

    return mongoose.connection;
};
