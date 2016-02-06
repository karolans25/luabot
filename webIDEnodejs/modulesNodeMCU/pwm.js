/******************************************************************
 *               PWM SETUP
 *****************************************************************/
Blockly.Blocks['pwm_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["PWM_0", "0"], ["PWM_1", "1"], ["PWM_2", "2"]]), "id_opt");
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("En el pin:");
    this.appendValueInput("frec")
        .setCheck("Number")
        .appendField("Frecuencia:");
    this.appendValueInput("duty")
        .setCheck("Number")
        .appendField("Ciclo útil:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_setup'] = function(block) {
  var dropdown_id_opt = block.getFieldValue('id_opt');
  var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  var value_frec = Blockly.Lua.valueToCode(block, 'frec', Blockly.Lua.ORDER_ATOMIC);
  var value_duty = Blockly.Lua.valueToCode(block, 'duty', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.setup(' + value_pin + ', ' + value_frec + ', ' + value_duty + ')\n';
  return code;
};


/******************************************************************
 *               PWM START
 *****************************************************************/
Blockly.Blocks['pwm_start'] = {
  init: function() {
    this.appendValueInput("pwm")
        .setCheck("Number")
        .appendField("Iniciar el PWM del pin");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_start'] = function(block) {
  var value_pwm = Blockly.JavaScript.valueToCode(block, 'pwm', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'pwm.start(' + value_pwm + ')\n';
  return code;
};



/******************************************************************
 *               PWM STOP
 *****************************************************************/
Blockly.Blocks['pwm_stop'] = {
  init: function() {
	this.appendValueInput("pwm")
	    .setCheck("Number")
	    .appendField("Detener el PWM del pin ");
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(65);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_stop'] = function(block) {
  var value_pwm = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.stop(' + value_pwm + ')\n';
  return code;
};



/******************************************************************
 *               PWM CLOSE 
 *****************************************************************/
Blockly.Blocks['pwm_close'] = {
  init: function() {
	this.appendValueInput("pwm")
	    .setCheck("Number")
	    .appendField("Eliminar el PWM del pin ");
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(65);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_close'] = function(block) {
  var value_pwm = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.close(' + value_pwm + ')\n';
  return code;
};



/******************************************************************
 *               PWM SERVO 
 *****************************************************************/
Blockly.Blocks['pwm_servo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover")
	    .appendField(new Blockly.FieldAngle(90), "angle");
	this.appendDummyInput()
	    .appendField(new Blockly.FieldDropdown([["el servomotor 0", "0"], ["el servomotor 1", "1"], ["el servomotor 2", "2"]]), "id");
	this.appendValueInput("pin")
	    .setCheck("Number")
	    .appendField("en el pin:");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(65);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_servo'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  var dropdown_id = block.getFieldValue('id');
  var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.setup(' + value_pin + ', 200, ' + value_duty + ')';
  return code;
};



/******************************************************************
 *               PWM CHANGE DUTY CICLE
 *****************************************************************/
Blockly.Blocks['pwm_duty'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Para el pwm del pin:");
    this.appendValueInput("duty")
        .setCheck("Number")
        .appendField("Cambiar el ciclo util:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_duty'] = function(block) {
  var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  var value_duty = Blockly.Lua.valueToCode(block, 'duty', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.setduty(' + value_pin + ', ' + value_duty + ' )\n';
  return code;
};
