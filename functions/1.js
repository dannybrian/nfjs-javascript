// first class functions give us language flexibility.

function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat(3, function (n) {
    unless(n % 2, function () {
        console.log(n, "is even");
    });
});

// → 0 is even
// → 2 is even