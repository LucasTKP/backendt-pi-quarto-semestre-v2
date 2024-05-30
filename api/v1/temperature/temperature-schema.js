const Joi= require('joi');

const saveTemperatureSchema ={
    payload: Joi.object({
        temperatura: Joi
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

const getTemperatureSchema = {
    query: Joi.object({
        last: Joi.boolean()
    })
}

module.exports = {saveTemperatureSchema, getTemperatureSchema}