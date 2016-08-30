led = 2
gpio.mode(led, gpio.OUTPUT)
for count = 1, 3 do
	gpio.write(led, gpio.LOW)
	tmr.delay(3000000)
	gpio.write(led, gpio.HIGH)
	tmr.delay(3000000)
end
