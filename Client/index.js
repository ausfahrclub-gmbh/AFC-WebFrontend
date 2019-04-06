const electron = require('electron');
const url = require('url');
const path = require('path');
//const sem = require('./JS/client.js');

const {app, BrowserWindow, globalShortcut} = electron;

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

    mainWindow.on('closed', function() {mainWindow = null;});

    registerShortcuts();
});

function registerShortcuts() {
    //Alarm-abort  
    globalShortcut.register('F4',() => { 
        mainWindow.webContents.send('abort', 0);
    });
    //Other alam levels
    globalShortcut.register('Alt+y',() => { 
        mainWindow.webContents.send('trigger', 1);
    });
    globalShortcut.register('Alt+x',() => { 
        mainWindow.webContents.send('trigger', 2);
    });
    globalShortcut.register('Alt+c',() => { 
        mainWindow.webContents.send('trigger', 3);
    });
    globalShortcut.register('Alt+v',() => { 
        mainWindow.webContents.send('trigger', 4);
    });
    globalShortcut.register('Alt+b',() => { 
        mainWindow.webContents.send('trigger', 5);
    });
    globalShortcut.register('Alt+n',() => { 
        mainWindow.webContents.send('trigger', 6);
    });
    globalShortcut.register('Alt+m',() => { 
        mainWindow.webContents.send('trigger', 7);
    });
    globalShortcut.register('Alt+,',() => { 
        mainWindow.webContents.send('trigger', 8);
    });
}