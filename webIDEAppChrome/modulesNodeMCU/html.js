/***************************************************************
 * 					BEGIN PAGE HTML
 * ************************************************************/

Blockly.Blocks['page_html'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("HTML")
        .appendField("Título:")
        .appendField(new Blockly.FieldTextInput("Web"), "title");
    this.appendStatementInput("buttons")
        .setCheck(null)
        .appendField("html");
    this.appendStatementInput("logic")
        .setCheck(null)
        .appendField("Lógica");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Lua['page_html'] = function(block) {
  var text_title = block.getFieldValue('title');
  var statements_buttons = Blockly.Lua.statementToCode(block, 'buttons');
  var statements_logic = Blockly.Lua.statementToCode(block, 'logic');
  // TODO: Assemble Lua into code variable.
  var code = 'srv=net.createServer(net.TCP)' +
	'srv:listen(80,function(conn)\n' +
	'conn:on("receive", function(client,request)\n' +
	'local buf = ""\n'+
	'local _, _, method, path, vars = string.find(request, "([A-Z]+) (.+)?(.+) HTTP")\n' +
	'if(method == nil)then\n' +
	'_, _, method, path = string.find(request, "([A-Z]+) (.+) HTTP")\n' +
	'end\n' +
	'local _GET = {}\n' +
	'if (vars ~= nil)then\n' +
	'for k, v in string.gmatch(vars, "(%w+)=(%w+)&*") do\n' +
	'_GET[k] = v\n' +
	'end\n' +
	'end\n' +
	'buf = buf.."<h1>' + text_title + '</h1>"\n' +
	statements_buttons +
	'local _on,_off = "",""\n' +
	statements_logic +
	'client:send(buf)\n' +
	'client:close()\n' +
	'collectgarbage()\n' + 
	'end)\n' +
	'end)\n';
  return code;
};

/*****************************************************************
 * 		BEGIN BUTTON STATEMENT
 * **************************************************************/

Blockly.Blocks['button_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Botón")
        .appendField(new Blockly.FieldDropdown([["0", "b0"],
			["1", "b1"], ["2", "b2"], ["3", "b3"], ["4", "b4"],
			["5", "b5"], ["6", "b6"], ["7", "b7"], ["8", "b8"],
			["9", "b9"]]), "buttons");
    this.appendDummyInput()
        .appendField("Nombre:")
        .appendField(new Blockly.FieldTextInput("pulsador"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['button_statement'] = function(block) {
  var dropdown_buttons = block.getFieldValue('buttons');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Lua into code variable.
  var code = 'buf = buf..\"<p><a href=\\\"?pin=' + dropdown_buttons + '\\\"><button>' + 
  text_name + '</button></a></p>";\n';
  return code;
};


/***************************************************************
 * 					BEGIN BUTTON
 * ************************************************************/

Blockly.Blocks['button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Botón 0", "b0"], ["Botón 1", "b1"], ["Botón 2", "b2"], ["Botón 3", "b3"], ["Botón 4", "b4"], ["Botón 5", "b5"], ["Botón 6", "b6"], ["Botón 7", "b7"], ["Botón 8", "b8"], ["Botón 9", "b9"]]), "buttons");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['button'] = function(block) {
  var dropdown_buttons = block.getFieldValue('buttons');
  // TODO: Assemble Lua into code variable.
  var code = '_GET.pin == "' + dropdown_buttons + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};


/************************************************************
 * 					BEGIN HTML TEXT
 * *********************************************************/

Blockly.Blocks['html_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Texto Web")
        .appendField(new Blockly.FieldTextInput("Pagina Web"), "text");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['html_text'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble Lua into code variable.
  var code = 'buf = buf.."<p>' + text_text + '</p>"\n';
  return code;
};

/************************************************************
 * 					BEGIN HTML TEXT AND VARIABLE
 * *********************************************************/

Blockly.Blocks['variable_html'] = {
  init: function() {
    this.appendValueInput("text_add_variable")
        .setCheck(null)
        .appendField("Texto Web + Variable")
        .appendField(new Blockly.FieldTextInput("nombre de variable"), "text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Lua['variable_html'] = function(block) {
  var text_text_ = block.getFieldValue('text');
  var value_text_add_variable = Blockly.Lua.valueToCode(block, 'text_add_variable', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'buf = buf.."<p>' + text_text_ + '"..' + value_text_add_variable +'..' + '"</p"\n';
  return code;
};
