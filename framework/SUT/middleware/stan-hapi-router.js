// to run hapiRouter
// $ nohup node stan-hapi-router.js &
const Hapi = require('hapi'),
    fsExtra = require('fs-extra'),
    spawn = require('child_process').exec,
    shell = require('shelljs'),
    path = require('path');

const server = new Hapi.Server({
    port: 3000
});

server.route({
    method: 'GET',
    path: '/token/{value?}',
    handler: function(req, h) {
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
});

server.route({
    method: 'POST',
    path: '/makepizza/{value?}',
    handler: function(req, h) {
        return "making pizza"
    }
});

server.route({
    method: 'PUT',
    path: '/modifypizza/{value?}',
    handler: function(req, h) {
        if (req.params.value == 'nopineapple') {
          return "no pineapple pizza"
        }

        if (req.params.value == 'add') {
            var output = spawn('./New-Topping.ps1', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else if (req.params.value == 'remove') {
            var output = spawn('./Delete-Topping.ps1', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else
            var output = spawn('./Invoke-Hello.ps1', function(error, stdout, stderr) {
                return console.log(stdout);
            });
        return output.stdout;
    }
});

server.route({
    method: 'DELETE',
    path: '/deleteorder/{value?}',
    handler: function(req, h) {
        
            var output = spawn('./deletePizza -${req.params.value}', function(error, stdout, stderr) {
                return console.log(stdout);
            });

        return output.stdout;
    }
});

async function startServer() {
    await server.start();
    console.log('Go to : 127.0.0.1:' + server.info.port);
}

startServer();

process.on('SIGINT', function () {  
    console.log('stopping stan-hapi-server on CRT-C')
  
    server.stop({ timeout: 10000 }).then(function (err) {
      console.log('stan-hapi-server stopped')
      process.exit((err) ? 1 : 0)
    })
  })