// Constructor de temporizador

// timer delay
// Detiene la ejecución del programa
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



// timer alarm
// Temporiza con un contador
Blockly.Blocks['timer_alarm'] = {
  init: function() {
    this.appendValueInput("id")
        .setCheck("Number")
        .appendField("Alarma número");
	
	this.appendValueInput("delay")
	    .setCheck("Number")
	    .appendField("Esperar para activar (milisegundos)")
	
	this.appendValueInput("repeat")
	    .setCheck("Number")
	    .appendField("Repetir alarma (0:no, 1:si)");
	
	this.appendStatementInput("do")
	    .setCheck(null)
	    .appendField("Cuando se activa hacer:");
	this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_alarm'] = function(block) {
  var value_id = Blockly.Lua.valueToCode(block, 'id', Blockly.Lua.ORDER_ATOMIC);
  var value_delay = Blockly.Lua.valueToCode(block, 'delay', Blockly.Lua.ORDER_ATOMIC);
  var value_repeat = Blockly.Lua.valueToCode(block, 'repeat', Blockly.Lua.ORDER_ATOMIC);
  var statements_do = Blockly.Lua.statementToCode(block, 'do');
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.alarm(' + value_id + ', ' + value_delay + ', ' + value_repeat + ', function() '
	+ statements_do
  + ' end )\n';	
  return code;
};



// timer stop 
// Detiene la alarma según el id
Blockly.Blocks['timer_stop'] = {
  init: function() {
    this.appendValueInput("id")
        .setCheck("Number")
        .appendField("Detener la alarma número")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_stop'] = function(block) {
  var value_id = Blockly.Lua.valueToCode(block, 'id', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tmr.stop(' + value_id + ')\n';
  return code;
};


Blockly.Blocks['timer_now'] = {
  init: function() {
	this.appendDummyInput()
	    .appendField("Imprimir el valor del contador (us)");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(65);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['timer_now'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'print(tmr.now())\n';
  return code;
};
