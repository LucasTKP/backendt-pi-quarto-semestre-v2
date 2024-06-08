const hapiAuthJwt2 = require('hapi-auth-jwt2');
const jwt = require('jsonwebtoken');

const validateToken = (decoded, request, h) => {
    try {
        const token = request.auth.token; 

        if (!token) return h.response({ message: 'Missing Token JWT' }).code(401);

        const decodedToken = jwt.verify(token, process.env.KEY_TOKEN); 

        return { isValid: true, credentials: decodedToken }; 
    } catch (error) {
        return { isValid: false }; 
    }
};

const plugin = {
    name: 'authentication-plugin',
    version: '1.0.0',
    register: async (server, options) => {
        await server.register(hapiAuthJwt2);

        server.auth.strategy('jwt', 'jwt', {
            key: options.secretKey,
            validate: validateToken
        });

        server.auth.default('jwt');
    }
};

module.exports = plugin;
