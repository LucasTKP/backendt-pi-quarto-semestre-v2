const formatHumidity = (humidity) => {

    humidity.umidade = humidity.umidade+ " " + humidity.unidadeMedida;
    delete humidity.__v;
    delete humidity._id;
    delete humidity.criado;
    delete humidity.unidadeMedida;

    const humdt = {
        umidade : humidity.umidade,
        data : humidity.data,
        hora : humidity.hora
    }
    return humdt;

}

module.exports = {formatHumidity};