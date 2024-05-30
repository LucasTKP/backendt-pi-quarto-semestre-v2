const business = require('./user-business.js');
const util = require('./user-util.js');
const bcrypt = require('bcrypt');

const create = async (request, h) =>{
    
    try {

        const checkUser = await util.checkUserExists(request.payload);
        if(!checkUser){
            const result = await business.create(request.payload);
            const token = util.generateToken(result.__id); 
            const newUser = {
                "nome": result.nome,
                "email": result.email,
                "token": token
            }
            return h.response(newUser).code(201);
        }else{
            h.response({"mensagem": "Já existe um usuário com esse email"}).code(400);
        }
        
        

    } catch (error) {
        console.log(error);
        h.response({"mensagem": error});
    }

}

const login = async (request, h) => {

    try {

        const checkUser = await util.checkUserExists(request.payload.email);
        if(checkUser){
            const matchPassword = await bcrypt.compare(request.payload.senha, checkUser.senha);
            if(matchPassword) {
                request.payload._id = checkUser._id;
                const result = await business.login(request.payload);
                const token = util.generateToken(result.__id); 
                const loginUser = {
                    "nome": checkUser.nome,
                    "email": result.email,
                    "token": token
                }
                return h.response(loginUser).code(200);
            }else{
                return h.response({"mensagem": "Email ou senha errada"}).code(403);
            }
            
        }else{
            h.response({"mensagem": "Usuário não encontrado"}).code(400);
        }
        
        

    } catch (error) {
        console.log(error);
        h.response({"mensagem": error});
    }

}

const resetPassword = async (request, h) => {
    try {

        const checkUser = await util.checkUserExists(request.payload.email);
        if(checkUser){
            const matchPassword = await bcrypt.compare(request.payload.senhaAtual, checkUser.senha);
            if(matchPassword) {
                request.payload._id = checkUser._id;
                const result = await business.resetPassword(request.payload);
                return h.response(result).code(204);
            }
            
        }else{
            h.response({"mensagem": "Usuário não encontrado"}).code(400);
        }
        
        

    } catch (error) {
        console.log(error);
        h.response({"mensagem": error});
    }
}

module.exports = {create, login, resetPassword};