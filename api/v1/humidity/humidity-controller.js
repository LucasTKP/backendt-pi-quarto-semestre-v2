const business = require('./humidity-business.js');
const util = require('./humidity-util.js');

const create = async (request, h) => {
    try {
        const result = await business.save(util.formatPayload(request.payload));
        return h.response(util.formatHumidity(result)).code(201);
    } catch (error) {
        console.error(error);
        h.response({"message": error});
    }
}

const getHumidity = async (request, h) => {
    try {
        if(request.query.latest != null && request.query.latest == true){
            const result = await business.findLast()
            if(result != null) return h.response(util.formatHumidity(result)).code(200);
            else return h.response({"message":"Humidities not found"}).code(404)
        } 
        else{
            const result = await business.findAll();
            if(result != null) return h.response(result.map((humidity) => humidity = util.formatHumidity(humidity))).code(200);
            else return h.response({"message":"Humidities not found"}).code(404)
        } 
    } catch (error) {
        console.error(error);
        h.response({"message": error});
    }
}

module.exports = {create, getHumidity}