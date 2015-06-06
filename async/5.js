function test(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (value % 2 === 0) {
                resolve("even!");
            } else {
                reject("odd!");
            }
        }, 2000);
    });
}

test(2); // does nothing

test(2).then(function (response) {
        console.log("Success: ", response);
    },
    function (response) {
        console.log("Failure: ", response);
    }
);