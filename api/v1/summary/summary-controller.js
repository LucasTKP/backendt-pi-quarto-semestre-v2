const business = require('./summary-business.js');
const util = require('./summary-util.js');

const getSummary = async (request, h) => {
    try {

        const start_date = new Date(util.converterDataFormato(request.query.date_greater));
        const final_date = new Date(util.converterDataFormato(request.query.date_lesser));
        final_date.setDate( final_date.getDate() + 1);

        const result = await business.getSummary(start_date, final_date);
        if(result != null) return h.response(result).code(200);
        else return h.response({"message":"Summary not found"}).code(404)
    } catch (error) {
        console.error(error);
        h.response({"message": error});
    }
}

module.exports = {getSummary}