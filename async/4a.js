// create a promose:
var promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then…

    if ( true /* everything turned out fine */ ) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});

// use that promise:
promise.then(function (result) {
    console.log(result); // "Stuff worked!"
}, function (err) {
    console.log(err); // Error: "It broke"
});
