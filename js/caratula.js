$(function(){
    'use strict';
    var handled = false;
    var div = $("#caratula");

    var disableSpace = function() {
        API.settings().keyboard.ignore['BODY'] = [32, 37, 39];
        $(document).bind('keydown', handle);
    };

    var enableSpace = function() {
        delete API.settings().keyboard.ignore['BODY'];
        $(document).unbind('keydown', handle);
    };

    var tachar = function() {
        div.find('.original')
            .wrap('<del></del>')
            .fadeOut('slow', function(){
                div.find('.enchula').fadeIn('slow', function(){
                    console.log('fade done');
                });
            });
    };

    var restablecer = function() {
        div.find('del').replaceWith(div.find('.original'));
        div.find('.original').show();
        div.find('.enchula').hide();
    };

    var handle = function(event) {
        console.log('handleEvent');
        var valid = [17, 18, 32, 37, 39];
        if (valid.indexOf(event.keyCode) === -1) {
            console.log('not our keycode', event.keyCode);
            return true;
        }

        if (event.keyCode === 37) {
            if (handled) {
                restablecer();
                handled = false;
                return true;
            }
            API.prev();
            return false;
        }

        if (handled) {
            console.log('handled');
            setTimeout(function(){
                enableSpace();
                API.next();
            }, 100);
            return false;
        }

        console.log('handling');
        handled = true;
        tachar();
        return false;
    }

    div.on('enterStep', function(event){
        console.log('#caratula enterStep');
        handled = false;
        restablecer();
        setTimeout(function(){
            disableSpace();
        }, 1);
        return false;
    });

    div.on('leaveStep', function(event){
        console.log('#caratula leaveStep');
        enableSpace();
    });
});
