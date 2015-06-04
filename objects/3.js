// getting formal with Object

// Set properties
var myObject = {};
Object.defineProperty(myObject, "someKey", {    
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
}); 
// If the above feels a little difficult to read, a short-hand could
// be written as follows:
 
var defineProp = function (obj, key, value) {  
    var config = {    
        value: value,
        writable: false,
        enumerable: true,
        configurable: true  
    };  
    Object.defineProperty(obj, key, config);
}; 
// To use, we then create a new empty "person" object
var person = Object.create(Object.prototype); 
// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false); 
console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
  
// 4. Object.defineProperties
 
// Set properties
Object.defineProperties(myObject, {   
    "someKey": {    
        value: "Hello World",
            writable: true  
    },
    "anotherKey": {    
        value: "Foo bar",
            writable: false  
    }
});

// allows for inheritance: 

// Create a race car driver that inherits from the person object
var driver = Object.create(person); 
// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph"); 
// Get an inherited property (1981)
console.log(driver.dateOfBirth); 
// Get the property we set (100mph)
console.log(driver.topSpeed);