var data = require("sdk/self").data;
var tag = "p";
var ly = "";

var pageMod = require("sdk/page-mod").PageMod({
  include: "*.yahoo.com",
  contentScriptWhen: 'end',
  contentScriptFile: [data.url("data.js"), data.url("myscript.js"), data.url("jquery-1.11.1.min.js")],
  contentStyleFile: [data.url("mystyles.css")],
  onAttach: function(worker) {
     worker.port.emit('findLyInform', tag);
     worker.port.on('lyInform', function(lyInform) {
    	//console.log(lyInform);
	ly = lyInform;

     });
  }
});

var InformPanel = require("sdk/panel").Panel({
  width: 360,
  height: 360,
  position: {
    bottom: 0,
    right: 0
  },
  contentURL: data.url("test.html")
  //contentScriptFile: data.url("panel.js")
});

InformPanel.on("show", function() {
  InformPanel.port.emit('showLyInform',ly);
});

InformPanel.on("hide", function() {
  InformPanel.port.emit('killLyInform',ly);
});

/*InformPanel.port.on('lyWin', function(url){
	var windows = require("sdk/windows").browserWindows;

	windows.open({
		url: url, 
	 	width: 1000,
		height: 600
	});
});*/

InformPanel.port.on('modLink', function(msg){
  var lyPageMod = require("sdk/page-mod").PageMod({
  	include: "http://billy3321.github.io/lytel/",
  	contentScriptWhen: 'ready',
  	contentScriptFile: [data.url("scroll.js")],
	onAttach: function(worker) {
     		worker.port.emit('scrollTo', msg);
	}
    });
});

InformPanel.port.on('modLink2', function(msg){
  var lyPageMod = require("sdk/page-mod").PageMod({
  	include: "http://to.13pa.tw/#ranking",
  	contentScriptWhen: 'ready',
  	contentScriptFile: [data.url("scroll2.js")],
	onAttach: function(worker) {
     		worker.port.emit('scrollTo2', msg);
	}
    });
});

var widget = require("sdk/widget").Widget({
  id: "caller-icon",
  width:24,
  height:24,
  label: "News Caller",
  contentURL: data.url("widget.jpg"),
  panel: InformPanel,
  onClick: function(){

  }
});



