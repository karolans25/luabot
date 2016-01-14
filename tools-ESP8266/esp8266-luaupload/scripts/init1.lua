function temporizador_milisegundos(x)
  for i = 1, x do
    tmr.delay(1000)
  end
end


lampara = 1
--sirena = 2
--PIR = 7
PIR = 2
gpio.mode(lampara, gpio.OUTPUT);
--gpio.mode(sirena, gpio.OUTPUT);
gpio.mode(PIR, gpio.INPUT);
while true do
  if (gpio.read(PIR)) == 0 then
    gpio.write(lampara, gpio.LOW)
--    gpio.write(sirena, gpio.LOW)
    temporizador_milisegundos(100)
  else
    gpio.write(lampara, gpio.HIGH)
--    gpio.write(sirena, gpio.HIGH)
    temporizador_milisegundos(1000)
  end
end

