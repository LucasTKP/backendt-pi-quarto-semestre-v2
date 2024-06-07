const Joi= require('joi');

const saveTemperatureSchema ={
    payload: Joi.object({
        temperature: Joi
                .string()
                .min(3)
                .max(6)
                .required(),
        unit_of_measurement: Joi
                .string()
                .min(1)
                .max(5)
                .required(),
    })
}

const getTemperatureSchema = {
    query: Joi.object({
        latest: Joi.boolean()
    })
}

module.exports = {saveTemperatureSchema, getTemperatureSchema}