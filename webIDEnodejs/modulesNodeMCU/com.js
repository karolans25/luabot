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
