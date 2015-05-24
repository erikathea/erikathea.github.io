(function() {
    var pathEasing = skrollr.easingFromPath(document.getElementById('path-scribble'), {
        weights: [,,,,,,,,,,,,,,,,,0.1]
    });

    skrollr.init({
        forceHeight: false,
        easing: {
            pathx: pathEasing.x,
            pathy: pathEasing.y,
            angle: pathEasing.angle
        },
        edgeStrategy: 'ease',
        render: function(data) {
            if(data.curTop === data.maxTop) {
                this.setScrollTop(0, true);
            }
        }
    });
}());
