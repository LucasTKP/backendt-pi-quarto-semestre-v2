const repository = require('./temperature-repository');
const dateUtil = require('../../../util/date-util.js');
const timeUtil = require('../../../util/time-util.js');

const save = async (temperature) => {

    temperature.data = dateUtil.getDataAtual();
    temperature.hora = timeUtil.getHoraAtual();

    return repository.save(temperature);

}

const findAll = async () => {
    return repository.findAll();
}

const findLast = async () => {
    return repository.findLast();
}

module.exports = {save, findAll, findLast}