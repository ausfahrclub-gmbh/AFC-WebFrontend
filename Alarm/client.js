const play = require('audio-play');
const load = require('audio-loader');

var socket = io.connect('http://localhost:9000');

/*
 function playSound() {  
 
    load('./Sounds/startup.mp3').then(play);
    
    //var audio = new Audio('./Sounds/startup.mp3');
    //audio.play();   
 }
 */
 

window.onload = function () { 
   // Query DOM
   var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

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

 

