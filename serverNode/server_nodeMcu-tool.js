// ACTIVACION DEL SERVIDOR

// Obtener funcionalidades para servidor express.js
var express = require('express');

// Comunicación con nodeMCU ESP8266
//var _connector = require('nodemcu-tool').Connector;
//var con = new _connector('/dev/ttyUSB0', 9600);
var serial_port = "";

// Obtener funciones de tipo servidor para guardar en app

var routes = require('routes');

var http = require('http');

var app = express();

var fs = require('fs');

var exec = require('child_process').exec;

function iniciar() {
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || 'localhost');
app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
res.render("page");
});

app.use(express.static(__dirname + '/Public'));
 
var server = http.createServer(app).listen(app.get('port'),app.get('ip'));

console.log("Server On");

function saveInit(datoIn, fileName){
	fs.writeFile('./serverNode/' + fileName, datoIn, function(err) {
		if(err)	{
			console.log(err);
		}
		else {
			console.log('Se ha escrito correctamente en ' + fileName);
		}
	});
}

function upload(dataIn, fileName){
	saveInit(dataIn, fileName);
	exec('./serverNode/node_modules/nodemcu-tool/bin/nodemcu-tool.js upload --port=' + serial_port + ' --optimize ./serverNode/init.lua', function(error, stdout, stderr){
		console.log('stdout: '+ stdout);
		console.log('stderr ' + stderr);
		if( error !== null) {
			console.log('exec error: ' + error);
		}
	});
}

function run(dataIn, fileName){
	saveInit(dataIn, fileName);
	exec('./serverNode/node_modules/nodemcu-tool/bin/nodemcu-tool.js upload --port=' + serial_port + ' --optimize ./serverNode/run.lua', function(error, stdout, stderr){
		console.log('stdout: '+ stdout);
		console.log('stderr ' + stderr);
		if( error !== null) {
			console.log('exec error: ' + error);
		}
		exec('./serverNode/node_modules/nodemcu-tool/bin/nodemcu-tool.js run --port=' + serial_port + ' run.lua', function(error, stdout, stderr){
			console.log('stdout: '+ stdout);
			console.log('stderr ' + stderr);
			if( error !== null) {
				console.log('exec error: ' + error);
			}
		});	
	});
}

function saveProject(fileBlockly) {
	exec('echo \'' + fileBlockly[1] + '\' > ~/luaBot/' + fileBlockly[0], function(error, stdout, stderr){
		console.log('stdout: '+ stdout);
		console.log('stderr ' + stderr);
		if( error !== null) {				
			console.log('exec error: ' + error);
		}
	});
}	


/* ************************************************
 * 					BEGIN SOCKET.IO
 * ***********************************************/

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	socket.emit('connected');
	socket.on('save', function(data){
			saveInit(data);
	});
	socket.on('upload', function(data){
		upload(data, 'init.lua');
	});
	socket.on('run', function(data){
		run(data, 'run.lua');
	});
	socket.on('list', function(data){
		list();
	});
	socket.on('saveProject', function(data){
		saveProject(data);
	});
	socket.on('getListSerialPort', function() {
		getListSerialPort();
	});
	socket.on('connectOtherPort', function(data){
		serial_port = data;
		socket.emit('statusInfo', 'Conectado con el servidor. Puerto serial a usar: ' + serial_port);
	});

	function list() {
		exec('mkdir -p ~/luaBot/; ls ~/luaBot/', function(error, stdout, stderr){
			console.log('stdout: '+ stdout);
			console.log('stderr ' + stderr);
			if( error !== null) {				
				console.log('exec error: ' + error);
				socket.emit('statusInfo', error);
			} else
				socket.emit('saveFile', stdout);
		});
	}	
	
	function getListSerialPort() {
		exec('ls /dev/ttyUSB*', function(error, stdout, stderr){
			console.log('stdout: '+ stdout);
			console.log('stderr ' + stderr);
			if( error !== null) {				
				console.log('exec error: ' + error);
			} else
				socket.emit('sendListSerialPort', stdout);
		});
	}	
});

/* *************************************************
 * 					END SOCKET.IO
 * ************************************************/

}

exports.iniciar = iniciar;

/********************************************************************
 * 						API nodeMCU USE
 * ******************************************************************/
/* Observaciones:
 * No ha sido posible usar
 * pwd: serverNode/node_modules/nodemcu-tool/ 
 * lib/NodeMcuConnector.js
 (process:2486): GLib-CRITICAL **: g_slice_set_config: assertion 'sys_page_size == 0' failed
module.js:328
    throw err;
    ^

Error: Cannot find module '/home/johnny/proyectos/luabot/serverNode/node_modules/serialport/build/Release/node-v47-linux-ia32/serialport.node'
    at Function.Module._resolveFilename (module.js:326:15)
    at Function.Module._load (module.js:277:25)
    at Module.require (module.js:354:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/home/johnny/proyectos/luabot/serverNode/node_modules/serialport/serialport.js:14:25)
    at Module._compile (module.js:398:26)
    at Object.Module._extensions..js (module.js:405:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
    at Module.require (module.js:354:17)
    at require (internal/module.js:12:17)

function upload(){
	con.connect(upload);
}
var upload = function(err, response){
	console.log(response);
	con.upload('./serverNode/init.lua', true, function(err, response){
		if (err){
			console.error('IO Error - ', err);
		}else{
			console.log(response);
		}
	});
}

/*
// Variable de io para escucha de server
io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnect');
	});
});
io.sockets.on('connection', function(socket){
//	serialPort.on('data', function(data) {
//		var vm_log = data;
//		socket.emit('message', { vm: vm_log });
//	});

	return new Promise(function (resolve, reject){
		socket.on('write', UART_tx);
		socket.on('read', UART_rx);
		socket.on('clean', limpiar);		

		function UART_tx(data){
			console.log(data);
			serialPort.write(data);
		}
		
		function leerUART(){
			return serialPort.on('data', function(data){
				return data.toString();
			});
		}

		function conversor(i){
			var timer = setTimeout(function(j){console.log(j);
clearTimeout(timer);
}, 3000,i);
		}

		function UART_rx(){
				var i=0;
				var adc;
				serialPort.write('5');
				adc=setInterval(function(){
					serialPort.write('0');
					if(i==0){
					serialPort.on('data', function(data){
						console.log(data[0]);
						socket.emit('sen0', data[0]);
					});
					}
					else if(i==1){
					serialPort.on('data', function(data){
						console.log(data[0]);
						socket.emit('sen1', data[0]);
					});
					}
					else if(i==2){
					serialPort.on('data', function(data){
						console.log(data[0]);
						socket.emit('sen2', data[0]);
					});
					}
					console.log(i++);
					if(i==3){
						clearInterval(adc);
					}
				}, 80);
		}
	
		function limpiar(){
			socket.removeListener('read', UART_rx);
			socket.removeListener('write', UART_tx);
			socket.removeListener('clean', limpiar);
		}
		});
	
/*	socket.on('send', function (data){
		console.log(data);
		serialPort.write(data);
	});
	socket.on('recieve', function (data){
		console.log('pidiendoDatos');
		serialPort.write('0');
		serialPort.on('data', function(data){
			socket.emit('send', data.toString());
		});
		socket.removeListener('send');
	});*/
