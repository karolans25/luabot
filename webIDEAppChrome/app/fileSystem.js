/************************************************************
 * 					BEGIN Save File As
 ************************************************************/
/*
 *
 * */

var error = '';
var fileEntry ;
var gotWritable = false;

// Función que muestra respuestas de tareas realizadas
function printDialog(message, title) {
		jAlert(message, title, function() {});
}

function saveAs(fileToSave) {
	chrome.fileSystem.chooseEntry({type: 'saveFile'}, function(entry) {
		if (chrome.runtime.lastError) {
			showError(chrome.runtime.lastError.message);
			return;
		}
		clearError();
		setEntry(entry, true);
		saveToEntry(fileToSave);
	});
}

// Función que devuelve un diálogo cuando por ejemplo se cancela 
// el guardado de un archivo
function showError(anError) {
	   var errorEl = error;
	   errorEl.innerHTML = anError;
	   console.log('Acción cancelada.');
}

// Inicializa y muestra que en efecto no hay errores
function clearError() {
	console.log('none error');
	// Modo de prueba 
	// console.log(fileEntry);
}

function setEntry(anEntry, isWritable, name) {
	fileEntry = anEntry;
	gotWritable = isWritable;
	updatePath();
}

function updatePath() {
	if (fileEntry) {
			chrome.fileSystem.getDisplayPath(fileEntry, updatePath);
	} else {
			updatePathTo('[new file]');
	}
}

function updatePathTo(aPath) {
		var pathDisplay = aPath;
		printDialog(pathDisplay, 'path');
}

function saveToEntry(fileToSave) {
	fileEntry.createWriter(function(fileWriter) {
		fileWriter.onwriteend = function(e) {
			if (this.error) {
			gStatusEl.innerHTML ='Error durante escritura: ' + this.error.toString();
			}else{
				clearError();
			}
		};
		var blob = new Blob([fileToSave], {type: 'text/plain'});
		fileWriter.write(blob);
		informarEstado("Se ha guardado el proyecto");
	});
}

/***********************************************************
 * 					END Save File As
 * *******************************************************/

/***********************************************************
 * 					BEGIN Save File
 * ********************************************************
 *
 */

function saveFile(fileToSave){
	if (gotWritable) {
		saveToEntry(fileToSave);
	} else if (fileEntry) {
		chrome.fileSystem.getWritableEntry(fileEntry, function(entry) {
			if (chrome.runtime.lastError) {
				showError(chrome.runtime.lastError.message);
			return;
			}
			clearError();
			setEntry(entry, true);
			saveToEntry(fileToSave);
		});
	} else {
		saveAs(fileToSave);
	}
}

/***********************************************************
 * 					END Save File
 * ********************************************************/

/**********************************************************
 * 					BEGIN Open File
 * *********************************************************
 * 
 * Callback de Open File permite almacenar la información
 * capturada del string. Solo se debe cambiar.
 *
 */

var callbackOpenFile = function(string) {};

function openFile() {
	chrome.fileSystem.chooseEntry(function (entry) {
		if (chrome.runtime.lastError) {
			showError(chrome.runtime.lastError.message);
			return;
		}
		clearError();
		setEntry(entry, false);
		replaceDocContentsFromFileEntry();
	});
}

function replaceDocContentsFromFileEntry() {
	fileEntry.file(replaceDocContentsFromFile);
}

function replaceDocContentsFromFile(file) {
	if (window.FileReader) {
		var reader = new FileReader();
		reader.onload = function() {
			replaceDocContentsFromString(reader.result);
		};
		reader.readAsText(file);
	}
}

function replaceDocContentsFromString(string) {
	callbackOpenFile(string);
}

/**********************************************************
 * 					END Open File
 * *******************************************************/
