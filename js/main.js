$(function(){
    $('article').jmpress({
        stepSelector: 'section',
        hash: {
//            use: false
        },
        viewPort: {
            height: 500,
            width: 1000,
            maxScale: 1
        },
        mouse: {
            clickSelects: false
        },
        keyboard: {
            use: true,
        },
        animation: {
            transitionDuration: '1s'
        }
    });
    window.API = $('article').data('jmpressmethods');
    $(document).trigger('jmsReady');
});
