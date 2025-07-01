const mongoose = require('mongoose');
require('dotenv').config();


const Connection = mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Mongo error:', err));

module.exports = Connection;