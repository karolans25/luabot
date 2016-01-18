var connectionId = -1;

/*****************************************
 * 			Envio de Datos 
 *****************************************/

var writeSerial=function(str) {
  chrome.serial.send(connectionId, convertStringToArrayBuffer(str), function() {});
}
// Convert string to ArrayBuffer
var convertStringToArrayBuffer=function(str) {
  var buf=new ArrayBuffer(str.length);
  var bufView=new Uint8Array(buf);
  for (var i=0; i<str.length; i++) {
    bufView[i]=str.charCodeAt(i);
  }
  return buf;
}
/****************************************
 * Para llamar la función se hace como sigue
 * writeSerial(string), donde string es la 
 * variable a enviar 
 * */

function setPosition(position) {
  var buffer = new ArrayBuffer(1);
  var uint8View = new Uint8Array(buffer);
  uint8View[0] = '0'.charCodeAt(0) + position;
  chrome.serial.send(connectionId, buffer, function() {});
};

function onReceive(receiveInfo) {
  if (receiveInfo.connectionId !== connectionId)
    return;

  var uint8View = new Uint8Array(receiveInfo.data);
  var value = uint8View[uint8View.length - 1] - '0'.charCodeAt(0);
  var rotation = value * 18.0;
  document.getElementById('image').style.webkitTransform =
    'rotateZ(' + rotation + 'deg)';
};

function onError(errorInfo) {
  console.warn("Receive error on serial connection: " + errorInfo.error);
};

chrome.serial.onReceive.addListener(onReceive);
chrome.serial.onReceiveError.addListener(onError);

function onOpen(connectionInfo) {
  if (!connectionInfo) {
    setStatus('Could not open');
    return;
  }
  connectionId = connectionInfo.connectionId;
  setStatus('Connected');
  setPosition(0);
};

function setStatus(status) {
  document.getElementById('status').innerText = status;
}

function buildPortPicker(ports) {
  var eligiblePorts = ports.filter(function(port) {
    return !port.path.match(/[Bb]luetooth/);
  });

  var portPicker = document.getElementById('port-picker');
  eligiblePorts.forEach(function(port) {
    var portOption = document.createElement('option');
    portOption.value = portOption.innerText = port.path;
    portPicker.appendChild(portOption);
  });

  portPicker.onchange = function() {
    if (connectionId != -1) {
      chrome.serial.disconnect(connectionId, openSelectedPort);
      return;
    }
    openSelectedPort();
  };
}

function openSelectedPort() {
  var portPicker = document.getElementById('port-picker');
  var selectedPort = portPicker.options[portPicker.selectedIndex].value;
  chrome.serial.connect(selectedPort, onOpen);
}

onload = function() {
  chrome.serial.getDevices(function(ports) {
    buildPortPicker(ports)
    openSelectedPort();
  });
};
