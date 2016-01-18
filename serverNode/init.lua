function toggle(x)
  if 1 == (gpio.read(x)) then
    gpio.write(x, gpio.LOW)
  else
    gpio.write(x, gpio.HIGH)
  end
end

function retardo(segundos)
  for i = 1, segundos do
    for i = 1, 1000 do
      tmr.delay(1000)
    end
  end
end


PIR = 7
foco = 1
sirena = 2
counter = 0
alarm_0 = 0
automatico = 1
gpio.mode(PIR, gpio.INPUT);
gpio.mode(foco, gpio.OUTPUT);
gpio.mode(sirena, gpio.OUTPUT);
wifi.setmode(wifi.SOFTAP);
wifi.ap.config({ssid="rita_camelo", pwd="18031935"});
srv=net.createServer(net.TCP)srv:listen(80,function(conn)
conn:on("receive", function(client,request)
local buf = "";
local _, _, method, path, vars = string.find(request, "([A-Z]+) (.+)?(.+) HTTP");
if(method == nil)then
_, _, method, path = string.find(request, "([A-Z]+) (.+) HTTP");
end
local _GET = {}
if (vars ~= nil)then
for k, v in string.gmatch(vars, "(%w+)=(%w+)&*") do
_GET[k] = v
end
end
buf = buf.."<h1>Alarma Gallinero</h1>";
  buf = buf.."<p>Automatico</p>";
  buf = buf.."<p><a href=\"?pin=b0\"><button>ON</button></a></p>";
  buf = buf.."<p><a href=\"?pin=b1\"><button>OFF</button></a></p>";
  buf = buf.."<p>Manual</p>";
  buf = buf.."<p><a href=\"?pin=b2\"><button>Bombillo</button></a></p>";
  buf = buf.."<p><a href=\"?pin=b3\"><button>Sirena</button></a></p>";
local _on,_off = "",""
  if (_GET.pin == "b0") then
    automatico = 1
  elseif (_GET.pin == "b1") then
    automatico = 0
  elseif (_GET.pin == "b2") then
    toggle(foco)
  elseif (_GET.pin == "b3") then
    toggle(sirena)
  end
client:send(buf);
client:close();
collectgarbage();
end)
end)

retardo(10)

tmr.alarm(0, 250, 1, function()
	if automatico == 1 then
		if alarm_0 == 0 then
			if gpio.read(PIR) == 1 then
				alarm_0 = 1;
			end
		end
	else
		alarm_0 = 0
	end
	if counter == 1 and alarm_0 == 1 then
		gpio.write(foco, gpio.HIGH)
		retardo(8)
	elseif counter > 40 and alarm_0 == 1 then
		if gpio.read(PIR) == 1 then
			gpio.write(sirena, gpio.HIGH)
			retardo(15)
			gpio.write(foco, gpio.LOW)
			gpio.write(sirena, gpio.LOW)
			alarm_0 = 0
			counter = 0
		end
	end
	if alarm_0 == 1 then
		counter = counter +1
	end
	if counter == 60 and alarm_0 == 1 then
		counter = 0
		alarm_0 = 0
		gpio.write(foco, gpio.LOW)
	end
end)
