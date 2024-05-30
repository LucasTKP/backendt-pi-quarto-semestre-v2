const business = require('./temperature-business.js');
const util = require('./temperature-util.js')

const create = async (request, h) => {
    try {
        return h.response(await business.save(request.payload)).code(201);
    } catch (error) {
        console.error(error);
    }
}

const getTemperature = async (request, h) => {
    try {
        if(request.query) {
            const result = await business.findLast();
            return h.response(util.formatTemperature(result)).code(200);
        }
        else{
            const result = await business.findAll();
            result.map((temperature) => temperature = util.formatTemperature(temperature));
            return h.response(result).code(200);
        } 
    } catch (error) {
        console.error(error);
    }
}

module.exports = {create, getTemperature}