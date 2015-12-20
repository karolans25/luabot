# Subir Script LUA a nodeMCU #

Si tiene permisos de ejecución:
```
$ ./luaupload.py upload -p /dev/ttyUSB0 archivo.lua
```
Si no tiene permisos de ejecución:
```
$ python luaupload.py upload -p /dev/ttyUSBn archivo.lua
```
Donde n es el número del puerto serial conectado al esp8266.

Si desea que se ejecute el script en cada reinicio el script debe ser 
guardado con el nombre **init.lua**
```
$ python luaupload.py upload -p /dev/ttyUSB0 init.lua
```
# Subir nodeMCU LUA 5.0  a flash de esp8266 #

Permite instalar el nodeMCU en el modulo esp8266.

Se debe tener instalado el paquete pySerial.

```
# apt-get install python-serial
```

Uso:

```
$ python esptool.py write_flash 0x00000 archivo.bin
```
