var nulo = null;

// scope 0 (padre)
let bar = 1;
if (true) {
  // scope 1 (hijo)
  bar = 2;

  //console.log(bar);
}

// console.log(bar);

const foo = 3;

//foo = 4;

//console.log(foo);

const user = {
  name: "Iram",
  lastname: "perez",
};

const user2 = user;

user.name = "Frankito0o0o0";

//console.log({ foo, user, user2 });

let x = 12;
let y = x;
x = 13;

//console.log({ x, y });

function suma(a, b) {
  return a + b;
}

//const suma = (a, b) => {
// return a + b;
//};

const resultado = suma(10, 200);

const duplicate = (num) => num * 2;
const duplicado = duplicate(5);

console.log({ resultado, duplicado });
