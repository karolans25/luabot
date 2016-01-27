sirena = 2
lampara = 1
gpio.mode(sirena, gpio.OUTPUT);
gpio.mode(lampara, gpio.OUTPUT);
gpio.write(lampara, gpio.LOW)
gpio.write(sirena, gpio.HIGH)
