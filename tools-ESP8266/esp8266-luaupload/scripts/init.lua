uart.setup(0,115200,8,0,1,1)
gpio.mode(0,gpio.INPUT)
dofile("run.lua")
