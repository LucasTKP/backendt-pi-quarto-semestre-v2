const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nnrk6ri.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
);

module.exports = mongoose;