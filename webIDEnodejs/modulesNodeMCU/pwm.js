// Configurar un PWM
Blockly.Blocks['pwm_setup'] = {
  init: function() {
	this.appendValueInput("pin")
	    .setCheck("Number")
	    .appendField("Configurar un PWM en el Pin: ");
	this.appendValueInput("frecuency")
	    .setCheck("Number")
	    .appendField("La frecuencia, en Hz, del PWM es:");
	this.appendValueInput("duty")
	    .setCheck("Number")
	    .appendField("El ciclo útil, en %, del PWM es de:");
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(20);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_setup'] = function(block) {
  var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  var value_frecuency = Blockly.Lua.valueToCode(block, 'frecuency', Blockly.Lua.ORDER_ATOMIC);
  var value_duty = Blockly.Lua.valueToCode(block, 'duty', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  //var value_duty_cicle = math.ceil((1023/100) * value_duty);
  //var code = 'pwm.setup(' + value_pin + ', ' + value_frecuency + ', ' + 512 + ')\n';
  var code = 'pwm.setup(' + value_pin + ', ' + value_frecuency + ', ' + value_duty + ')\n';
  return code;
};


// Iniciar el PWM
Blockly.Blocks['pwm_start'] = {
  init: function() {
	this.appendValueInput("pin")
	    .setCheck("Number")
	    .appendField("Iniciar el PWM del Pin:");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(120);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_start'] = function(block) {
  var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.start(' + value_pin + ')\n';
  return code;
};



// Detener el PWM
Blockly.Blocks['pwm_stop'] = {
  init: function() {
	this.appendValueInput("pin")
	    .setCheck("Number")
	    .appendField("Detener el PWM del Pin:");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(120);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_stop'] = function(block) {
  var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.stop(' + value_pin + ')\n';
  return code;
};



// Eliminar el PWM
Blockly.Blocks['pwm_close'] = {
  init: function() {
	this.appendValueInput("pin")
	    .setCheck("Number")
	    .appendField("Eliminar el PWM del Pin:");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(120);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['pwm_close'] = function(block) {
  var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'pwm.close(' + value_pin + ')\n';
  return code;
};	
