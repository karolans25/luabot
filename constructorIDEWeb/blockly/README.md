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
