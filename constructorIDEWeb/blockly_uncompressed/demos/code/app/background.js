/* Éste archivo hace que se pueda ejecutar el programa como una
 * extensión app. se configura el tamaño de la pagina*/

chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.html',
		{
			frame: 'custom',
			id: "mainwin",
			innerBounds: {width:1024, height: 720}
		});
});
