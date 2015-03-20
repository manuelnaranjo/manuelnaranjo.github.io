(function(){
    $.jmpress("template", "auto", {
        children: function(idx) {
            return {
                y: 600,
                x: -1100 + idx * 1100,
                scale: 0.5,
                template: 'auto'
                //rotate: 0,
            };
        }
    });
    $.jmpress('template', 'main', {
        children: function(idx) {
            return {
                x: 1000 * idx,
                //rotate: 0,
                template: 'main'
            }
        }
    })
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
