bombillo = 7
gpio.mode(bombillo, gpio.OUTPUT)
wifi.setmode(wifi.SOFTAP)
wifi.ap.config({ssid="luabot", pwd="12345678"});
srv=net.createServer(net.TCP)srv:listen(80,function(conn)
conn:on("receive", function(client,request)
local buf = ""
local _, _, method, path, vars = string.find(request, "([A-Z]+) (.+)?(.+) HTTP")
if(method == nil)then
_, _, method, path = string.find(request, "([A-Z]+) (.+) HTTP")
end
local _GET = {}
if (vars ~= nil)then
for k, v in string.gmatch(vars, "(%w+)=(%w+)&*") do
_GET[k] = v
end
end
buf = buf.."<h1>Web</h1>"
  buf = buf.."<p>Controlar Bombillo</p>"
  buf = buf.."<p><a href=\"?pin=b0\"><button>on</button></a></p>";
  buf = buf.."<p><a href=\"?pin=b1\"><button>off</button></a></p>";
local _on,_off = "",""
  if (_GET.pin == "b0") then
    gpio.write(bombillo, gpio.HIGH)
  elseif (_GET.pin == "b1") then
    gpio.write(bombillo, gpio.LOW)
  end
client:send(buf)
client:close()
collectgarbage()
end)
end)
