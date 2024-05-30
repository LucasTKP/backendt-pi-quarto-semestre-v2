const business = require('./humidity-business.js');
const util = require('./humidity-util.js');

const create = async (request, h) => {
    try {
        return h.response(await business.save(request.payload)).code(201);
    } catch (error) {
        console.error(error);
    }
}

const getHumidity = async (request, h) => {
    try {
        if(request.query){
            const result = await business.findLast()
            return h.response(util.formatHumidity(result)).code(200);
        } 
        else{
            const result = await business.findAll();
            result.map((humidity) => humidity = util.formatHumidity(humidity));
            return h.response(result).code(200);
        } 
    } catch (error) {
        console.error(error);
    }
}

module.exports = {create, getHumidity}