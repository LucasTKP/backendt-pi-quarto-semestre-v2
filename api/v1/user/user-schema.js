const Joi= require('joi');

const createUserSchema = {
    payload: Joi.object({
        name: Joi
                .string()
                .min(3)
                .max(60)
                .required(),
        email: Joi
                .string()
                .min(15)
                .max(40)
                .required(),
        password: Joi
                .string()
                .min(8)
                .max(40)
                .required(),
    })
};

const loginSchema = {
    payload: Joi.object({
        email: Joi
                .string()
                .min(10)
                .max(40)
                .required(),
        password: Joi
                .string()
                .min(8)
                .max(40)
                .required(),
    })
};

const resetPasswordSchema = {
    payload: Joi.object({
        email: Joi
                .string()
                .min(15)
                .max(40)
                .required(),
        password: Joi
                .string()
                .min(8)
                .max(40)
                .required(),
        new_password: Joi
                .string()
                .min(8)
                .max(40)
                .required(),
    })
};

module.exports = {createUserSchema, loginSchema, resetPasswordSchema};