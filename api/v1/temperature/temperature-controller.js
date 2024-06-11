const business = require('./temperature-business.js');
const util = require('./temperature-util.js')

const create = async (request, h) => {
    try {
        const result = await business.save(util.formatPayload(request.payload))
        return h.response(util.formatTemperature(result)).code(201);
    } catch (error) {
        console.error(error);
        h.response({"message": error});
    }
}

const getTemperature = async (request, h) => {
    try {
        if(request.query.latest != null && request.query.latest == true) {
            const result = await business.findLast();
            if(result != null) return h.response(util.formatTemperature(result)).code(200);
            else return h.response({"message":"Temperatures not found"}).code(404)
        }
        else{
            const result = await business.findAll();
            if(result != null ) return h.response(result.map((temperature) => temperature = util.formatTemperature(temperature))).code(200);
            else return h.response({"message":"Temperatures not found"}).code(404)
        } 
    } catch (error) {
        console.error(error);
        h.response({"message": error});
    }
}

module.exports = {create, getTemperature}