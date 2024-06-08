const business = require('./user-business.js');
const util = require('./user-util.js');
const bcrypt = require('bcrypt');

const create = async (request, h) =>{
    
    try {

        const checkUser = await util.checkUserExists(request.payload.email);

        if (checkUser != null) return h.response({"message": "There is already a user with this email"}).code(409);
        else {
            const result = await business.create(request.payload);
            return h.response(result).code(201);
        }        

    } catch (error) {
        console.log(error);
        h.response({"message": error});
    }

}

const login = async (request, h) => {

    try {

        const checkUser = await util.checkUserExists(request.payload.email);

        if(checkUser === null) return h.response({"mensage": "User not found with this email"}).code(404);
        else {
            const matchPassword = await bcrypt.compare(request.payload.password, checkUser.senha);
            if(matchPassword) {
                request.payload._id = checkUser._id;
                request.payload.name = checkUser.nome;
                return h.response(await business.login(request.payload)).code(200);
            }else{
                return h.response({"message": "Wrong email or password"}).code(403);
            }
        }
        

    } catch (error) {
        console.log(error);
        h.response({"message": error});
    }

}

const resetPassword = async (request, h) => {
    try {

        const checkUser = await util.checkUserExists(request.payload.email);
        if(checkUser){
            const matchPassword = await bcrypt.compare(request.payload.password, checkUser.senha);
            if(matchPassword) {
                request.payload._id = checkUser._id;
                const result = await business.resetPassword(request.payload);
                return h.response(result).code(204);
            }else return h.response({"message":"Password does not match the database"}).code(403);
            
        }else{
            h.response({"message": "User not found with this email"}).code(404);
        }
        
        

    } catch (error) {
        console.log(error);
        h.response({"message": error});
    }
}

module.exports = {create, login, resetPassword};