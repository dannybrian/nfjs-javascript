// avoiding globals, intentional or otherwise

function sum(x, y) {
    // antipattern: implied global 
    result = x + y;
    return result;
}

// antipattern, do not use 
function foo() {
    var a = b = 0;
    // right-to-left evaluation, same as
    // var a = (b = 0);
}

// hoisting antipattern 
myname = "global"; // global variable 
function func() {
    console.log(myname); // "undefined" 
    var myname = "local";
    console.log(myname); // "local"
}
func();

// behaves like this:
myname = "global"; // global variable 
function func() {
    var myname; // same as -> var myname = undefined;
    alert(myname); // "undefined"
    myname = "local";
    alert(myname); // "local" 
}
func();