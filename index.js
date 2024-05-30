const {server, plugins} = require('./server');

(async ()=> {

    await server.register(plugins);
    
    await server.start();
    console.log("Server listeninng " + server.info.uri);
    
})();