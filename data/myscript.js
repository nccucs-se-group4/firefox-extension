self.port.on('findLyInform', function(tag){

    var objects = document.getElementById("mediaarticlebody").getElementsByTagName(tag);
    var content;
    var lyInform="";

    for(var i=0;i<objects.length;i++){
        content += objects[i].innerHTML;
    }

    for(var i=0;i<LyList.length;i++){
        var reg = new RegExp(LyList[i].name);
        if(reg.test(content)){
 	    lyInform += (LyList[i].name+"\n");
        }
    }
    return self.port.emit('lyInform',lyInform);
})
