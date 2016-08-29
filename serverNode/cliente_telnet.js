var telnet = require('telnet-client');
var connection = new telnet();
 
var params = {
  host: '192.168.1.100',
  port: 3335,
  //shellPrompt: '/ >>> ',
  timeout: 10000,
  // removeEcho: 4 
};
 
connection.on('ready', function(prompt) {
  connection.exec(cmd, function(err, response) {
    console.log(response);
  });
});
 
connection.on('timeout', function() {
  console.log('socket timeout!')
  connection.end();
});
 
connection.on('close', function() {
  console.log('connection closed');
});
 
connection.connect(params);
