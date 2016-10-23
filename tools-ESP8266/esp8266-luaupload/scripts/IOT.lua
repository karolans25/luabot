key="TCD9PLO1NH8HY9BV"

function sendData(apikey, datas)
print("Sending data to thingspeak.com")
conn=net.createConnection(net.TCP, 0) 
conn:on("receive", function(conn, payload) print(payload) end)
conn:connect(80,'184.106.153.149') 
conn:send("GET /update?key="..apikey.."&field1="..t1..".".."&field2="..t2.." HTTP/1.1\r\n") 
conn:send("Host: api.thingspeak.com\r\n") 
conn:send("Accept: */*\r\n") 
conn:send("User-Agent: Mozilla/4.0 (compatible; esp8266 Lua; Windows NT 5.1)\r\n")
conn:send("\r\n")
conn:on("sent",function(conn)
print("Closing connection")
conn:close()end)
conn:on("disconnection", function(conn)
print("Got disconnection...")
end)end

sendData()
