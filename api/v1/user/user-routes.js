
const {create, login, resetPassword} = require('./user-controller.js');
const schema = require('./user-schema.js');

const plugin = {
    name: 'user-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "POST",
                path: "/v1/users",
                options: {
                    handler: create,
                    validate: schema.createUserSchema,
                    auth: false
                },
            },
            {
                method: "POST",
                path: "/v1/users/login",
                options: {
                    handler: login,
                    validate: schema.loginSchema,
                    auth: false
                }
            },
            {
                method: "PATCH",
                path: "/v1/users",
                options: {
                    handler: resetPassword,
                    validate: schema.resetPasswordSchema
                }
            }
        ])
    }
};

module.exports = plugin;