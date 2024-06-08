const authPlugin = require('./plugin/auth-plugin')
const {server, plugins} = require('./server');

(async ()=> {

    await server.register(plugins);
    
    await server.register({
        plugin: authPlugin,
        options: {secretKey: process.env.KEY_TOKEN}
    });
    
    await server.start();
    console.log("Server listeninng " + server.info.uri);
    
})();