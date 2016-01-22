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
document.getElementById('prueba').addEventListener('click', miFuncion);
});

function miFuncion() {

	var temp;
	var referenciada;

	function callback_0(r) {
		if (r == 'Prefilled value') {
			return temp;
		}
		else{
			return r;
		}
	}

	referenciada = function (text){
		temp = text;
		jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r){
			referenciada = callback_0(r);
		} );
	};

	document.getElementById("terminal0").value = referenciada("salida");

	/*var y = "nada";
	jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
	
		function primera(){
			var x = "respuesta: ";
			x = x + r;
			return x;
		}
		y = primera();
		console.log(y);
	});*/


		//jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
	//document.getElementById ("terminal0").value = miVariable;});
	//var miVariable = function(r){
	//	return r=3;
	//};
	//console.log(miVariable(3));
	//document.getElementById ("terminal0").value = miVariable;
}


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
	var code = Blockly.Lua.workspaceToCode(Code.workspace);
	writeSerial(code);
}

/*
function play() {
	socket.emit('read'); 
	document.getElementById ("terminal0").value = "<< Send play";
}*/
