const jwt = require('jsonwebtoken');
const User = require('./user-model.js');
require('dotenv').config();

const generateToken = (id) =>{
    const token = jwt.sign({userId: id}, process.env.KEY_TOKEN,{
        expiresIn: '24h'
    });

    return token;
}

const checkUserExists = async (email) => {
    const userExists = await User.findOne({email});
    return userExists;
}

module.exports = {generateToken,checkUserExists}