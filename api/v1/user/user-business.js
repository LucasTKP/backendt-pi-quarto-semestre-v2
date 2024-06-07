const repository = require('./user-repository.js');
const bcrypt = require('bcrypt');
const util = require('./user-util.js');

const create= async (user) =>{

    user.nome = user.name;

    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.senha = hashedPassword;

    delete user.name;
    delete user.password;

    const result =repository.save(user);

    const token = util.generateToken(result.__id); 
    const newUser = {
        "name": user.nome,
        "email": user.email,
        "token": token
    }

    return newUser
}

const login = async (user) => {
    const result = repository.login(user);

    const token = util.generateToken(result._id); 
    const loginUser = {
        "name": user.name,
        "email": user.email,
        "token": token
    }
    
    return loginUser
}

const resetPassword = async (user) => {

    const hashedPassword = await bcrypt.hash(user.new_password, 12);
    user.new_password = hashedPassword;
    
    return repository.resetPassword(user);
}

module.exports = {create, login, resetPassword}