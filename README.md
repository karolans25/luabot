# LUABOT #

![logo_v1.png](https://bitbucket.org/repo/zbxzr5/images/2514622579-logo_v1.png)

LuaBot es una plataforma que puede ser usada en
robótica, domótica u otros fines donde sea necesario automatizar un proceso y
pueda intervenir la electrónica.
Consta tanto de un hardware y un software, ambos de tipo open source.
LuaBot es pensado como una herramienta que facilita la programación de
tareas que necesiten ser automatizadas y/o tele-operadas incorporando elementos 
básicos para tal fin, además, evita al usuario final la engorrosa tarea de
aprender un lenguaje de programación, haciendo que éste se ocupe principalmente 
del algoritmo a desarrollar.

Tener en cuenta que luabot es desarrollado a partir de varias herramientas opensource 
a las cuales se le deben los créditos.

* [Blockly](https://developers.google.com/blockly/)
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Apps chrome-chromium](https://developer.chrome.com/apps/first_app)
* [Kicad](http://kicad-pcb.org/)
* [ESP8266](http://www.esp8266.com/)
* [nodeMCU](https://nodemcu.readthedocs.io/en/master/)
* [VIM](http://www.vim.org/)
* [gimp](https://www.gimp.org/)

## Summary ##

* Módulo WiFi: Preparado para soportar IOT (internet de las cosas) 
* Interprete: Se hace uso de uno de los niveles más altos de abstracción en programación, a pesar de que no se pueda hacer
un control mayor sobre el hardware u optimizar recursos, permite que la programación sea más amigable con respecto a otros
paradigmas de programación.
* Programación en Bloques: La fusión entre la programación de bloques y el interprete evita los errores de sintaxis haciendo que solo se ocupe el programador
por la semántica.
* Piense usted mismo: hay herramientas que tienen como eslogan "hágalo usted mismo" o "fácil de hacer"  pero eso no implica
que sepa cómo funciona (copy and paste).
* Flexibilidad: No se rige sobre un sistema operativo en particular, a pesar de que requiera un navegador de internet, se
puede hacer uso de cualquiera que cumpla con los mínimos requerimientos.
* Aplicaciones: Pensado inicialmente para aplicaciones educativas, también puede ser usado para propósitos profesionales,
(como ejemplo un agrónomo que quiera hacer mediciones de comportamiento pero no tiene conocimientos en programación explícitamente)
el único requerimiento es pensar.

## Developers ##

* **Carolina Pulido**, crpulidog@unal.edu.co
* **Johnny Cubides**, jgcubidesc@unal.edu.co

![Responsabilidades.png](https://bitbucket.org/repo/zbxzr5/images/3225728576-Responsabilidades.png)

## LuaBot Release ##

* [LuaBot version 1 2016-06-16](https://bitbucket.org/pinguinotux/luabot/downloads/webIDEAppChrome_version_1.zip)
Se ha liberado la primera versión del software, la cual se instala como extensión en el navegador Chrome o Chromium.

## Software ##

El software de LuaBot se presenta en dos alternativas:

1. Como una extensión de google-chrome o extensión para chromium.
2. Como una aplicación cliente-servidor con la ayuda de nodeJS.

### App Google Chrome ###

#### How Install ####

[Vídeo para instalar Luabot como extensión de Chromium o google-chrome](https://youtu.be/Y3NwrFeUX0I)

![luabot.png](https://bitbucket.org/repo/zbxzr5/images/3073712873-luabot.png)

### web y nodejs ###

![luabotNodeJS.jpeg](https://bitbucket.org/repo/zbxzr5/images/3005177225-luabotNodeJS.jpeg)

Se requiere tres aplicaciones para poder ejecutar luabot con nodeJS.
 
	* nodejs (está en el directorio serverNode)
	* python 2.7 (previamente instalado)
	* navegador web con soporte para HTML5

Uso:
Ejecute el script llamado webNodeJS.

Compruebe que tenga instalado python 2.7 con el modulo python-serial y un navegador de internet.
Además, este script debe estar al nivel de los directorios webIDEnodejs, serverNode, tools-ESP8266 como en este ejemplo:

```
|- webIDENodeJS.sh
|- tools-ESP8266/
|- serverNode/
|- webIDEnodejs/
```
De lo contrario no se ejecutará correctamente.
Por defecto el navegador que se lanzara será Firefox. Si usa 
otro navegador comente y descomente el de su elección.

## Hardware ##

![luabot_v2.jpeg](https://bitbucket.org/repo/zbxzr5/images/4053244832-luabot_v2.jpeg)

![luabot_v2_3D.png](https://bitbucket.org/repo/zbxzr5/images/3490238818-luabot_v2_3D.png)

![tarjetaLuaBot.jpeg](https://bitbucket.org/repo/zbxzr5/images/447031110-tarjetaLuaBot.jpeg)

![moduloPotencia.jpeg](https://bitbucket.org/repo/zbxzr5/images/1306851125-moduloPotencia.jpeg)

## Agradecimientos ##


**John Freddy López**,
Rector Centro Educativo Los Andes Almendros,
Bogotá Colombia.

**Carlos Iván Camargo Barreño**,
Profesor de Sistemas Embebidos, Facultad De Ingeniería,
Departamento de Ingeniería Eléctrica y Electrónica,
Universidad Nacional De Colombia.

Att: grupo pinguinoTux