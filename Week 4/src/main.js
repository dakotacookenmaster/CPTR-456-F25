// console.log("Hello, World!");

// const x = [1, 2, 3];

// x.push(6);

// let y;
// if(10 < 0) {
//   y = 4;
// } else {
//   y = 6;
// }

// for(let i = 0; i < 10; i++) {

// }

// for(const value in x) {
//   value = "abc";
// }

function add(a, b, c) {
  if(typeof a !== "number" || typeof b !== "number") {
    return "INVALID";
  }
  return a + b;
}

console.log(add(-1, "hi"));

const x = 4;


const animal = {
  "habitat": "forest",
}

animal[x]
