// Constructor de temporizador
Blockly.Blocks['timer_delay'] = {
  init: function() {
    this.appendValueInput("timer")
        .setCheck("Number")
        .appendField("demora");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// Se especifica lo que hace el timer
Blockly.Lua['timer_delay'] = function(block) {
  var value_timer = Blockly.Lua.valueToCode(block, 'timer', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.delay(' + value_timer + ')\n';
  return code;
};
