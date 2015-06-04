// simple extend mixin

function extend(destination, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            destination[k] = source[k];
        }
    }
    return destination;
}

var developer = {
    writeCode: function () {
        // code it up
    }
}
var designer = {
    designUI: function () {
        // create the design
    }
};

var danny = {};
extend(danny, developer);
extend(danny, designer);