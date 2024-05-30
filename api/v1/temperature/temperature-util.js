const formatTemperature = (temperature) => {
    
    temperature.temperatura = temperature.temperatura+ " " + temperature.unidadeMedida;
    delete temperature.__v;
    delete temperature._id;
    delete temperature.criado;
    
    delete temperature.unidadeMedida;

    const temp = {
        temperatura : temperature.temperatura,
        data : temperature.data,
        hora : temperature.hora
    }

    return temp;
}

module.exports = {formatTemperature};

