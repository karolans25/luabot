var socket = io.connect('http://localhost:3000');

socket.on('connected', reportarConexion);

function reportarConexion() {
	document.getElementById("terminal0").value = ">> Connected to server";
}

function saveFile() {
	var code = Blockly.Lua.workspaceToCode(Code.workspace);
	socket.emit('save', code); 
	document.getElementById ("terminal0").value = "<< save data";
}

function upload() {
	socket.emit('upload'); 
	document.getElementById ("terminal0").value = ">> UpLoad esp8266";
}

/*
function play() {
	socket.emit('read'); 
	document.getElementById ("terminal0").value = "<< Send play";
}*/
