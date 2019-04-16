const electron = require('electron');
const url = require('url');
const path = require('path');

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

    mainWindow.on('closed', function() {
        app.quit();
    });

    registerShortcuts();
});


/*  Default alarm shortcut config:
    F4  - Alarm 0 (abort)
    1-8 - Alarm 1-8             
*/
function registerShortcuts() {

    globalShortcut.register('F4',() => { 
        mainWindow.webContents.send('trigger', 0);
    });
    globalShortcut.register('F7',() => { 
        mainWindow.webContents.send('trigger', 73);
    });

    for (let i = 1; i < 9; i++) {
        globalShortcut.register(i.toString(),() => { 
            mainWindow.webContents.send('trigger', i);
        });
    };
}