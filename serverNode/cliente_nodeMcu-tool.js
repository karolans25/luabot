var socket = io.connect('http://localhost:3000');

socket.on('connected', reportarConexion);

function reportarConexion() {
	document.getElementById ("statusInfo").textContent = ">> Connected to server";
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
	var code = Blockly.Lua.workspaceToCode(Code.workspace);
	socket.emit('upload', code);  
	document.getElementById('statusInfo').innerText = ">> UpLoad esp8266";
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
