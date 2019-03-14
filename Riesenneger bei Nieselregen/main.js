const electron = require('electron');
const url = require('url');
const path = require('path');
const p2pChannel = require('electron-peer-connection').main;

const {app, BrowserWindow} = electron;

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
});

// if(process.env.NODE_ENV != 'production')

p2pChannel.initChannel();

const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowA = new WindowPeerConnection('windowA');
windowA.attachStream(stream);
windowA.sendStream('windowB');

const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowB = new WindowPeerConnection('windowB');
windowB.onReceivedStream(function (stream) {    
    video.srcObject = stream;
});
p2pChannel.addClient({window: windowA, name: 'windowA'});
p2pChannel.addClient({window: windowB, name: 'windowB'});