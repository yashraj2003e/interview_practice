/*

On top of javascript, typescript offer
an additional layer
-> the type system

js provides primitive data types
doesn't check if we have consistently applied these
Typescript does it for us !!!

-> TS highlights unexpected behaviour in code
-> reducing bugs !!!
*/
var k = "hello";
k = 2;
var user = {
    username: "Yashraj",
    id: 1,
};
// console.log(user);
var userAccount = /** @class */ (function () {
    function userAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return userAccount;
}());
var acc1 = new userAccount("Yashraj", 1);
console.log(acc1);
function returnString(name) {
    return 1;
}
console.log(returnString(1));
function requiresBool(param) {
    console.log(param);
}
requiresBool("hi");
// One more use-case of union
function takeStringOrStringArray(obj) {
    console.log(obj.length);
}
takeStringOrStringArray([1, 2, 3, 4]);
var bagpack = {
    add: function (obj) { return console.log(obj); },
    get: function () { return null; },
};
bagpack.add("hello");
console.log(bagpack.get());
function logPoint(p) {
    console.log("".concat(p.x, ",").concat(p.y));
}
// This works because of structural type system !!
logPoint({ x: 1, y: 2 });
var p = {
    x: 1,
    y: 2,
};
logPoint(p);
var Test = /** @class */ (function () {
    function Test(x, y) {
        this.x = x;
        this.y = y;
    }
    return Test;
}());
var newPoint = new Test(1, 2);
logPoint(newPoint);
// Invalid because it doesn't match the subset !!
logPoint({ hex: "#123" });
// STATIC TYPE CHECKING
var a = {
    name: 1,
    id: 2,
};
console.log(a.b);
// @noErrors
var announcement = "Hello World!";
// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
// We probably meant to write this...
announcement.toLocaleLowerCase();
var flip = function () { return Math.random < 0.5; };
console.log(flip());
