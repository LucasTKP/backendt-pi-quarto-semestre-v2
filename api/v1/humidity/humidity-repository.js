const Humidity = require('./humidity-model.js');

const save = async (temperature) => {
    return Humidity.create(temperature);
}

const findAll = async () => {
    return Humidity.find();
}

const findLast = async () => {
    return Humidity.findOne({},{},{
            sort:{ 'criado': -1}
        });
}

module.exports = {save, findAll, findLast};