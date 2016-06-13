Blockly.Blocks['adc_reader'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Conversor ADC");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['adc_reader'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'adc.read(0)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};