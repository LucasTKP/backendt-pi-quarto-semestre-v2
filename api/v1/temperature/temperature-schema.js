const Joi= require('joi');

const saveTemperatureSchema ={
    payload: Joi.object({
        temperature: Joi
                .number()
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