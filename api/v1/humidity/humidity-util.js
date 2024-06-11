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

const formatPayload = (humidity) => {
    humidity.umidade = humidity.humidity;
    humidity.unidadeMedida = humidity.unit_of_measurement;

    delete humidity.humidity;
    delete humidity.unit_of_measurement;

    return humidity;
}

module.exports = {formatHumidity, formatPayload};