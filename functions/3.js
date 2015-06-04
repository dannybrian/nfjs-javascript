// closures "freeze" variable values referened in an outer
// function. This enables a factor pattern.

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10