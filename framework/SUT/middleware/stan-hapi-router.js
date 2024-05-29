// new and improved stan-hapi-router.js 
// to run : nohup node stan-hapi-router.js &
// to kill : ps aux | grep stan-hapi-router.js
//or 
// pkill -f stan-hapi-router.js
const { server } = require('@hapi/hapi');
const routerUp = async () => {

    const stanHapiServer = server({
        port: 3000,
        host: 'localhost'
    });

    await stanHapiServer.start();
    console.log('Server running on %s', stanHapiServer.info.uri);
    
    stanHapiServer.route({
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
        const name = request.params.name + ' you are awesome!';
        return `Sup ${name}!`;
        }
    });

    stanHapiServer.route({
        method: 'POST',
        path: '/signup',
        handler: (request, h) => {
          const payload = request.payload;
          return `Welcome ${payload.username}!`;
        }
      });

      stanHapiServer.route({
        method: 'PUT',
        path: '/update',
        handler: (request, h) => {
          const payload = request.payload;
          return `ok modified ${payload.username}!`;
        }
      });

      stanHapiServer.route({
        method: 'DELETE',
        path: '/signup',
        handler: (request, h) => {
          const payload = request.payload;
          return `Goodbye! ${payload.username}!`;
        }
      });
};
    
process.on('Unhandled Error', (err) => {

    console.log(err);
    process.exit(1);
});

routerUp();