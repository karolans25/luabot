#! /usr/bin/python
# -*- coding: utf-8 -*-

# python sendToUart.py archivo.lua delay(seconds) pathTtyUsb 

import sys, serial, time

nameFile = sys.argv[1]
timeDelay = float(sys.argv[2])
nameUart = sys.argv[3]

uart  = serial.Serial(nameUart, 115200, timeout=1)

def main():
    with open(nameFile) as fp:
        for line in fp:    
            uart.write(line+'\n\r')            
            print(line)
            time.sleep(timeDelay)

main()
