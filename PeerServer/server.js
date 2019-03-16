var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

const PORT = 9000;
const HOSTNAME = '127.0.0.1'
var date = new Date();

var server = app.listen(PORT,HOSTNAME,() => console.log(`Server running on port ${PORT} | hostname ${HOSTNAME}`));

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


