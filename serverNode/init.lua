<<<<<<< HEAD
function retardo(segundos)
	for i = 1, segundos do
		for j = 1, 1000 do
			tmr.delay(1000)
		end
	end
end


PIR = 7
foco = 1
sirena = 2
counter = 0
alarm_0 = 0;

gpio.mode(PIR, gpio.INPUT)
gpio.mode(foco, gpio.OUTPUT)
gpio.mode(sirena, gpio.OUTPUT)

tmr.alarm(0, 250, 1, function()
	if alarm_0 == 0 then
		if gpio.read(PIR) == 1 then
			alarm_0 = 1;
		end
	end

	if (counter == 1) and alarm_0 == 1 then
		gpio.write(foco, gpio.HIGH)
		retardo(10)
	elseif counter > 1 and alarm_0 == 1 then
		if gpio.read(PIR) == 1 then
			gpio.write(sirena, gpio.HIGH)
			retardo(30)
			gpio.write(foco, gpio.LOW)
			gpio.write(sirena, gpio.LOW)
			alarm_0 = 0
			counter = 0
		end
	end
	if alarm_0 == 1 then
		counter = counter +1
	end
	if counter == 40 and alarm_0 == 1 then
		counter = 0
		alarm_0 = 0
		gpio.write(foco, gpio.LOW)
	end
end)
=======
led = 1
gpio.mode(led, gpio.OUTPUT);
print('El led es una salida')
for count = 1, 10 do
  print('vamos a encender el led')
  gpio.write(led, gpio.HIGH)
  tmr.delay(10000000)
  print('vamos a apagar el led')
  gpio.write(led, gpio.LOW)
end
print('Hemos terminado')
>>>>>>> c03d834279b350836ddafab9111a256608000ac3
