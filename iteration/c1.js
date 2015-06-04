// iteration challenge #1

var i;
for (i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("FizzBuzz");
        } else {
            console.log("Fizz");
        }
    } else {
        if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// easier to read and more clever
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}