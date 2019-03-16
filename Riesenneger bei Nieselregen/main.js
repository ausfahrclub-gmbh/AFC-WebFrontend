const electron = require('electron');
const url = require('url');
const path = require('path');
const p2pChannel = require('electron-peer-connection').main;

const {app, BrowserWindow, Menu, ipcMain} = electron;

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