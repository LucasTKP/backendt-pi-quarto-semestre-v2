const {getSummary} = require('./summary-controller.js');
const schema = require('./summary-schema.js');

const plugin = {
    name: 'summary-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/summary",
                options: {
                    handler: getSummary,
                    validate: schema.getSummarySchema
                }
            }
        ])
    }
};

module.exports = plugin;