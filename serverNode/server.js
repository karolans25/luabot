// ACTIVACION DEL SERVIDOR

// Obtener funcionalidades para servidor express.js
var express = require('express');

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

function saveInit(datoIn){
	fs.writeFile('init.lua', datoIn, function(err) {
		if(err)	{
			console.log(err);
		}
		else {
			console.log('Se ha escrito correctamente en init.lua');
		}
	});
}

function upload(){
	exec('./luaupload.py upload -p /dev/ttyUSB0 -b 9600 init.lua',
		function(error, stdout, stderr) {
			console.log('stdout: '+ stdout);
			console.log('stderr ' + stderr);
			if( error !== null) {
				console.log('exec error: ' + error);
			}
		});	
}

// SOCKET.IO

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	socket.emit('connected');
	socket.on('save', function(data){
			saveInit(data);
	});
	socket.on('upload', upload);
});
}

exports.iniciar = iniciar;

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
