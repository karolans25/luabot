// Constructor de temporizador

// timer delay - microsegundos
// Detiene la ejecución del programa
Blockly.Blocks['timer_delay_micro'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Detener todo durante (us): ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_delay_micro'] = function(block) {
  var value_delay = Blockly.Lua.valueToCode(block, 'delay', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.delay(' + value_delay + ')\n';
  return code;
};



// timer delay - milisegundos
// Detiene la ejecución del programa
Blockly.Blocks['timer_delay_mili'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Detener todo durante (ms): ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_delay_mili'] = function(block) {
  var value_delay = Blockly.Lua.valueToCode(block, 'delay', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.delay(' + 1000*value_delay + ')\n';
  return code;
};



// timer delay - segundos
// Detiene la ejecución del programa
Blockly.Blocks['timer_delay_seg'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Detener todo durante (s): ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_delay_seg'] = function(block) {
  var value_delay = Blockly.Lua.valueToCode(block, 'delay', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.delay(' + 1000000*value_delay + ')\n';
  return code;
};



// timer alarm
// Temporiza con un contador
Blockly.Blocks['timer_alarm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Alarma_0", "0"], ["Alarma_1", "1"], ["Alarma_2", "2"], ["Alarma_3", "3"], ["Alarma_4", "4"], ["Alarma_5", "5"], ["Alarma_6", "6"]]), "id_opt");
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Esperar para activar (ms):");
    this.appendStatementInput("do")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Repetir alarma")
        .appendField(new Blockly.FieldDropdown([["Si", "1"], ["No", "0"]]), "repeat_opt");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_alarm'] = function(block) {
  var dropdown_id_opt = block.getFieldValue('id_opt');
  var value_delay = Blockly.Lua.valueToCode(block, 'delay', Blockly.Lua.ORDER_ATOMIC);
  var statements_do = Blockly.Lua.statementToCode(block, 'do');
  var dropdown_repeat_opt = block.getFieldValue('repeat_opt');
  // TODO: Assemble Lua into code variable.
  // var code = 'tmr.alarm(' + value_id + ', ' + value_delay + ', ' + value_repeat + ', function()\n  ' + statements_do + '\n' + 'end )\n';
  var code = 'tmr.alarm(' + dropdown_id_opt + ', ' + value_delay + ', ' + dropdown_repeat_opt + ', ' + 'function()\n' + statements_do + 'end )';
  return code;
};



// timer stop 
// Detiene la alarma según el id
Blockly.Blocks['timer_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Detener");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Alarma_0", "0"], ["Alarma_1", "1"], ["Alarma_2", "2"], ["Alarma_3", "3"], ["Alarma_4", "4"], ["Alarma_5", "5"], ["Alarma_6", "6"]]), "id_opt");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};  

Blockly.Lua['timer_stop'] = function(block) {
  var dropdown_id_opt = block.getFieldValue('id_opt');
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.stop(' + dropdown_id_opt + ')\n';
  return code;
};
