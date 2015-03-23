$(function(){
    var divs = $('section video').parent()
    divs.on('enterStep', function(event){
        var video= $(this).find('video');
        console.log('#video enterStep');
        setTimeout(function(){
            video.get(0).play();
        }, 1000);
    });

    divs.on('leaveStep', function(event){
        divs.each(function(){
            $(this).find('video').get(0).pause();
        })
        console.log('#videos leaveStep');
    });
});
