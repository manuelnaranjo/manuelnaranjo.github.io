$(function(){
    $('article').jmpress({
        stepSelector: 'section',
        //hash: {
            // use: false
        //},
        viewPort: {
            height: 750,
            width: 1000,
            maxScale: 10,
            minScale: 1.,
            zoomable: 10
        },
        //mouse: {
        //    clickSelects: true
        //},
        //keyboard: {
            // use: true,
        //},
        animation: {
            transitionDuration: '1s'
        },
        //zoomable: 10
    });

    window.API = $('article').data('jmpressmethods');
    $(document).trigger('jmsReady');

    $(window).mousedown(function(event){
        if (event.which === 3) {
            var nevent = $.Event('keydown');
            nevent.which = nevent.keyCode = 37;
            $('body').trigger(nevent);
            return false;
        }
    });
    $(window).click(function(event){
        var nevent = $.Event('keydown');
        nevent.which = nevent.keyCode = 39;
        $('body').trigger(nevent);
    })
});
