var socket = io.connect('http://localhost:3000');
//var socket = io.connect('http://192.168.2.1:3000');
	
	var adc0=-1, adc1=-1, adc2=-1;
	socket.on('sen0', sensor0);
	socket.on('sen1', sensor1);
	socket.on('sen2', sensor2);
	
	function sensor0(data){
		if(adc0==-1){	
			adc0=data*100/255;
		}
	}
	function sensor1(data){
		if(adc1==-1){
			adc1=data*100/255;
		}
	}
	function sensor2(data){
			adc2=data*5.0*100.0/256.0;
		var salida="sensor1: "+adc0+" %\nsensor2: "+adc1+" %\nsensor3: "+adc2+" 'C";
		document.getElementById("salida0").value=salida;
		adc0=-1;
		adc1=-1;
		adc2=-1;
	}

/*socket.on('send', function (data){
	document.getElementById ("salida0").value = data;
});*/

function leer(){
	socket.emit('read');
	document.getElementById ("salida1").value = "nada";
}
function send(dato){
//	socket.emit('send', {message: dato});	
	socket.emit('write', dato);	
	document.getElementById ("terminal1").value = typeof(dato);
}

function actuador(opcion){
	document.getElementById ('terminal').value=opcion;
	switch(opcion){
		case 'a':
			send('a');
			break;
		case 'b':
			send('b');
			break;
		case 'c':
			send('c');
			break;
		case 'd':
			send('d');
			break;
		case 'e':
			send('e');
			break;
		case 'f':
			send('f');
			break;
		case '1':
			send('1');
			break;
		case '2':
			send('2');
			break;
		case '3':
			send('3');
			break;
		case '4':
			send('4');
			break;
	}
}
