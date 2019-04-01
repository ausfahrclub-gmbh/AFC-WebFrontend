var express = require('express');
var socket  = require('socket.io');

const PORT = 9000; 

//App
var app = express();
var server = app.listen(PORT,() => {console.log(`Server running on port ${PORT}`);})

//Static files
app.use(express.static('public'));

//Socket
var io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection',socket.id);
});