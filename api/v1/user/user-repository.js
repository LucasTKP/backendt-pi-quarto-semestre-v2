const User = require('./user-model.js');

const save = async (user) =>{
    return User.create(user);
}

const login = async (user) => {
    return User.findByIdAndUpdate(user._id, {
        ultimoLogin :Date.now() - 3*60*60*1000
    },{
        new: true,
        returnOriginal: false
    })
}

const resetPassword = async (user) => {
    return User.findOneAndUpdate(user._id, {
        senha: user.senhaNova
    },{
        new: true,
        returnOriginal: false
    });
}

module.exports = {save, login, resetPassword}