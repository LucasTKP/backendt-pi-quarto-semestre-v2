const {create, getTemperature} = require('./temperature-controller.js');
const schema = require('./temperature-schema.js');

const plugin = {
    name: 'temperature-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "POST",
                path: "/v1/temperatures/iot",
                options: {
                    handler: create,
                    validate: schema.saveTemperatureSchema
                }
            },
            {
                method: "GET",
                path: "/v1/temperatures",
                options: {
                    handler: getTemperature,
                    validate: schema.getTemperatureSchema
                }
            }
        ])
    }
};

module.exports = plugin;