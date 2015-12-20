<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" lang="en-US">
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" lang="en-US">
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html lang="en-US">
<!--<![endif]-->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width" />
<title>NodeLua</title>

<script src="wp-content/themes/developer/js/jquery-1.8.2.min.js" type="text/javascript"></script>

<link rel="shortcut icon" href="wp-content/themes/developer/image/favicon.png">
<link rel="pingback" href="https://nodelua.org/xmlrpc.php" />
<!--[if lt IE 9]>
<script src="https://nodelua.org/wp-content/themes/developer/js/html5.js" type="text/javascript"></script>
<![endif]-->
<link rel="alternate" type="application/rss+xml" title="NodeLua &raquo; Feed" href="feed/index.html" />
<link rel="alternate" type="application/rss+xml" title="NodeLua &raquo; Comments Feed" href="comments/feed/index.html" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/72x72\/","ext":".png","source":{"concatemoji":"https:\/\/nodelua.org\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.4"}};
			!function(a,b,c){function d(a){var c=b.createElement("canvas"),d=c.getContext&&c.getContext("2d");return d&&d.fillText?(d.textBaseline="top",d.font="600 32px Arial","flag"===a?(d.fillText(String.fromCharCode(55356,56806,55356,56826),0,0),c.toDataURL().length>3e3):("simple"===a?d.fillText(String.fromCharCode(55357,56835),0,0):d.fillText(String.fromCharCode(55356,57135),0,0),0!==d.getImageData(16,16,1,1).data[0])):!1}function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g;c.supports={simple:d("simple"),flag:d("flag"),unicode8:d("unicode8")},c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.simple&&c.supports.flag&&c.supports.unicode8||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='bbp-default-css'  href='wp-content/plugins/bbpress/templates/default/css/bbpress.css?ver=2.5.7-5693' type='text/css' media='screen' />
<link rel='stylesheet' id='auth_pages-css'  href='wp-content/plugins/sdk_auth/pages.css?ver=4.4' type='text/css' media='all' />
<link rel='stylesheet' id='twentytwelve-style-css'  href='wp-content/themes/developer/style.css?ver=4.4' type='text/css' media='all' />
<!--[if lt IE 9]>
<link rel='stylesheet' id='twentytwelve-ie-css'  href='https://nodelua.org/wp-content/themes/developer/css/ie.css?ver=20121010' type='text/css' media='all' />
<![endif]-->
<script type='text/javascript' src='wp-includes/js/jquery/jquery.js?ver=1.11.3'></script>
<script type='text/javascript' src='wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1'></script>
<script type='text/javascript' src='wp-content/plugins/sdk_auth/pages.js?ver=4.4'></script>
<link rel='https://api.w.org/' href='wp-json/index.html' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.4" />
<link rel="canonical" href="manage_module_instance_create" />
<link rel='shortlink' href='manage_module_instance_create' />
<link rel="alternate" type="application/json+oembed" href="https://nodelua.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fnodelua.org%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://nodelua.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fnodelua.org%2F&#038;format=xml" />

<style>html { margin-top: 0px !important; }</style>

<script type="text/javascript" charset="utf-8">
$(document).ready(function()
{
	// Collapse everything but the first menu:
	$(".side-nav > ul > li > a").not(".current-page-ancestor > a").find("+ ul").slideUp(1);
	$(".side-nav > ul > li > ul > li > a").not(".current-page-ancestor > a").find("+ ul").slideUp(1);
	// Expand or collapse:
	$(".side-nav > ul > li > a").click(function()
	{
		$(this).find("+ ul").slideToggle("fast");
	});
	$(".side-nav > ul > li > ul > li > a").click(function()
	{
		$(this).find("+ ul").slideToggle("fast");
	});
});
</script>
</head>


<body class="home page page-id-12 page-template page-template-page-templates page-template-front-page page-template-page-templatesfront-page-php manage-page-bg full-width template-front-page single-author">

		<div id="wrapper">
      <!-- Sidebar -->
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="main_menu_home" class="collapse navbar-collapse navbar-ex1-collapse">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
		    <a class="navbar-brand" href="manage_module_instance_create" title="NodeLua" rel="home">NodeLua</a>
                      </div>
          <ul class="nav navbar-nav navbar-right navbar-user">
			<li class="dark" id="li-logout"><div id="icon-login" class="icon"></div><a href="manage_module_instance_create">Log in</a></li>


			<li class="dark" id="li-about-us"><div id="icon-about-us" class="icon"></div><a href="about/us">ABOUT</a></li>
            <li class="dark" id="li-docs"><div id="icon-doc" class="icon"></div><a href="doc/index">DOCS</a></li>
			<li class="dark" id="li-forum"><div id="icon-forum" class="icon"></div><a href="forums">COMMUNITY</a></li>
            <li class="current-page-dark" id="li-home"><div id="icon-home" class="icon"></div><a href="manage_module_instance_create">HOME</a></li>

          </ul>
        </div><!-- /.navbar-collapse -->
      </nav>
	<div class='nav side-nav' id='side-nav'>
	<script>
		$(document).ready(function()
		{
			var panelHeightUpdateFunction = function()
			{
				var newHeight = $(window).height() - 120;
				if ($(window).width() < 740)
				{
					newHeight = "auto";
				}
				$('#side-nav').height(newHeight);
			}


			// Set initial size to match initial content
			panelHeightUpdateFunction();

			$(window).resize(panelHeightUpdateFunction);
		});
	</script>


	<!--<input type="button" id="download_btn" class="highlight_btn" value="下载SDK" onclick="window.location='https://nodelua.org/download_sdk'">-->

	<div class='panel'>
	</div>
</div>

	<article id="post-12" class="post-12 page type-page status-publish hentry">
		<header class="entry-header">
						<h1 class="entry-title">Home</h1>
		</header>

		<div class="entry-content">
			<div class="home_login_block">
<div class="home_login_wrap">
<div id="loginform">
<form name="loginform" id="loginformform" action="manage_module_instance_create" method="post">
<p class="login-notify-none">
Login<span style="color: #86B086;">(SSL protection enabled)</span></p>
	<p class="login-username">
		<input type="text" name="log" id="user_login" class="input" value="" size="20" placeholder="Email">
	</p>
	<p class="login-password">
		<input type="password" name="pwd" id="user_pass" class="input" value="" size="20" placeholder="Password">
	</p>
	<p class="login-remember">
		<label>
		<input name="rememberme" type="checkbox" id="rememberme" value="forever" checked="yes"> Remember me</label>
		<a id="loginforget" href="register?action=lostpassword">Forgot password?</a>
	</p>
	<p class="login-submit">
		<input type="submit" name="wp-submit" id="login-submit" class="normal_btn" value="Login">
		<input type="button" id="login-reg" class="highlight_btn" value="Register" onclick="window.location='https://nodelua.org/register'"/>
		<input type="hidden" name="redirect_to" value="https://nodelua.org/manage_product">
	</p>
	<p class="login-try">
		<a id="logintrybtn" href="javascript:void(0)" onclick="try_using_guest();">Try?</a>
	</p>
</form>
</div>
<div class="home_banner_block">
NodeLua is the FIRST <a target="_blank" href="https://github.com/haroldmars/nodelua">open source</a> lua based firmware runs on ESP8266. The goal is to make IoT programming easier. Not only an interpreter, but with a Web IDE, Cloud APIs, Mobile App libraries, which makes you creating a real 'thing' running on your customers home more robustious and easier. It is currently running on ESP8266 and planned to support more chips, based on the lua language, nodejs-like APIs, but 10 times faster and 100 times smaller than nodejs. <a href="make-your-first-node">Start from here</a>

</div>
<div class="home_slogan_block"></div>
</div>
</div>
<div class="home_feature_block">
<div class="home_feature_wrap">
	<script src="wp-content/themes/developer/js/ace-builds/ace.js" type="text/javascript" charset="utf-8"></script>
	<div class="home_code_box_label">Connect to WIFI router</div>
	<div class="home_code_box_label">Post data to cloud service</div>

	<div class="home_code_box home_code_box_small">
		<div id="example1" class="code">
wifi.setmode(wifi.STATION)
wifi.config("SSID", "PASSWORD")</div>

		<script>
			codeblock("example1", 4);
		</script>
	</div>

	<div class="home_code_box home_code_box_small">
		<div id="example2" class="code">
--CloudID can be allocated in the Web IDE
cloud=Cloud:new("CloudID")
cloud:append(78.8)</div>
		<script>
			codeblock("example2", 4);
		</script>
	</div>

	<div class="home_code_box_label">Timers</div>
	<div class="home_code_box_label">GPIO</div>

	<div class="home_code_box">
		<div id="example3" class="code">
timer=Timer:new()
timer:setInterval(function()
	--Do your periodic work here
end, 500) --milliseconds</div>

		<script>
			codeblock("example3", 10);
		</script>
	</div>

	<div class="home_code_box">
		<div id="example4" class="code">
pin=2

--OUTPUT
gpio.mode(pin, gpio.OUTPUT)
gpio.write(pin, gpio.LOW)

--INPUT
gpio.mode(pin, gpio.INPUT)
value = gpio.read(pin)</div>

		<script>
			codeblock("example4", 10);
		</script>
	</div>

</div>
</div>
<div class="home_footer_block">
	<div class="home_footer_wrap">
	</div>
	<div class="home_footer_wrap2"><br/><br/><br/>Copyright 2014 NodeLua.org</div>
</div>
					</div><!-- .entry-content -->
		<footer class="entry-meta">
					</footer><!-- .entry-meta -->
	</article><!-- #post -->

</div><!-- #wrapper -->
</body>
</html>