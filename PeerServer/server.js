var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

const PORT = 9000;
const HOST = '10.0.0.17';
var date = new Date();

var server = app.listen(PORT,HOST,() => console.log(`Server running on  ${HOST} : ${PORT}`));

var options = {
    debug: true
}

var peerserver = ExpressPeerServer(server, options);

app.use('/api', peerserver);

app.get('/', function(req, res, next) { res.send('Hello world!'); });

// Logging users that connect/disconnect
peerserver.on('connection', function(id) { 
    console.log(`${date.getHours()}\:${date.getMinutes()} - User ${id} connected`);
});

peerserver.on('disconnect', function(id) { 
    console.log(`${date.getHours()}\:${date.getMinutes()} - User ${id} disconnected`);
});


