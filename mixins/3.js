// injecting mixin

function asDeveloper(dest) {
    dest.writeCode = function () {
        // code it up
    }
}

function asDesigner(dest) {
    dest.designUI = function () {
        // create the design
    }
}

var danny = {};
asDeveloper(danny);