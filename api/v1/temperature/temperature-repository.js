const Temperature = require('./temperature-model.js');

const save = async (temperature) => {
    return Temperature.create(temperature);
}

const findAll = async () => {
    return Temperature.find();
}

const findLast = async () => {
    return Temperature.findOne({},{},{
            sort:{ 'criado': -1}
        });
}

module.exports = {save, findAll, findLast};