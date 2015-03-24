$(function(){
    var w = $(window).width() > 640 ? 800 : 640;
    var h = $(window).width() > 640 ? 600 : 480;

    $('article').jmpress({
        stepSelector: 'section',
        //hash: {
            // use: false
        //},
        viewPort: {
            width: 800,
            height: 600,
            maxScale: 10,
            minScale: 1.,
            zoomable: 10
        },
        mouse: {
            clickSelects: false,
        },
        //keyboard: {
            // use: true,
        //},
        animation: {
            transitionDuration: '1s'
        },
        presentationMode: {
            url: './presentation-screen.html',
            notesUrl: './notas.html'
        }
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

    $('.small-random section')
        .click(function(){
            var id = $(this).attr('id');
            console.log($(this));
            //API.goTo('#' + id);
            $('article').jmpress('select', '#'+id, 'click');
            return false;
        });
});
