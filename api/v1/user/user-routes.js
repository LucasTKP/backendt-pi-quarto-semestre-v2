
const {create, login, resetPassword} = require('./user-controller.js');
const schema = require('./user-schema.js');

const plugin = {
    name: 'user-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "POST",
                path: "/v1/user",
                options: {
                    handler: create,
                    validate: schema.createUserSchema
                }
            },
            {
                method: "POST",
                path: "/v1/user/login",
                options: {
                    handler: login,
                    validate: schema.loginSchema
                }
            },
            {
                method: "PATCH",
                path: "/v1/user",
                options: {
                    handler: resetPassword,
                    validate: schema.resetPasswordSchema
                }
            }
        ])
    }
};

module.exports = plugin;