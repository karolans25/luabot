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

var buffer_code;	// Buffer del string recibido desde code blockly
var counter_buffer = -1;	// Datos enviados

function runProgram() {
	// Funcon llamada e serial.js
	var code = Blockly.Lua.workspaceToCode(Code.workspace);
	console.log("Codigo de blockly \n " + code);
	buffer_code = str2array(code);
	console.log("Array buffer de code: ");
	console.log(buffer_code);
	counter_buffer = -1;
	console.log("Counter Inicial\n " + counter_buffer);

	//Sustituyendo newline (10) con carriage return (13)
	//var nl = 10;
	//var cr = 13;	
	//writeSerial('\n');
	//writeSerial('led = 2 \n');
	//writeSerial('gpio.write(led, gpio.HIGH)\n');
	//console.log("Antes de sustitucion: " + code);
	//code = replaceCharInString(nl, cr, code);
	//console.log("Despues de sustitucion: " + code);
	console.log("Enviando primer dato: " + buffer_code[counter_buffer + 1]);
	//writeSerial(buffer_code[counter_buffer]);
	writeSerial(';\n');
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
