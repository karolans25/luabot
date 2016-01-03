function toggle(x)
  if (gpio.read(x);
  ) then
    gpio.write(x, gpio.LOW);
  else
    gpio.write(x, gpio.HIGH);
  end
end


bombillo = 1
wifi.setmode(wifi.SOFTAP);
wifi.ap.config({ssid="miRed", pwd="12345678"});
gpio.mode(bombillo, gpio.OUTPUT);
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
buf = buf.."<h1>Encender Bombillo</h1>";
  buf = buf.."<p>Oprima el boton Toggle</p>";
  buf = buf.."<p>Para enceder o apagar</p>";
  buf = buf.."<p>El bombillo</p>";
  buf = buf.."<p><a href=\"?pin=b0\"><button>toggle</button></a></p>";
local _on,_off = "",""
  if (_GET.pin == "b0") then
    toggle(bombillo)
  end
client:send(buf);
client:close();
collectgarbage();
end)
end)
