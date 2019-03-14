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