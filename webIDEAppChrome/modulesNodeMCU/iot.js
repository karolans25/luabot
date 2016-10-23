// START IOT

Blockly.Blocks['start_iot'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Start IOT");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("modulesNodeMCU/imag/iot.gif", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['start_iot'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'function sendData(apikey, datas)\n'+
'print("Sending data to thingspeak.com")\n'+
'conn=net.createConnection(net.TCP, 0)\n'+
'conn:on("receive", function(conn, payload) print(payload) end)\n'+
'conn:connect(80,\'184.106.153.149\')\n'+
'conn:send("GET /update?key="..apikey..datas.." HTTP/1.1\\r\\n")\n'+
'conn:send("Host: api.thingspeak.com\\r\\n")\n'+
'conn:send("Accept: */*\\r\\n")\n'+
'conn:send("User-Agent: Mozilla/4.0 (compatible; esp8266 Lua; Windows NT 5.1)\\r\\n")\n'+
'conn:send("\\r\\n")\n'+
'conn:on("sent",function(conn)\n'+
'print("Closing connection")\n'+
'conn:close()end)\n'+
'conn:on("disconnection", function(conn)\n'+
'print("Got disconnection...")\n'+
'end)end\n';

  return code;
};


// Field IOT

Blockly.Blocks['field_iot'] = {
  init: function() {
    this.appendValueInput("write")
        .setCheck("String")
        .appendField(new Blockly.FieldImage("modulesNodeMCU/imag/iot.gif", 15, 15, "*"))
	.appendField(new Blockly.FieldDropdown([["field1", "\"&field1=\""], ["field2", "\"&field2=\""], ["field3", "\"&field3=\""], ["field4", "\"&field4=\""], ["field5", "\"&field5=\""], ["field6", "\"&field6=\""], ["field7", "\"&field7=\""], ["field8", "\"&field8=\""]]), "field");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Lua['field_iot'] = function(block) {
  var dropdown_field = block.getFieldValue('field');
  var value_write = Blockly.Lua.valueToCode(block, 'write', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '..'+dropdown_field +".."+ value_write +'..\n""';
  return code;
};

// Write IOT

Blockly.Blocks['write_iot'] = {
  init: function() {
    this.appendValueInput("api key")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("modulesNodeMCU/imag/iot.gif", 20, 20, "*"))
        .appendField("API Key");
    this.appendDummyInput()
        .appendField("Escribir variables a IOT");
    this.appendStatementInput("datas")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Fields");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['write_iot'] = function(block) {
  var value_api_key = Blockly.Lua.valueToCode(block, 'api key', Blockly.Lua.ORDER_ATOMIC);
  var statements_datas = Blockly.Lua.statementToCode(block, 'datas');
  // TODO: Assemble Lua into code variable.
  var code = 'myDatas = ""'+ statements_datas+'\n'+
	'sendData('+value_api_key+', myDatas)\n';
  return code;
};
