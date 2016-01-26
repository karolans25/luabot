// nameFileBlockly permite almacenar el nombre del archivo para 
// otras operaciones de lectura o de escritura
var nameFileBlockly = "";

/***************************************************************
 * 				BEGIN OPEN FILE
 * ***********************************************************/

var beginOpenFile = function () {
	var archives = document.getElementById('openFile');
	archives.addEventListener('change', computeOpenFile, false);
	clear_workSpace = true;
}

function computeOpenFile(e) {
	var archives = e.target.files;
	var archive = archives[0];
	nameFileBlockly = archive.name;
	var reader = new FileReader();
	reader.onload = load_File; 
	reader.readAsText(archive);
}

function load_File(e) {
	var result = e.target.result;
	var xml_blockly = Blockly.Xml.textToDom(result);
	Code.workspace.clear();
	Blockly.Xml.domToWorkspace(Code.workspace, xml_blockly);
}

// 					START 
window.addEventListener('load',	beginOpenFile, false);
/***************************************************************
 * 				END OPEN FILE
 * ***********************************************************/


/***************************************************************
 * 				BEGIN OPEN BLOCK
 * ***********************************************************/

var beginOpenBlock = function () {
	var archives = document.getElementById('openBlock');
	archives.addEventListener('change', computeOpenBlock, false);
	clear_workSpace = false;
}

function computeOpenBlock(e) {
	var archives = e.target.files;
	var archive = archives[0];
	var reader = new FileReader();
	reader.onload = load_FileBlockly; 
	reader.readAsText(archive);
}

function load_FileBlockly(e) {
	var result = e.target.result;
	var xml_blockly = Blockly.Xml.textToDom(result);
	Blockly.Xml.domToWorkspace(Code.workspace, xml_blockly);
}

// 					START 
window.addEventListener('load',	beginOpenBlock, false);
/***************************************************************
 * 				END OPEN BLOCK
 * ***********************************************************/
