const Joi = require('joi')

const getSummarySchema = {
    query: Joi.object({
        date_lesser: Joi   
                        .string()
                        .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/)
                        .min(10)
                        .max(10)
                        .required(),
        date_greater: Joi   
                        .string()
                        .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/)
                        .min(10)
                        .max(10)
                        .required()
    })
}

module.exports = {getSummarySchema}