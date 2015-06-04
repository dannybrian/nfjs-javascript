// type coercion and equality

console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log("Bob" < "Neil");
// → true

// possibly surprising:

console.log(false == 0);
// → true, type coercion
console.log(null == undefined);
// → true, undefined is a variable in the global scope;
// null is a literal to indicate empty value.
console.log(null == 0);
// → false

typeof null // object (bug in ECMAScript, should be null)
typeof undefined // undefined
null === undefined // false
null == undefined // true

console.log(null === undefined);
// → false