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
        var output = spawn('./generateToken.ps1', function(error, stdout, stderr) {
            return console.log(stdout);
        });
        return output.stdout;
    }
});

server.route({
    method: 'POST',
    path: '/makepizza/{value?}',
    handler: function(req, h) {
        var output = spawn('./makePizza.ps1', function(error, stdout, stderr) {
            return console.log(stdout);
        });
        return output.stdout;
    }
});

server.route({
    method: 'PUT',
    path: '/modifypizza/{value?}',
    handler: function(req, h) {
        if (req.params.value == 'add') {
            var output = spawn('./addTopping.ps1', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else if (req.params.value == 'remove') {
            var output = spawn('./removeTopping.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else
            var output = spawn('./hello.ps1', function(error, stdout, stderr) {
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
    console.log('Go to : 192.000.00.00:' + server.info.port);
}

startServer();