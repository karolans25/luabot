/****************************************************
 * 			BEGIN HC-SR04 START BLOCK
 * *************************************************/

Blockly.Blocks['hc_sr04'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ultrasonido");
    this.appendDummyInput()
        .appendField("Start");
    this.appendValueInput("trigger")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Disparo pin");
    this.appendValueInput("echo")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Echo pin");
//    this.appendValueInput("average")
//        .setCheck("Number")
//        .setAlign(Blockly.ALIGN_RIGHT)
//        .appendField("Promedio");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['hc_sr04'] = function(block) {
	var value_trigger = Blockly.Lua.valueToCode(block, 'trigger', Blockly.Lua.ORDER_ATOMIC);
	var value_echo = Blockly.Lua.valueToCode(block, 'echo', Blockly.Lua.ORDER_ATOMIC);
//	var value_average = Blockly.Lua.valueToCode(block, 'average', Blockly.Lua.ORDER_ATOMIC);
 
  // TODO: Assemble Lua into code variable.
  var code = 'hcsr04 = {}\n'+
	'function hcsr04.init(pin_trig,pin_echo)\n'+
//	'function hcsr04.init(pin_trig,pin_echo,average)\n'+
	'local self={}\n'+
	'self.time_start=0\n'+
	'self.time_end=0\n'+
	'self.trig=pin_trig or 4\n'+
	'self.echo=pin_echo or 3\n'+
	'gpio.mode(self.trig,gpio.OUTPUT)\n'+
	'gpio.mode(self.echo,gpio.INT)\n'+
//	'self.average=average or 3\n'+
	'function self.echo_cb(level)\n'+
	'if level == 1 then\n'+
	'self.time_start = tmr.now()\n'+
	'gpio.trig(self.echo, "down")\n'+
	'else\n'+
	'self.time_end = tmr.now()\n'+
	'end\n'+
	'end\n'+
	'function self.measure()\n'+
	'gpio.trig(self.echo, "up", self.echo_cb)\n'+
	'gpio.write(self.trig, gpio.HIGH)\n'+
	'tmr.delay(100)\n'+
	'gpio.write(self.trig, gpio.LOW)\n'+
	'tmr.delay(100000)\n'+
	'if (self.time_end - self.time_start) < 0 then\n'+
	'return -1\n'+
	'end\n'+
	'return (self.time_end - self.time_start) / 5800\n'+
	'end\n'+
//	'function self.measure_avg()\n'+
//	'if self.measure() < 0 then\n'+
//	'return -1\n'+
//	'end\n'+
//	'avg = 0\n'+
//	'for cnt = 1, self.average do\n'+
//	'distance = self.measure()\n'+
//	'if distance < 0 then\n'+
//	'return -1\n'+
//	'end\n'+
//	'avg = avg + distance\n'+
//	'tmr.delay(30000)\n'+
//	'end\n'+
//	'return avg / self.average\n'+
//	'end\n'+
	'return self\n'+
	'end\n'+
	'device = hcsr04.init('+value_trigger+','+value_echo+')\n';
//	'device = hcsr04.init('+value_trigger+','+value_echo+','+value_average+')\n';
  return code;
};

/******************************************************
 * 		MEASURE WITH ULTRASONIC
 *****************************************************/

Blockly.Blocks['read_hc_sr04'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distancia Ultrasonido");
    this.setInputsInline(true);
	this.setOutput(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['read_hc_sr04'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'device.measure()';
  //var code = 'device.measure_avg()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};
