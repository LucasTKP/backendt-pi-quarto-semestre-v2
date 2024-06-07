const formatHumidity = (humidity) => {

    humidity.umidade = humidity.umidade+ " " + humidity.unidadeMedida;
    delete humidity.__v;
    delete humidity._id;
    delete humidity.criado;
    delete humidity.unidadeMedida;

    const humdt = {
        humidity : humidity.umidade,
        date : humidity.data,
        time : humidity.hora
    }

    delete humidity.umidade;
    delete humidity.data;
    delete humidity.hora;

    return humdt;

}

module.exports = {formatHumidity};