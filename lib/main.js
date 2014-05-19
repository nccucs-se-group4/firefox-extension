var data = require("sdk/self").data;
var tag = "p";
var ly = "";

var pageMod = require("sdk/page-mod").PageMod({
  include: "*.yahoo.com",
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("data.js"), data.url("myscript.js")],
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
  contentURL: data.url("test.html")
  //contentScriptFile: data.url("panel.js")
});

InformPanel.on("show", function() {
  InformPanel.port.emit('showLyInform',ly);
});

InformPanel.on("hide", function() {
  InformPanel.port.emit('killLyInform',ly);
});

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

var widget = require("sdk/widget").Widget({
  id: "test-icon",
  label: "Test Widget",
  content: "TEST!!",
  panel: InformPanel,
  onClick: function(){
      //return InformPanel.port.emit('showLyInform',ly);
  }
});



