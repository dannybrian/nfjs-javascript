// access to the Global Object
// (without hardcoding the identifier window)

var global = (function () {
    return this || (1, eval)('this');
}());

/* Test Cases
   http://jsperf.com/globalx
   References
   http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
*/