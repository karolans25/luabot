function intercambio(pines)
  if (gpio.read(pines)) == 1 then
    gpio.write(pines, gpio.LOW)
  else
    gpio.write(pines, gpio.HIGH)
  end
end


bombillo = 0
LED = 1
gpio.mode(LED, gpio.OUTPUT);
wifi.setmode(wifi.SOFTAP);
wifi.ap.config({ssid="miRed", pwd="12345678"});
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
buf = buf.."<h1>Mi pagina Web</h1>";
  buf = buf.."<p>Encender LED</p>";
  buf = buf.."<p><a href=\"?pin=b4\"><button>pulsador</button></a></p>";
local _on,_off = "",""
  if (_GET.pin == "b4") then
    intercambio(LED)
  end
client:send(buf);
client:close();
collectgarbage();
end)
end)
