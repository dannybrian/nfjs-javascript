// caching injecting mixin

var asDeveloper = (function () {
    function writeCode() {
        // code it up
    }
    return function () {
        this.writeCode = writeCode;
    }
})();

var danny = {};
asDeveloper.call(danny);