// document as event bus, "deprecated" but works.

var myevent = document.createEvent("MyEvent");
myevent.initEvent("connected", true, true); // type, bubbles, cancelable

element.addEventListener('MyEvent', function (e) {
    // do something
});

document.dispatchEvent(myevent);