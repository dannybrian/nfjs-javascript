// CustomEvent, not (yet) supported in IE

// add an appropriate event listener
var elem = document.querySelector('div');
elem.addEventListener("cat", function (e) {
    console.log(e)
});

// create and dispatch the event
var event = new CustomEvent("cat", {
    detail: {
        hazcheeseburger: true
    }
});
elem.dispatchEvent(event);