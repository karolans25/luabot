# Blockly

Google's Blockly is a web-based, visual programming editor.  Users can drag
blocks together to build programs.  All code is free and open source.

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/sample.png)

# Comprimir Bloques y .js para cada Lenguaje #

Ejecutar el siguiente comando como usuario normal ($).

```
python build.py
```

La siguiente lista de archivos son los generados después de ejecutar
el anterior comando.
```
blockly_compressed.js
blockly_uncompressed.js
blocks_compressed.js
dart_compressed.js
javascript_compressed.js
lua_compressed.js
php_compressed.js
python_compressed.js
```
Los anteriores archivos comprimidos son generados usando el compilador
**closure** de google el cual es llamado por el script de python. Closure
es el encargado de realizar la compresión. 

## Atención !!! ##

Éste directorio contiene en core:
fields_variable.js con la solución alternativa de dialogo para renombrar y crear
nuevas variables.

La evidencia de su funcionamiento está en demo/code/index.html

Se a echo uso de la versión de blockly_uncompressed.js que permitió el 
arreglo de blockly_compressed.js recordando que app chrome prohibe el uso
de window.prompt.

Por la forma como está construido blockly es muy difícil (no imposible) el uso
de diálogos en forma de alerta debido a que éstos a exceptión de window.prompt
retornan son callback y la función en la que está inmersa requiere un return (string)
los callback son de forma asíncrona y el el return debe ser síncrono...
