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

var counter_code = 0;	// Contador para el string del code a enviar
var code_blockly= "";	// Codigo recibido por parte de blockly
var send_code = false;	// Aprobacion de envio de codigo

function runProgram() {
	// Funcon llamada e serial.js
	code_blockly = ';\n' + Blockly.Lua.workspaceToCode(Code.workspace);
	//console.log("Codigo de blockly \n " + code_blockly);
	//console.log("longitude de code_blockly: ");
	console.log(code_blockly.length);
	send_code = true;
	counter_code = 0;
	writeSerial(code_blockly[counter_code]);
}

var str2array = function(str){
	var array = new Array(str.length);
	for (var i = 0; i < array.length; i++) {
		array[i] = str[i];
	}
	//console.log(array);
	return array;
}

/*
function play() {
	socket.emit('read'); 
	document.getElementById ("terminal0").value = "<< Send play";
}*/
