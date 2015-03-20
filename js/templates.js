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
})()
