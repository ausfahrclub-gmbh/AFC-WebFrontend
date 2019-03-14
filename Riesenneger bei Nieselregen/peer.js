p2pChannel.initChannel();


// Main Initiatior for Peer Channel
p2pChannel.addClient({window: windowA, name: 'windowA'});
p2pChannel.addClient({window: windowB, name: 'windowB'});
p2pChannel.addClient({window: windowC, name: 'windowC'});
p2pChannel.addClient({window: windowC, name: 'windowD'});


//#region Sender
const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowA = new WindowPeerConnection('windowA');
windowA.attachStream(stream);
windowA.sendStream('windowB');
windowA.sendStream('windowC');
windowA.sendStream('windowD');



const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowA = new WindowPeerConnection('windowB');
windowA.attachStream(stream);
windowA.sendStream('windowA');
windowA.sendStream('windowC');
windowA.sendStream('windowD');



const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowA = new WindowPeerConnection('windowC');
windowA.attachStream(stream);
windowA.sendStream('windowA');
windowA.sendStream('windowB');
windowA.sendStream('windowD');

const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowA = new WindowPeerConnection('windowD');
windowA.attachStream(stream);
windowA.sendStream('windowA');
windowA.sendStream('windowB');
windowA.sendStream('windowC');

//#endregion Sender




//#region Receiver 
const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowB = new WindowPeerConnection('windowA');
windowB.onReceivedStream(function (stream) {    
    video.srcObject = stream;
});

const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowB = new WindowPeerConnection('windowB');
windowB.onReceivedStream(function (stream) {    
    video.srcObject = stream;
});

const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowB = new WindowPeerConnection('windowC');
windowB.onReceivedStream(function (stream) {    
    video.srcObject = stream;
});

const WindowPeerConnection = require("electron-peer-connection").WindowPeerConnection;
let windowB = new WindowPeerConnection('windowD');
windowB.onReceivedStream(function (stream) {    
    video.srcObject = stream;
});
//#endregion Receiver