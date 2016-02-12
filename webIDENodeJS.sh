#! /bin/bash

echo "Hola `whoami`, este script iniciará LuaBot con nodeJS."
echo "Compruebe que tenga instalado python 2.7 con el modulo python-serial y un navegador de internet."
echo "Además, este script debe estar al nivel de los directorios webIDEnodejs, serverNode, tools-ESP8266 como en este ejemplo:"
echo "|- webIDENodeJS.sh"
echo "|- tools-ESP8266/"
echo "|- serverNode/"
echo "|- webIDEnodejs/"
echo "De lo contrario no se ejecutará correctamente."
echo "Por defecto el navegador que se lanzara sera iceweasel. Si usa 
otro navegador comente y descomente el de su eleccion."
echo "Att: grupo pinguinoTux"
# descomente una de las lineas a ejecutar dependiendo del navegador que use.

## Navegador chrome
#google-chrome ./webIDEnodejs/index.html &
google-chrome ./webIDEnodejs/index_file_nodemcu-tool.html &

## Navegador chromium
#chromium ./webIDEnodejs/index.html &

## Navegador icewasel
#iceweasel ./webIDEnodejs/index.html &
#iceweasel ./webIDEnodejs/index_file_nodemcu-tool.html &

## Navegador firefox
#firefox ./webIDEnodejs/index_file_nodemcu-tool.html &

## Servidor nodejs
### ARCHITECTURE
if [ `uname -m` == "x86_64" ]; then
	ARCH=64
	echo "Host is a ${ARCH}-bit GNU/Linux."
	#./serverNode/node-v5.4.1-linux-x64//bin/node ./serverNode/index.js
	./serverNode/node-v5.4.1-linux-x64//bin/node ./serverNode/index_nodeMcu-tool.js
else
	ARCH=32
	echo "Host is a ${ARCH}-bit GNU/Linux."
	#./serverNode/node-v5.3.0-linux-x86/bin/node ./serverNode/index.js
	./serverNode/node-v5.3.0-linux-x86/bin/node ./serverNode/index_nodeMcu-tool.js
fi

