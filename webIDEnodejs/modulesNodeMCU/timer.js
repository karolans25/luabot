Blockly.Blocks['timer_delay'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Detener todo durante");
    this.appendDummyInput()
        .appendField("microsegundos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_delay'] = function(block) {
  var value_delay = Blockly.Lua.valueToCode(block, 'delay', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.delay(' + value_delay + ')\n';
  return code;
};



Blockly.Blocks['timer_alarm'] = {
  init: function() {
    this.appendValueInput("time_alarm")
        .setCheck("Number")
        .appendField("Alarma número")
        .appendField(new Blockly.FieldDropdown([["0", "alarm_0"], ["1", "alarm_1"], ["2", "alarm_2"], ["3", "alarm_3"], ["4", "alarm_4"], ["5", "alarm_5"], ["6", "alarm_6"]]), "id_alarmer")
        .appendField("Esperar ");
    this.appendDummyInput()
        .appendField("milisegundos para activar la alarma.");
    this.appendStatementInput("alarm")
        .setCheck(null)
        .appendField("Si se activa la alarma hacer:");
    this.appendDummyInput()
        .appendField("Repetir alarma (0: no, 1: si)")
        .appendField(new Blockly.FieldDropdown([["0", "alarm_0"], ["1", "alarm_1"]]), "repet_alarm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_alarm'] = function(block) {
  var dropdown_id_alarmer = block.getFieldValue('id_alarmer');
  var value_time_alarm = Blockly.Lua.valueToCode(block, 'time_alarm', Blockly.Lua.ORDER_ATOMIC);
  var statements_alarm = Blockly.Lua.statementToCode(block, 'alarm');
  var dropdown_repet_alarm = block.getFieldValue('repet_alarm');
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.alarm(' + dropdown_id_alarmer + ', ' + value_time_alarm + ', ' + dropdown_repet_alarm + ', ' + statements_alarm + ')\n';
  return code;
};



Blockly.Blocks['timer_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Detener la alarma número")
        .appendField(new Blockly.FieldDropdown([["0", "alarm_0"], ["1", "alarm_1"], ["2", "alarm_2"], ["3", "alarm_3"], ["4", "alarm_4"], ["5", "alarm_5"], ["6", "alarm_6"]]), "id_alarmer");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Lua['timer_stop'] = function(block) {
  var dropdown_id_alarmer = block.getFieldValue('id_alarmer');
  // TODO: Assemble Lua into code variable.
  'tmr.stop(' + dropdown_id_alarmer + ')\n';
  return code;
};