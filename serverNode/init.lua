function toogle(x)
  if 1 == (gpio.read(x)) then
    gpio.write(x, gpio.LOW)
  else
    gpio.write(x, gpio.HIGH)
  end
end


PIR = 7
foco = 1
sirena = 2
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
  buf = buf.."<p>Activar pruebas</p>";
  buf = buf.."<p><a href=\"?pin=b0\"><button>ON</button></a></p>";
  buf = buf.."<p><a href=\"?pin=b1\"><button>OFF</button></a></p>";
  buf = buf.."<p>Encedido de Bombillo</p>";
  buf = buf.."<p><a href=\"?pin=b2\"><button>Bombillo</button></a></p>";
  buf = buf.."<p>Encendido Sirena</p>";
  buf = buf.."<p><a href=\"?pin=b3\"><button>Sirena</button></a></p>";
local _on,_off = "",""
  if (_GET.pin == "b0") then
    automatico = 1
  elseif (_GET.pin == "b1") then
    automatico = 0
  elseif (_GET.pin == "b2") then
    toogle(foco)
  elseif (_GET.pin == "b3") then
    toogle(sirena)
  end
client:send(buf);
client:close();
collectgarbage();
end)
end)

while true do
  pir = gpio.read(7)
  print(pir)
  if 1 == pir then
    gpio.write(1, gpio.HIGH)
    gpio.write(2, gpio.HIGH)
	tmr.delay(300000)
  else
    gpio.write(1, gpio.LOW)
	gpio.write(2, gpio.LOW)
    tmr.delay(300000)
  end
end
