# Acerca de code.js #

## Resaltado de código ##

Al no ser permitido la llamada de un script entre ```<script></script>``` 
de javascript éstas líneas no son permitidas para la variable **Code.importPrettify**.

```
  <link rel="stylesheet" href="../prettify.css">
  <script src="../prettify.js"></script>
```

Se sustituyen por las siguientes las cuales sí pueden ser usadas por 
app de chrome.

```
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', './dependents/prettify.css');
  document.head.appendChild(link);
  var script = document.createElement('script');
  script.setAttribute('src', './dependents/prettify.js');
  document.head.appendChild(script);
```

## Load the code demo's language strings ##

Debido a que no es permitido en app chrome el uso de **document.write(...)**
las siguientes líneas no son permitidas:

```
document.write('<script src="./msg/' + Code.LANG + '.js"></script>\n');
```

```
document.write('<script src="./dependents/msg/js/' + Code.LANG + '.js"></script>\n');
```

Cada línea es sustituida por los respectivos códigos siguientes:

Para la primera:

```
var script0 = document.createElement("script");
var script0Attr1 = document.createAttribute("src");
script0Attr1.nodeValue = './msg/' + Code.LANG +'.js';
script0.setAttributeNode(script0Attr1);
goog.global.document.getElementsByTagName("head")[0].appendChild(script0);
```

Para la segunda:

```
var script1 = document.createElement("script");
var script1Attr1 = document.createAttribute("src");
script1Attr1.nodeValue = './dependents/msg/js/' + Code.LANG +'.js';
script1.setAttributeNode(script1Attr1);
goog.global.document.getElementsByTagName("head")[0].appendChild(script1);
```
