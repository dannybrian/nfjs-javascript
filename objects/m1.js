Object.create(Object.prototype);

Object.defineProperty(newObject, “someKey”, {
    value: "some value",
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperties();

var driver = Object.create(person);