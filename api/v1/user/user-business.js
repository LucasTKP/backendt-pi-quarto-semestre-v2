const repository = require('./user-repository.js');
const bcrypt = require('bcrypt');

const create= async (user) =>{

    const hashedPassword = await bcrypt.hash(user.senha, 12);
    user.senha = hashedPassword;

    return repository.save(user);
}

const login = async (user) => {
    await repository.login(user);
    return user
}

const resetPassword = async (user) => {

    const hashedPassword = await bcrypt.hash(user.senhaNova, 12);
    user.senhaNova = hashedPassword;
    
    return repository.resetPassword(user);
}

module.exports = {create, login, resetPassword}