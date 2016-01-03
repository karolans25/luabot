Blockly.Blocks['gpio_mode'] = {
  init: function() {
    this.appendValueInput("gpio")
        .setCheck(["Number", "String"])
        .appendField("Pin");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Entrada", "OUTPUT"], ["Salida", "INPUT"]]), "gpio_set");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['gpio_mode'] = function(block) {
  var value_gpio = Blockly.Lua.valueToCode(block, 'gpio', Blockly.Lua.ORDER_ATOMIC);
  var dropdown_gpio_set = block.getFieldValue('gpio_set');
  // TODO: Assemble Lua into code variable.
  var code = 'gpio.mode(' + value_gpio + ', gpio.' + dropdown_gpio_set + ');';
  return code;
};
