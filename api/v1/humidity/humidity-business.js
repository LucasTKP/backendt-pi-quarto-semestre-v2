const repository = require('./humidity-repository');
const dateUtil = require('../../../util/date-util.js');
const timeUtil = require('../../../util/time-util.js');

const save = async (humidity) => {

    humidity.temperatura = humidity.humidity;
    humidity.unidadeMedida = humidity.unit_of_measurement;

    delete humidity.humidity;
    delete humidity.unit_of_measurement;

    humidity.data = dateUtil.getDataAtual();
    humidity.hora = timeUtil.getHoraAtual();

    return repository.save(humidity);

}

const findAll = async () => {
    return repository.findAll();
}

const findLast = async () => {
    return repository.findLast();
}

module.exports = {save, findAll, findLast}