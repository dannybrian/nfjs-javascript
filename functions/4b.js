// proper list filter

var scientists = [
    {
        name: "Nikola Tesla",
        type: "inventor"
    },
    {
        name: "Marie Curie",
        type: "chemist"
    },
    {
        name: "Ada Lovelace",
        type: "mathematician"
    },
    {
        name: "Claude Shannon",
        type: "engineer"
    },
];

// Reusable filtering.
var inventors = scientists.filter(
    function (element) {
        return element.type === "inventor";
    }
);

// As a reusable funtion.
function myFilter(arr, value) {
    return arr.filter(function (element) {
        return element.type === value;
    });
}
inventors = myFilter(scientists, "inventor");

// As an immediately invoked expression.
(function (arr, value) {
    return arr.filter(function (element) {
        return element.type === value;
    });
})(scientists, "inventor");