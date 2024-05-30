const {create, getHumidity} = require('./humidity-controller.js');
const schema = require('./humidity-schema.js');

const plugin = {
    name: 'humidity-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "POST",
                path: "/v1/humidities/iot",
                options: {
                    handler: create,
                    validate: schema.saveHumiditySchema
                }
            },
            {
                method: "GET",
                path: "/v1/humidities",
                options: {
                    handler: getHumidity,
                    validate: schema.getHumiditySchema
                }
            }
        ])
    }
};

module.exports = plugin;