const Resumo = require('./summary-model.js');

const getSummary = async (start_date, final_date) => {
    return Resumo.find({
        data: {
            $gte: start_date,
            $lt: final_date
        }
    });
}

module.exports = {getSummary}