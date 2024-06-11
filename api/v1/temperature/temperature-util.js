const formatTemperature = (temperature) => {
    
    temperature.temperatura = temperature.temperatura+ " " + temperature.unidadeMedida;
    delete temperature.__v;
    delete temperature._id;
    delete temperature.criado;
    
    delete temperature.unidadeMedida;

    const temp = {
        temperature : temperature.temperatura,
        date : temperature.data,
        time : temperature.hora
    }

    delete temperature.data;
    delete temperature.hora;
    delete temperature.temperatura;

    return temp;
}

const formatPayload = (temperature) => {

    temperature.temperatura = temperature.temperature;
    temperature.unidadeMedida = temperature.unit_of_measurement;

    delete temperature.temperature;
    delete temperature.unit_of_measurement;

    return temperature;

}

module.exports = {formatTemperature, formatPayload};

