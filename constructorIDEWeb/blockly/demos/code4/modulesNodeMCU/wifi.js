// Modo de Wifi

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
  var code = 'wifi.setmode(' + dropdown_modo + ');\n';
  return code;
};


// Acces Point
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

