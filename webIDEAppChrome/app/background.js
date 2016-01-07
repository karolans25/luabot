chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.html',
		{
			frame: 'custom',
			id: "mainwin",
			innerBounds: {width:1024, height: 720}
		});
});
