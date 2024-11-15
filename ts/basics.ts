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
