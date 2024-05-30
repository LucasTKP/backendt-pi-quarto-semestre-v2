const Joi= require('joi');

const createUserSchema = {
    payload: Joi.object({
        nome: Joi
                .string()
                .min(3)
                .max(60)
                .required(),
        email: Joi
                .string()
                .min(15)
                .max(40)
                .required(),
        senha: Joi
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
                .min(15)
                .max(40)
                .required(),
        senha: Joi
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
        senhaAtual: Joi
                .string()
                .min(8)
                .max(40)
                .required(),
        senhaNova: Joi
                .string()
                .min(8)
                .max(40)
                .required(),
    })
};

module.exports = {createUserSchema, loginSchema, resetPasswordSchema};