// singleton using closures

var Universe;

(function () {
    var instance;
    Universe = function Universe() {
        // start
        if (instance) {
            return instance;
        }
        instance = this;
        // end

        // all the functionality
        this.start_time = 0;
        this.bang = "Big";
    };
}());

var s1 = new Universe();
var s2 = new Universe();

s1 === s2;