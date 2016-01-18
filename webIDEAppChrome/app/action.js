/* El uso de la programación orientada a eventos para app google-chrome
 * cambia significativamente con respecto a html5. En el caso de los 
 * eventos acepta la fotma escrita aquí abajo.
 *
 * document.addEventListener('DOMContentLoaded', function () {
 * document.getElementById('miEvento').addEventListener('click', miFuncion);
 * });
 *
 * Así pues un evento click en un boton con id miEvento llamará una función
 * con el nombre miFuncion
 */

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('saveFile').addEventListener('click', saveFile);
	document.getElementById('playProgram').addEventListener('click', runProgram);
});

function reportarConexion() {
	document.getElementById("terminal0").value = ">> Connected to server";
}

function saveFile() {
	var code = Blockly.Lua.workspaceToCode(Code.workspace);
//	socket.emit('save', code); 
	document.getElementById ("terminal0").value = "<< save data";
}

function upload() {
	socket.emit('upload'); 
	document.getElementById ("terminal0").value = ">> UpLoad esp8266";
}

function runProgram() {
	// Funcon llamada desde serial.js
	writeSerial("musica");
}

/*
function play() {
	socket.emit('read'); 
	document.getElementById ("terminal0").value = "<< Send play";
}*/
