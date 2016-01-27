var socket = io.connect('http://localhost:3000');

socket.on('connected', reportarConexion);

socket.on('statusInfo', function (data){
		document.getElementById("statusInfo").textContent = data;
});

function reportarConexion() {
	document.getElementById ("statusInfo").textContent = ">> Connected to server";
	socket.emit('getListSerialPort');
}

socket.on('sendListSerialPort', function(data) {
	listing(data);
});

function listing(data) {
	var namePort = [];
	var tempCounter = 0;
	namePort[tempCounter] = "";
	for (var i = 0; i < (data.length-1); i++) {
		if (data[i] == '\n') {
			tempCounter ++
			namePort[tempCounter] = "";
		}
		else
			namePort[tempCounter] += data[i];
	};

	var	portPicker=document.getElementById('serialPort');

	for (var i = 0; i < namePort.length; i++) {
		var portOption = document.createElement('option');
		portOption.value = namePort[i];
		portOption.textContent = namePort[i];
		portPicker.appendChild(portOption);
		if(namePort[0] != "")
			socket.emit('connectOtherPort', namePort[0]);	
		portPicker.addEventListener('change', function(){
			selectingPort(portPicker);
		}, true);	
	};	
}

function selectingPort(portPicker){
	var selected = portPicker.options[portPicker.selectedIndex].value;
	socket.emit('connectOtherPort', selected);
}

socket.on('saveFile', function(data){
	var fileBlockly = [];
	var resultado = "";
	var lsData = "";
   	for (var i = 0; i < data.length; i++) {
		if (data[i] != '\n')
			lsData += data[i];
		else
			lsData += ',\t';
	};
	resultado =	window.prompt('Archivos existentes en el directorio ~/luabot/:\n' + lsData, nameFileBlockly);
	if( resultado != "") {
		var extension = false;
		var tempResultado = "";
		for (var i = 0; i < resultado.length; i++) {
			if (resultado[i] == ' ')
				tempResultado += '_';
			else
				tempResultado += resultado[i];
		};
		resultado = tempResultado;	
		for (var i = 0; i <resultado.length; i++) {
			if( resultado[i] == '.') {
				extension = true;
				break;
			}
		};
		if(extension == false)
			fileBlockly[0] = resultado + '.luabot';
		else
			fileBlockly[0] = resultado;
		var xml_blockly = Blockly.Xml.workspaceToDom(Code.workspace);
		fileBlockly[1] = Blockly.Xml.domToText(xml_blockly);
		nameFileBlockly = fileBlockly[0];	// se guardará el nombre del archivo
		socket.emit('saveProject', fileBlockly);
	}
});

function saveFile() {
	socket.emit('list');
}

function upload() {
	var result = window.prompt('Tenga en cuenta que si un programa no funciona correctamente puede generarle problemas que LuaBot NO sea capaz de solucionar.\n\nAsegúrese que funciona bien ejecutando primero el programa con el botón RUN (cohete).\n\n¿Desea subir el programa al init.lua del ESP? Si/No','si');
	if (result == "si" || result == "yes" || result == "Si" || result == "Yes" || result == "SI" || result == "YES"){
		var code = Blockly.Lua.workspaceToCode(Code.workspace);
		socket.emit('upload', code);  
		document.getElementById('statusInfo').innerText = ">> UpLoad esp8266";
	}
}

function run() {
	var code = Blockly.Lua.workspaceToCode(Code.workspace);
	socket.emit('run', code);  
	document.getElementById('statusInfo').innerText = ">> Run esp8266";
}

/*
function play() {
	socket.emit('read'); 
	document.getElementById ("terminal0").value = "<< Send play";
}*/
