/*****************************************************************
 * 						BEGIN WIFI SET MODE
 * ***************************************************************/

Blockly.Blocks['wfi_set_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wifi en modo")
        .appendField(new Blockly.FieldDropdown([["Estacion", "wifi.STATION"], ["Punto de de Acceso", "wifi.SOFTAP"]]), "modo");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['wfi_set_mode'] = function(block) {
  var dropdown_modo = block.getFieldValue('modo');
  // TODO: Assemble Lua into code variable.
  var code = 'wifi.setmode(' + dropdown_modo + ')\n';
  return code;
};

/*****************************************************************
 * 					BEGIN ACCESS POINT CONFIG
 * ***************************************************************/

Blockly.Blocks['wifi_ap_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Punto de Acceso");
    this.appendDummyInput()
        .appendField("nombre")
        .appendField(new Blockly.FieldTextInput("Red"), "ssid")
        .appendField("pass")
        .appendField(new Blockly.FieldTextInput("password"), "password");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['wifi_ap_config'] = function(block) {
  var text_ssid = block.getFieldValue('ssid');
  var text_password = block.getFieldValue('password');
  // TODO: Assemble Lua into code variable.
  var code = 'wifi.ap.config({ssid="' + text_ssid + '", pwd="' + text_password + '"});\n';
  return code;
};

/*****************************************************************
 *    		BEGIN STATION CONFIG AND AUTOCONNECT
 * ***************************************************************/
Blockly.Blocks['wifi_sta_config'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField("Estación");
	this.appendDummyInput()
	    .appendField("nombre")
	    .appendField(new Blockly.FieldTextInput("Red"), "ssid")
	    .appendField("pass")
	    .appendField(new Blockly.FieldTextInput("password"), "password");
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(30);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['wifi_sta_config'] = function(block) {
  var text_ssid = block.getFieldValue('ssid');
  var text_password = block.getFieldValue('password');
  // TODO: Assemble Lua into code variable.
  var code = 'wifi.sta.config ("' + text_ssid + '", "' + text_password + '")\n' + 'wifi.sta.autoconnect(1)\n' + 'print(wifi.sta.getip())\n';
  return code;
};

/*****************************************************************
 * 				DISCONNECTING THE STATION
 * ***************************************************************/
Blockly.Blocks['wifi_sta_disconnect'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField("Desconectarse de la red");
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(30);
	this.setTooltip('');
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['wifi_sta_disconnect'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'wifi.sta.disconnect()\n';
  return code;
};
