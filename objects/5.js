// scoping gotches, self, and bind()

pile.remind = function (time) {
    setTimeout(function () {
        alert("Don't forget these " + this.elements.length + " elements!");
    }, time);
}

pile.remind(2000);

// → Cannot read property 'length' of undefined.
// A language design blunder?

// use a locally scoped reference.
pile.remind = function (time) {
    var self = this;
    setTimeout(function () {
        alert("Don't forget these " + self.elements.length + " elements!");
    }, time);
}

// or use a bind if you want to feel smarter.
pile.remind = function (time) {
    setTimeout(function () {
        alert("Don't forget these " + this.elements.length + " elements!");
    }.bind(this), time);
}