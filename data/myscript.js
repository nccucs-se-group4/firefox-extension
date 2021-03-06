self.port.on('findLyInform', function(tag){

    var objects = document.getElementById("mediaarticlebody").getElementsByTagName(tag);
    var content;
    var lyInform="";
    var contentHTML = "";
    var count = 0;

    for(var i=0;i<objects.length;i++){
        content += objects[i].innerHTML;
    }

    for(var i=0;i<LyList.length;i++){
        var reg = new RegExp(LyList[i].name);
        if(reg.test(content)){
 	    lyInform += (LyList[i].name+"\n");
	    contentHTML += "<div class='chat-box-content'>";
            contentHTML += "<img class='chat-box-content-img' src='" + LyList[i].avatar + "'></img>"; 
            contentHTML += "<a class='chat-box-content-toggle' href='#'>" + LyList[i].name + " (" + LyList[i].party + ")" + "</a>";
            
            contentHTML += "<div class='chat-box-content-contact'>"; 
            $.each(LyList[i].contact, function (key, val) {
                key = $.trim(key);
                if(key){
                    contentHTML += '<div>' + key + '<br>';
                    if (val['phone'] != undefined)
                        contentHTML += '電話：<a href="tel:' + val['phone'] + '">' + val['phone'] + '</a><br>';
                    if (val['address'] != undefined)
                        contentHTML += '地址：<a href="http://maps.google.com.tw/?q=' + val['address'] + '">' + val['address'] + '</a>';
                     contentHTML += '</div>';
                }
            });
            contentHTML += "</div></div>";
            count++;
        }
    }
    if(count>0) {
        $('body').prepend(        
            "<div>" +
                "<div class='chat-box'>" +
                    "<input type='checkbox' />" +
                    "<label data-expanded='看新聞ㄎㄚˋ電話' data-collapsed='看新聞ㄎㄚˋ電話 ("+count+")'></label>" +
                    contentHTML +
                "</div>" +
            "</div>"
        ); 

        $('.chat-box-content').find('div').hide();
    }
    
    $('.chat-box-content').click(function() {
        $(this).find('div').toggle();
        //console.log($(this).find('div').html());
    });

    return self.port.emit('lyInform',lyInform);
})
