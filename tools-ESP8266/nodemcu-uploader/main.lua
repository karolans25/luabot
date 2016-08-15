-- main.lua --


-- Connect 
print('\nAll About Circuits main.lua\n')
tmr.alarm(0, 1000, 1, function()
   if wifi.sta.getip() == nil then
      print("Connecting to AP...\n")
   else
      ip, nm, gw=wifi.sta.getip()
      print("IP Info: \nIP Address: ",ip)
      print("Netmask: ",nm)
      print("Gateway Addr: ",gw,'\n')
      tmr.stop(0)
   end
end)

-- a simple telnet server
s=net.createServer(net.TCP,180)
s:listen(3335,function(c)
  function s_output(str)
    if(c~=nil)
      then c:send(str)
    end
  end
  node.output(s_output, 0)   -- re-direct output to function s_ouput.
  c:on("receive",function(c,l)
    node.input(l)           -- works like pcall(loadstring(l)) but support multiple separate line
  end)
  c:on("disconnection",function(c)
    node.output(nil)        -- un-regist the redirect output function, output goes to serial
  end)
  print("Welcome to NodeMcu world.")
  --print("\r\n")
end)
