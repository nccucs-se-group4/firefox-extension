self.port.on('scrollTo2', function(elID){
    window.onload = function(){
    	setTimeout(function(){showIt(elID);},1000);
    	function showIt(elID) {
		var content = "<nobr>"+elID+"</nobr>";
    		var allImages = document.getElementsByTagName("a");

    		for (var i = 0, len = allImages.length; i < len; i++) {
		    if (allImages[i].target == "_blank"){
        	    	if (allImages[i].innerHTML == content) {
            			break;
        	    	}
		    }
    		}
		try {
    		    allImages[i].scrollIntoView(true);
		    //console.log(window.scrollY);
		    window.scrollTo(0,window.scrollY-130);
		} catch ( e ) {
		    alert("不分區立委無法罷免");
		}
    	}
    }
})
