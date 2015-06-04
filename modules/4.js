// an example of a complete module

var basketModule = (function () {
    // privates
    var basket = [];

    function doSomethingPrivate() {}

    // Return an object exposed to the public
    return {
        // Add items to our basket
        addItem: function (values) {
            basket.push(values);
        },
        // Get the count of items in the basket
        getItemCount: function () {
            return basket.length;
        },
        // Public alias to a private function
        doSomething: doSomethingPrivate,
        // Get the total value of items in the basket
        getTotal: function () {
            var q = this.getItemCount(),
                p = 0;
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    };
})();

basketModule.addItem({
    item: "bread",
    price: 0.5
});

basketModule.addItem({
    item: "butter",
    price: 0.3
});

// Outputs: 2
console.log(basketModule.getItemCount());