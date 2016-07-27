led = 4
gpio.mode(led, gpio.OUTPUT)
for count = 1, 10 do
  gpio.write(led, gpio.LOW)
  tmr.delay(1000000)
  gpio.write(led, gpio.HIGH)
  tmr.delay(1000000)
end
