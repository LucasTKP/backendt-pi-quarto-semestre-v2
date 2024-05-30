const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
    port: 5000,
    host: '0.0.0.0'
});



const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api',
            url: 'mongodb+srv://guihdevtestes:53rv1d0rT35T3@main.zxsxp.mongodb.net/pi4semestre?retryWrites=true&w=majority',
            settings: {
                useUnifiedTopology: true
            },
            decorate: true
        }
    }
];

module.exports = {server, plugins};