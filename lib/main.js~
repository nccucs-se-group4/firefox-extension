var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

tabs.on('open', function onOpen() {
  console.log('open');
});


pageMod.PageMod({
  include: "*.yahoo.com",
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("data.js"), data.url("myscript.js")]
  //contentScript: 'window.alert("hihi");'
});
/* Listen for tab content loads.
tabs.on('ready', function() {
  console.log('ready');
  contentScript: 'window.alert("Page matches ruleset");'

  var objects = document.getElementById("mediaarticlebody").getElementsByTagName("p");
  var content;

    for(var i=0;i<objects.length;i++){
        content += objects[i].innerHTML;
    }
    for(var i=0;i<LyList.length;i++){
        var reg = new RegExp(LyList[i].name);
        if(reg.test(content)){
            console.log(LyList[i].name+" "+LyList[i].party);    
        }
    }
});*/
