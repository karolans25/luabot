var connectionId = -1;

/**************************************
 * Buffer a string
 * ***********************************/

/* Interprets an ArrayBuffer as UTF-8 encoded string data. */
var ab2str = function(buf) {
  var bufView = new Uint8Array(buf);
  var encodedString = String.fromCharCode.apply(null, bufView);
  return decodeURIComponent(escape(encodedString));
};


/**************************************
 *	Read port
 * ************************************/

var stringReceived = '';
var str_before = "";
var onReceiveCallback = function(info) {
	if ( info.connectionId && info.data) {
		var str = ab2str(info.data);
		if (str.charAt(str.length-1) === '\n') {
		 	stringReceived += str.substring(0, str.length-1);
			//onLineReceived(stringReceived);
			stringReceived = '';
		} else {
			var str_1 = str[str.length-1];
			stringReceived += str;
			// Muestra lo que recibe
			// console.log("recibiendo: " + str_1);
			
			if ((str_1 == '\n') || (counter_code >= code_blockly.length)){
				send_code = false;
			}
			if((send_code == true) && (str == code_blockly[counter_code])){
				counter_code ++;
				if(counter_code < code_blockly.length){
					writeSerial(code_blockly[counter_code]);
				}
				else{
					send_code = false;
				}				
			}else if ('> ' == (str_before + str_1)) {
				send_code = true;
				counter_code ++ ;
				if(counter_code < code_blockly.length){
					writeSerial(code_blockly[counter_code]);
					//console.log(str_before + str_1);
				}
				else{
					send_code = false;
				}
			};
			console.log(str_before + str_1);
			str_before = str_1;
		}
	}
	//console.log(stringReceived);
};

//var readSerial =  function(){
//	chrome.serial.onReceive.addListener(onReceiveCallback);
//}

/***************************************
 * 		Replace charInString
 ***************************************/

/*
 *  replaceCharInString(char_replace, char_new, string_);
 *
 *  Esta función cambia en un string las coincidencias de un caracter las 
 *  veces que exista.
 *
 *  Esta función verifica que ingrese valores correctos de lo contrario retorna
 *  el string sin realizarle algún cambio.
 *
 * 	Fue construida con el fin de replazar el caracter especial (nl) newline (10) 
 * 	que genera blockly por el caracter especia (cr) carriage return (13)
 *
 * */
var replaceCharInString = function(char_replace, char_new , string_){
	// Se verifica que el tercer parámetro sea de tipo string
	if (typeof(string_) != "string"){
		console.log("El tercer parametro ingresado en replaceCharInString() es de tipo " + typeof(string_) + ". Debe ser de tipo string.");
		return string_;
	}
	// Verificación de primer y segundo parámetro sea un número entre 0 a 256
	if (((char_replace > -1) && (char_replace < 256)) && ((char_new > -1) && (char_new < 256))){
		var stringReplaced = "";
		var replace_confirm = 0;
		// Se recorrerá el string buscando conincidencia para reemplazar
		for (var i = 0; i < string_.length; i++) {	
			if (string_.charCodeAt(i) == char_replace){
				stringReplaced = stringReplaced + String.fromCharCode(char_new) + String.fromCharCode(char_replace);
				// Se contará el número de remplazos en el string_
				replace_confirm ++ ;
			}else{
				// Alamacenará los demás caracteres en la cadena que no son 
				// reemplazados
				stringReplaced = stringReplaced + String.fromCharCode(string_.charCodeAt(i));
			}
		}
		//Muestra en consola el número de reemplazos
		console.log("Fue reemplazada " + replace_confirm + " veces !!!");
		// Se retorna la cadena
		return stringReplaced;
	}else {
			// Reporte de incumplimiento de tipo de parametros.
			// Se retorna la cadena sin ningún cambio.
			console.log("Tanto el primer como el segundo parametro en replaceCharInString() debe ser un entero entre 0 a 255");
			console.log("No se reemplazara nada!");
			return string_;
	}
}
/***************************************
 * replaceCharOnString(Char_a_cambiar, char_nueva, string )
 ************************************* */
	


/*****************************************
 * 			Manejo de Cadenas			 *
 ****************************************/

var replaceCharOnString = function(str){
	console.log("Longitud del String: " + str.length);
	const nl = 0x0a;
	const cr = 0x0d;
	miArray = new Array(str.length);
//	miArray = new Uint8Array(str.length);
	console.log("Tamano Arreglo: " + miArray.length);
	for (var i = 0; i < str.length; i++) {
			miArray[i] = str[i];
	};
	//console.log(str);

	//miArray = convertStringToArrayBuffer(str);
	//console.log(miArray.length);
	for (var i = 0; i < miArray.length; i++){
			console.log(miArray[i] + '\n');
	}
	
	for (var i = 0; i < miArray.length; i++) {
		if (miArray[i] == '↵'){
				miArray[i] = cr;
				console.log("replace");
				console.log(miArray[i]);
		}
	};

	console.log("Print Array: ");
	console.log(miArray);
	console.log("Print Array as String: " + miArray.join(""));
	
	bufferArray = new Uint8Array(str.length);
	for (var i = 0; i < miArray.length; i++) {
		bufferArray[i] = str.charCodeAt(i);
		console.log(bufferArray[i] + "," + miArray[i]);
	};
	console.log("Print buffer: ");
	console.log(bufferArray.join());
//	chrome.serial.send(connectionId, bufferArray, function() {});
	
	for (var i = 0; i < bufferArray.length; i++) {
		if(bufferArray[i] == 10){
			bufferArray[i] = 13;
		}
	};
	console.log("Print Buffer modificado: ");
	console.log(bufferArray);

	var arrayFinal = new Array(bufferArray.length);

//	for (var i = 0; i < bufferArray.length; i++) {
//		var j = parseToChar(bufferArray[i]);
//		arrayFinal[i] = j;
//	};

	console.log("Print arrayFinal: ");
	console.log(arrayFinal);

	str = str.replace(/False/g, '\cd');
	console.log(str);

	for (var i = 0; i < miArray.length; i++) {
		bufferArray[i] = str.charCodeAt(i);
		console.log(bufferArray[i] + "," + str[i]);
	};

	var cadena = String.fromCharCode(65,66,67);
	console.log(cadena);
	cadena = cadena + String.fromCharCode(68);
	console.log(cadena);
}

/****************************************
 *
 *
 * *************************************/




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
  // Muestra los datos enviados
  //console.log("Enviando: " + str);
  return buf;
}
/********************************************
 * Para llamar la función se hace como sigue
 * writeSerial(string), donde string es la 
 * variable a enviar 
 ********************************************/

function setPosition(position) {
  var buffer = new ArrayBuffer(1);
  var uint8View = new Uint8Array(buffer);
  uint8View[0] = '0'.charCodeAt(0) + position;
  chrome.serial.send(connectionId, buffer, function() {});
};

/*function onReceive(receiveInfo) {
  if (receiveInfo.connectionId !== connectionId)
    return;

  var uint8View = new Uint8Array(receiveInfo.data);
  var value = uint8View[uint8View.length - 1] - '0'.charCodeAt(0);
  var rotation = value * 18.0;
  document.getElementById('image').style.webkitTransform =
    'rotateZ(' + rotation + 'deg)';
};*/

function onError(errorInfo) {
  console.warn("Receive error on serial connection: " + errorInfo.error);
};

chrome.serial.onReceive.addListener(onReceiveCallback);
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
