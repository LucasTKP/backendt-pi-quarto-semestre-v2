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

module.exports = {formatTemperature};

