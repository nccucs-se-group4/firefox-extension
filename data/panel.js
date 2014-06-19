var tempWin;

addon.port.on('showLyInform', function(lyInform){
    if (tempWin != null){
	tempWin.close();	
    }

    if (lyInform != ""){
    	var station = lyInform.split("\n");
    	for (var i = 0; i < station.length-1; i++) {
     	    create_new_row_button(document.getElementById("brook"),
            station[i]);
    	}
    }
});

addon.port.on('killLyInform', function(lyInform){
	removeElement();
});



function create_new_row_button(eT, msg) {
    var eR = document.createElement("tr");
    var eC = document.createElement("td");
    var eB =document.createTextNode(msg);
    var eD = document.createElement("td");
    var tel = document.createElement("img");
    var eE = document.createElement("td");
    var zb = document.createElement("img");

    /*eB.type = "button";
    eB.value= msg;
    eB.style.height = "70px";
    eB.style.width = "100px";*/

    tel.setAttribute("src", "tel.jpg");
    tel.setAttribute("title", "tel");
    tel.setAttribute("height", "60");
    tel.setAttribute("width", "80"); 
    tel.setAttribute("onmouseover", "");
    tel.setAttribute("style", "cursor: pointer;");
    tel.onclick = function(){ShowTel(msg);};

    zb.setAttribute("src", "zb.jpg");
    zb.setAttribute("height", "60");
    zb.setAttribute("width", "80");
    zb.setAttribute("title", "zb");
    zb.setAttribute("onmouseover", "");
    zb.setAttribute("style", "cursor: pointer;");
    zb.onclick = function(){ShowZb(msg);};

    eT.appendChild(eR);
    eR.appendChild(eC);
    eC.appendChild(eB);
    eD.appendChild(tel);
    eR.appendChild(eD);
    eE.appendChild(zb);
    eR.appendChild(eE);
}

function removeElement() {
  var element = document.getElementById("brook");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

}

function ShowTel(msg){
    //alert(msg);
    
    var windowObjectReference;
    var strWindowFeatures = "menubar=yes,location=no,resizable=yes,scrollbars=yes,status=yes,width=1000, height=600";

    function openRequestedPopup() {
        windowObjectReference = window.open("http://billy3321.github.io/lytel/", "lytel", strWindowFeatures);
	windowObjectReference.focus();
    }
    openRequestedPopup();
    //addon.port.emit('lyWin',"http://billy3321.github.io/lytel/");
    addon.port.emit('modLink',msg);
    tempWin = windowObjectReference;
}

function ShowZb(msg){
    //alert(msg);
    
    var windowObjectReference;
    var strWindowFeatures = "menubar=yes,location=no,resizable=yes,scrollbars=yes,status=yes,width=1000, height=220";

    function openRequestedPopup() {
        windowObjectReference = window.open("http://to.13pa.tw/#ranking", "lyzb", strWindowFeatures);
	windowObjectReference.focus();
    }
    openRequestedPopup();
    //addon.port.emit('lyWin',"http://billy3321.github.io/lytel/");
    addon.port.emit('modLink2',msg);
    tempWin = windowObjectReference;
}


