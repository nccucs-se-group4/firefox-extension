self.port.on('scrollTo', function(elID){
    window.onload = function(){
    	showIt(elID);
    	function showIt(elID) {
    		var allImages = document.getElementsByTagName("img");

    		for (var i = 0, len = allImages.length; i < len; i++) {
        	    if (allImages[i].alt == elID) {
			allImages[i].parentNode.parentNode.removeAttribute("class");
			allImages[i].parentNode.parentNode.style="background-color:#00FF00";
            		break;
        	    }
    		}
    		allImages[i].scrollIntoView(true);
		window.scrollTo(0,window.scrollY-60);
    	}
    }
})
