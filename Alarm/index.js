const electron = require('electron');
const url = require('url');
const path = require('path');
const play = require('audio-play');
const load = require('audio-loader');



const {app, BrowserWindow} = electron;

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

let mainWindow;

//App ready
app.on('ready', function(){

    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));

    load('./Sounds/startup.mp3').then(play);

    mainWindow.on('closed', function() {mainWindow = null;});
});


// if(process.env.NODE_ENV != 'production')