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

let k = "hello";
k = 2;

interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Yashraj",
  id: 1,
};

// console.log(user);

class userAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const acc1 = new userAccount("Yashraj", 1);
console.log(acc1);

function returnString(name: String): number {
  return 1;
}

console.log(returnString(1));

// Union, either true or false !!!
type myBool = true | false;

function requiresBool(param: myBool) {
  console.log(param);
}

requiresBool("hi");

// Popular use-case, to define set of strings or numbers literal

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// One more use-case of union

function takeStringOrStringArray(obj: string | number[]): void {
  console.log(obj.length);
}

takeStringOrStringArray([1, 2, 3, 4]);

// Generics
// Provide variables to types

type stringArray = Array<string>;

interface Bagpack<Type> {
  add: (obj: Type) => void;
  get: () => void;
}

let bagpack: Bagpack<string> = {
  add: (obj: string) => console.log(obj),
  get: () => null,
};

bagpack.add("hello");
console.log(bagpack.get());

// Structural Type System
/*

In a structural type system

if two objects have same shape, they are considered to be
of the same type.

-> It should just match system of parameters passed !!
*/

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x},${p.y}`);
}

// This works because of structural type system !!
logPoint({ x: 1, y: 2 });

const p: Point = {
  x: 1,
  y: 2,
};

logPoint(p);

class Test {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newPoint = new Test(1, 2);

logPoint(newPoint);

// Invalid because it doesn't match the subset !!
logPoint({ hex: "#123" });

// STATIC TYPE CHECKING

const a = {
  name: 1,
  id: 2,
};

console.log(a.b);

// @noErrors
const announcement = "Hello World!";

// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();

const flip = () => Math.random < 0.5;

console.log(flip());
