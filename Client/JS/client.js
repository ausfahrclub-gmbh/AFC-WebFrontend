var socket;
var ipadress = 'http://localhost:9000';

window.onload = function () { 
        
   // Query DOM
   var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback'),
      status = document.getElementById('status');

   document.getElementById('adress').innerHTML = '(' + ipadress + ')';

   socket = io.connect(ipadress);

   socket.on('connect', () => {
      status.style.color = "green"
      status.innerHTML = "CONNECTED"
    });
    socket.on('disconnect', () => {
       status.style.color = "red"
       status.innerHTML = "DISCONNECTED"
    });

   // Emit events
   btn.addEventListener('click', function(){
      socket.emit('chat', {
         message: message.value,
         handle: handle.value
      });
      message.value = "";
   });

   message.addEventListener('keypress', function(){
      socket.emit('typing', handle.value);
   })

   // Listen for events
   socket.on('chat', function(data){
      feedback.innerHTML = '';
      output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
   });

   socket.on('typing', function(data){
      feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
   });
 }