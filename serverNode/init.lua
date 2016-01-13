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
