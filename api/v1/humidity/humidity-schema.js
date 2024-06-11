const Joi= require('joi');

const saveHumiditySchema ={
    payload: Joi.object({
        humidity: Joi
                .number()
                .required(),
        unit_of_measurement: Joi
                .string()
                .min(1)
                .max(5)
                .required(),
    })
}

const getHumiditySchema = {
    query: Joi.object({
        latest: Joi.boolean()
    })
}

module.exports = {saveHumiditySchema, getHumiditySchema}