const Joi= require('joi');

const saveHumiditySchema ={
    payload: Joi.object({
        umidade: Joi
                .string()
                .min(3)
                .max(6)
                .required(),
        unidadeMedida: Joi
                .string()
                .min(1)
                .max(5)
                .required(),
    })
}

const getHumiditySchema = {
    query: Joi.object({
        last: Joi.boolean()
    })
}

module.exports = {saveHumiditySchema, getHumiditySchema}