(function(){
    var dX = 1100;
    var dY = 600;

    $.jmpress("template", "auto", {
        children: function(idx, child, children) {
            var preX = children.length > 1 ? -dX : 0;

            return {
                y: dY,
                x: preX + idx * dX,
                scale: 0.5,
                template: 'auto'
            };
        }
    });

    $.jmpress("template", "vertical",{
        children: function(idx) {
            return {
                y: dY * (idx+1),
                x: 0,
                scale: 0.5,
            };
        }
    });

    $.jmpress("template", "carrousel",{
        children: function(idx, child, childs) {
            var k = 0;
            if (childs.length > 0) {
                k = 360 / childs.length;

            }
            return {
                r: (idx % 2 === 0 ? 350 : 400),
                phi: idx * k,
                rotateY: idx * k,
                scale: {
                    x: .7,//(idx % 2 === 0 ? .7 : .7),
                    y: .1//(idx % 2 === 0 ? .1 : .1)
                },
                x: 0,
                y: 0,
                rotateX: 90,

            };
        }
    });

    $.jmpress("template", "carrousel-2",{
        children: function(idx, child, childs) {
            var k = 0;
            if (childs.length > 0) {
                k = 360 / childs.length;

            }
            return {
                r: (idx % 2 === 0 ? 750 : 800),
                phi: idx * k,
                rotateY: idx * k,
                scale: {
                    x: .7,//(idx % 2 === 0 ? .7 : .7),
                    y: .1//(idx % 2 === 0 ? .1 : .1)
                },
                x: 0,
                y: 0,
                rotateX: 90,

            };
        }
    });


    var rowLength = 4;
    var margin = 50;
    var dx = (dX - margin / 2) / rowLength;

    $.jmpress('template', 'random-12-disp',{
        scale: 0.2,
        secondary: {'': 'self', scale: 2, x: dX*1.3, y: dY*1.3}
    });

    $.jmpress("template", "random-12",{
        children: [
            {x: -300, y:-200, rotate: 33,  template: 'random-12-disp'},
            {x: -100, y:-180, rotate:-41,  template: 'random-12-disp'},
            {x:  100, y:-220, rotate:-20,  template: 'random-12-disp'},
            {x:  300, y:-210, rotate: 39,  template: 'random-12-disp'},

            {x: -300, y: 000, rotate:-10, template: 'random-12-disp'},
            {x: -100, y: 000, rotate:  0, template: 'random-12-disp'},
            {x:  100, y: 000, rotate: 25, template: 'random-12-disp'},
            {x:  300, y: 000, rotate:-20, template: 'random-12-disp'},

            {x: -300, y: 200, rotate: 13, template: 'random-12-disp'},
            {x: -100, y: 200, rotate:-30, template: 'random-12-disp'},
            {x:  100, y: 200, rotate:-10, template: 'random-12-disp'},
            {x:  300, y: 200, rotate: 20, template: 'random-12-disp'},
        ]
    });

})()
