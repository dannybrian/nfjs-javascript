// simple list filter

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

var inventors = [];

// One-off filtering.
for (var i = 0; i < scientists.length; i++) {
    if (scientists[i].type === "inventor")
        inventors.push(scientists[i]);
}