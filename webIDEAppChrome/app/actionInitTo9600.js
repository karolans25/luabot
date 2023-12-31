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
	// Botón con Id saveFileAs lanza por click la función saveFile()
	document.getElementById('saveFileAs').addEventListener('click', blockly_saveAs);
	// Botón con Id saveFile lanza por click la función blockly_saveAs()
	document.getElementById('saveFile').addEventListener('click', blockly_save);
	// Botón con Id openFile lanza por click la función blockly_open()
	document.getElementById('openFile').addEventListener('click', blockly_open);
	// Botón con Id openFile lanza por click la función blockly_open()
	document.getElementById('loadBlock').addEventListener('click', blockly_load);
	// Botón con Id playProgram lanza por click la función runProgram()
	document.getElementById('playProgram').addEventListener('click', runProgram);
	// Botón con Id upload lanza por click la función runProgram()
	document.getElementById('upload').addEventListener('click', upload);
	document.getElementById('imageCard').addEventListener('click', launchCard);	
	document.getElementById('trashButton').addEventListener('click', clear);

document.getElementById('specialFunction').addEventListener('change', function(){
	var optionSelected = document.getElementById('specialFunction').options[document.getElementById('specialFunction').selectedIndex].value;
	executeOption(optionSelected);
}, true);
});

/******************************************************
 * 				BEGIN SPECIAL FUNCTION
 * **************************************************/
function executeOption(optionSelected){
	if (optionSelected == "normalMode") 
			informarEstado("Función en modo normal");
	else if	(optionSelected == "doFileInit") 
			specialSend('dofile("init.lua")', 'Guión init.lua ejecutandose en el interprete del ESP');
	else if (optionSelected == "doFileRun") 
			specialSend('dofile("run.lua")', 'Guión run.lua ejecutandose en el interprete del ESP');
	else if (optionSelected == "nodeRestart")
			specialSend('node.restart()', 'Reiniciando el ESP');
	else if (optionSelected == "fileFormat")
			specialSend('file.format()', 'Borrado y formateo de memoria del ESP');

	function specialSend(data, message){
		var temp_code_blockly = ';\n' + data ;
		code_blockly = temp_code_blockly.split('\n');
		counter_code = 0;
		send_code = true;
		serialMessage = message;
		writeSerial(code_blockly[counter_code] + '\n');
	}
}
	
/****************************************************
 * 			END SPECIAL FUNCTION
 * **************************************************/

function buttonRunInfo(){
	informarEstado('RUN: Corre el programa en el interprete del ESP');
}


function informarEstado(info){	
	var time =new Date();
	document.getElementById('statusInfo__').textContent='<<'+ time.getHours() + ':'+ time.getMinutes() + '"' + time.getSeconds() + ':$ '+ info + '>>';	
}

function clear() {
	
	jPrompt('¿Desea borrar los bloques? Si/No','si', 'Borrar Bloques', function(result){
			if (result == "si" || result == "yes" || result == "Si" || result == "Yes" || result == "SI" || result == "YES")
				Code.workspace.clear();
	});
}

function reportarConexion() {
	document.getElementById("terminal0").value = ">> Connected to server";
}

function blockly_save(){
	var xml_blockly = Blockly.Xml.workspaceToDom(Code.workspace);
	var text_blockly = Blockly.Xml.domToText(xml_blockly);
	saveFile(text_blockly);
}

function blockly_saveAs(){
	var xml_blockly = Blockly.Xml.workspaceToDom(Code.workspace);
	var text_blockly = Blockly.Xml.domToText(xml_blockly);
	saveAs(text_blockly);
}

function blockly_open() {
	// Callback de Open File cambiado para limpiar el workspace 	
	callbackOpenFile = function(string) {
		var text_blockly = string;
		var xml_blockly = Blockly.Xml.textToDom(text_blockly);
		// Limpia el workspace
		Code.workspace.clear();
		Blockly.Xml.domToWorkspace(Code.workspace, xml_blockly);
	}
	// Con las instrucciones entregadas al callback 
	// se lanza la función de openFile	
	openFile();
}

function blockly_load() {
	// Callback de Open File cambiado para limpiar el workspace 	
	callbackOpenFile = function(string) {
		var text_blockly = string;
		var xml_blockly = Blockly.Xml.textToDom(text_blockly);
		Blockly.Xml.domToWorkspace(Code.workspace, xml_blockly);
	}
	// Con las instrucciones entregadas al callback 
	// se lanza la función de openFile	
	openFile();
}

function upload() {
	//document.getElementById ("terminal0").value = ">> UpLoad esp8266";
	//document.getElementById('labelVariable').innerText = "prueba";		
	jPrompt('Tenga en cuenta que si un programa no funciona correctamente puede generarle problemas que LuaBot NO sea capaz de solucionar.\n\nAsegúrese que funciona bien ejecutando primero el programa con el botón RUN (cohete).\n\n¿Desea subir el programa al init.lua del ESP? Si/No','si', 'Upload init.lua', function(result){
		if (result == "si" || result == "yes" || result == "Si" || result == "Yes" || result == "SI" || result == "YES"){
			
			var temp_1 = '';
			var temp_2 = '';
	
			var temp_code_blockly = Blockly.Lua.workspaceToCode(Code.workspace);

			for (var i = 0; i < temp_code_blockly.length; i++) {
				if ((temp_1 != '') || (temp_code_blockly[i] != ' ')){
					if (temp_code_blockly[i] != '\n')
						temp_1+= temp_code_blockly[i];
					else{
						temp_2 += 'file.writeline([[' + temp_1 + ']])\n';
						temp_1 = '';
					}
				}
			};
			temp_1 =	'file.remove("init.lua")\n'+
						'file.open("init.lua", "w")\n'+
						'file.writeline([[print(1)]])\n'+
						'file.close()\n'+
						'file.open("init.lua", "w+")\n'+
						temp_2 +
						'file.close()\n';
						//'node.restart(); // podría ser agregado a temp_1 si
						//se quiere que depues de guardar el init.lua sea ejecutado
						//de inmediato. también es posible hace uso del comando
						// dofile("init.lua"); para ejecutarlo de una vez
			//console.log(code_blockly);
			//console.log(temp_1);
			temp_code_blockly = ';\n' + temp_1;				// Preparando código para enviar serialmente
			send_code = true;							// Habilitar envío de código
			counter_code = 0;							// Inicializar de código
			code_blockly = temp_code_blockly.split('\n'); // split del string
			writeSerial(code_blockly[counter_code] + '\n');	// Inicializar arranque de envío
			serialMessage = 'Programa guardado en el esp8266 como init.lua';
		} else
			informarEstado('Se cancela subir el init.lua a ESP');
	});
}


function runProgram() {
	// Funcon llamada e serial.js
	var temp_code_blockly = ';\n' + Blockly.Lua.workspaceToCode(Code.workspace);
	
	code_blockly = temp_code_blockly.split('\n');

	console.log(code_blockly.length);
	//console.log("Codigo de blockly \n " + code_blockly[1]);
	
	// Se aprueba el envío de código por el puerto serial.
	send_code = true;
	counter_code = 0;
	writeSerial(code_blockly[counter_code] + '\n');
	// Mensaje que será mostrado como confirmación de envío de codigo al nodeMCU
	// por el puerto serial.
	serialMessage = 'Programa cargado en el interprete Lua de nodeMCU';
}

var str2array = function(str){
	var array = new Array(str.length);
	for (var i = 0; i < array.length; i++) {
		array[i] = str[i];
	}
	//console.log(array);
	return array;
}
/****************************************************************
 * 			IMAGE LAUNCH
***************************************************************/

function launchCard(){
		chrome.app.window.create('imageCard.html');
}	   

/*
function play() {
	socket.emit('read'); 
	document.getElementById ("terminal0").value = "<< Send play";
}*/
