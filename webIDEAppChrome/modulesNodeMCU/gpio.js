Blockly.Blocks['gpio_mode'] = {
  init: function() {
    this.appendValueInput("gpio")
        .setCheck(["Number", "String"])
        .appendField("Modo Pin");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Entrada", "INPUT"], ["Salida", "OUTPUT"]]), "gpio_set");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['gpio_mode'] = function(block) {
  var value_gpio = Blockly.Lua.valueToCode(block, 'gpio', Blockly.Lua.ORDER_ATOMIC);
  var dropdown_gpio_set = block.getFieldValue('gpio_set');
  // TODO: Assemble Lua into code variable.
  var code = 'gpio.mode(' + value_gpio + ', gpio.' + dropdown_gpio_set + ');\n';
  return code;
};


// Write gpio
Blockly.Blocks['gpio_write'] = {
  init: function() {
    this.appendValueInput("gpio")
        .setCheck("Number")
        .appendField("Escribir Pin");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ALTO", "gpio.HIGH"], ["BAJO", "gpio.LOW"],
        ["Encendido", "gpio.HIGH"], ["Apagado", "gpio.LOW"],
        ["1", "gpio.HIGH"], ["0", "gpio.LOW"],
        ["ON", "gpio.HIGH"], ["OFF", "gpio.LOW"]]), "state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['gpio_write'] = function(block) {
  var value_gpio = Blockly.Lua.valueToCode(block, 'gpio', Blockly.Lua.ORDER_ATOMIC);
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Lua into code variable.
  var code = 'gpio.write(' + value_gpio + ', ' + dropdown_state + ')\n';
  return code;
};


// gpio_Read
Blockly.Blocks['gpio_read'] = {
  init: function() {
    this.appendValueInput("gpio")
        .setCheck("Number")
        .appendField("Leer Pin");
    this.setInputsInline(true);
	this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['gpio_read'] = function(block) {
  var value_gpio = Blockly.Lua.valueToCode(block, 'gpio', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'gpio.read('+ value_gpio + ')';
  return [code, Blockly.Lua.ORDER_NONE];
};

// Toggle gpio
Blockly.Blocks['gpio_toggle'] = {
  init: function() {
    this.appendValueInput("gpio")
        .setCheck("Number")
        .appendField("Intercambiar Estado");
    this.setInputsInline(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['gpio_toggle'] = function(block) {
  var value_gpio = Blockly.JavaScript.valueToCode(block, 'gpio', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};
