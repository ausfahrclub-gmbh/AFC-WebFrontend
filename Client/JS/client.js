const electron = require('electron');
const {ipcRenderer} = electron;

var socket;
var currSound;
var ipadress = 'http://25.66.153.178:9000';

ipcRenderer.on('abort', (e, level) => {
   socket.emit('alarm', {
      type: 'abort',
      level: level
   });
});

ipcRenderer.on('trigger', (e, level) => {
   socket.emit('alarm', {
      type: 'trigger',
      level: level
   });
});

// Startup-sound (autoplay)
currSound = new Howl({
   src: ['./Audio./startup.mp3'],
   preload: true,
   volume: 0.2,
   autoplay: true,
});

/* # # # # # # # # # # # # # # 
   Chat / Socket handling
# # # # # # # # # # # # # # # #*/
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

   // Changes the lable on mainWindow.html, to give feedback to the user
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

   // Listen for incoming alarms
   socket.on('alarm', function(data){
      console.log('Received alarm:' + data.type + '-' + data.level);
      //Checks if a sound is already playing,if true stops the audio, to prevent overlaying the audio tracks
      if(currSound.playing()){
         currSound.stop();
      }

      // Abort received, hence stopping the audio
      if(data.type == 'alarm_stop'){
         console.log('Stopped playing the alarm');
      }
      else if (data.type == 'abort'){
         if(data.level == 0){
            currSound = new Howl({
               src: [`./Audio./alarm${data.level}.mp3`],
               volume: 0.2,
               autoplay: true,
            });
            console.log('Aborted alarm');
         }
      }
      else{ // Alarm received
        
         // Autoplays the received alarm
         currSound = new Howl({
            src: [`./Audio./alarm${data.level}.mp3`],
            volume: 0.2,
            autoplay: true,
         });

      }
   });
 }


