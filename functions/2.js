// closures: what's wrong here?
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 500);
}

// what's wrong here?
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 500 * i);
}

// what's wrong here?
function queueTimeout(func) {
    setTimeout(func, 500);
}
for (var i = 1; i <= 5; i++) {
    queueTimeout(function () {
        console.log(i)
    });
}


function queueTimeout(i) {
    setTimeout(function () {
        console.log(i);
    }, 1000 * i);
}
for (var i = 1; i <= 5; i++) {
    queueTimeout(i);
}
// closure now refers to different instantiations of 'i'



// Using an IIFE inline
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j)
        }, 500)
    })(i);
}