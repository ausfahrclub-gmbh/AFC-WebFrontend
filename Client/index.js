const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, globalShortcut} = electron;

/* For Developing
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
*/

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

    mainWindow.on('closed', function() {
        app.quit();
    });

    registerShortcuts();
});

function registerShortcuts() {
    //Alarm-abort  
    globalShortcut.register('F4',() => { 
        mainWindow.webContents.send('abort', 0);
    });
    //Other alam levels
    globalShortcut.register('1',() => { 
        mainWindow.webContents.send('trigger', 1);
    });
    globalShortcut.register('2',() => { 
        mainWindow.webContents.send('trigger', 2);
    });
    globalShortcut.register('3',() => { 
        mainWindow.webContents.send('trigger', 3);
    });
    globalShortcut.register('4',() => { 
        mainWindow.webContents.send('trigger', 4);
    });
    globalShortcut.register('5',() => { 
        mainWindow.webContents.send('trigger', 5);
    });
    globalShortcut.register('6',() => { 
        mainWindow.webContents.send('trigger', 6);
    });
    globalShortcut.register('7',() => { 
        mainWindow.webContents.send('trigger', 7);
    });
    globalShortcut.register('8',() => { 
        mainWindow.webContents.send('trigger', 8);
    });
}