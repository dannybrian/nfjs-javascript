// for loops

// populate an array
var myarray = Array.apply(null, new Array(100)).map(function () {
    return 5
});

// sub-optimal loop
for (var i = 0; i < myarray.length; i++) {
    // do something with myarray[i]
}

// optimization 1 - cache the length of the array with the use of `max`
for (var i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
    // this makes more sense with HTMLCollections because
    // they are "live", computing length each time.
    // see below.
}

// optimization 2 - use single var pattern for consistency
// NOTE: A drawback is that it makes it a little harder to copy and paste whole loops while refactoring code.
var i = 0,
    max,
    myarray = [];
for (i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
}

// optimization 3 - substitute `i++` with `i = i + 1`  or `i += 1` to avoid excessive trickiness
var i = 0,
    max,
    myarray = [];
for (i = 0, max = myarray.length; i < max; i += 1) {
    // do something with myarray[i]
}

// preferred 1?
var i;
for (i = myarray.length; i--;) {
    // do something with myarray[i]
}

// preferred 2?
var i = myarray.length;
while (i--) {
    // do something with myarray[i]
}

// forEach alternative
myarray.forEach(function (value) {
    console.log(value);
});

// HTMLCollection example (not really an array)
var myarray = document.getElementsByClassName('ellist');

// show typeof, .constructor.name, instanceof

// suboptimal
for (var i = 0; i < myarray.length; i++) {
    // do something with myarray[i]
}

// caching length
for (var i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
}