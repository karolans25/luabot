//############################################################
//				BEGIN SERIAL
//############################################################

Blockly.Blocks['uart_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Comunicación Serial ");
    this.appendDummyInput()
        .appendField("Baud Rate")
        .appendField(new Blockly.FieldDropdown([["9600", "9600"], ["115200", "115200"], ["460800", "46800"]]), "rate");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['uart_setup'] = function(block) {
  var dropdown_rate = block.getFieldValue('rate');
  // TODO: Assemble Lua into code variable.
  //uart.setup(0,115200,8,0,1,1)
  var code = 'uart.setup(0,' + dropdown_rate + 	',8,0,1,1)\n';
  return code;
};

//############################################################
Blockly.Blocks['uart_write'] = {
  init: function() {
    this.appendValueInput("data_to_send")
        .setCheck(["Number", "String"])
        .appendField("Escribir a UART");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['uart_write'] = function(block) {
  var value_data_to_send = Blockly.Lua.valueToCode(block, 'data_to_send', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'uart.write(0,'+value_data_to_send+')\n';
  return code;
};

//

Blockly.Blocks['uart_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leer desde UART");
    this.appendValueInput("limite")
        .setCheck(["Number", "String"])
        .appendField("# caracteres para leer");
    this.appendValueInput("variable")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Guardar en");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['uart_read'] = function(block) {
  var value_limite = Blockly.Lua.valueToCode(block, 'limite', Blockly.Lua.ORDER_ATOMIC);
  var value_variable = Blockly.Lua.valueToCode(block, 'variable', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'uart.on("data",'+value_limite+',\n'+
	'function(data)\n'+
	value_variable+'=data\n'+
	'end,0)\n';
  return code;
};

