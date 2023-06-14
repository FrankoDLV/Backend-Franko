const result = Math.pow(10, 2);

// Math.pow es para elevar un numero, en este caso 10 a la 2

// console.log({ result });

const names = [
  "Santiago",
  "Manuel",
  "Frankitoelmejor",
  "Fatima",
  "Francisco",
  "Ricardito",
];
const myName = "Ricardito";
// const newNames = [];

// for (let i = 0; 1 <= names.length - 1; i++) {
//   const name = names[i].toLowerCase();
//   newNames.push(name);
// }

const newNames = names
  .map((el) => el.toLowerCase())
  .filter((el) => el[0] === "f");

//estamos pasando todos los nombres a minuscula para ser mas generales, y pedimos que nos filtre por todos los
//nombres que empiecen con f

const filteredNames = names.filter((el) => el[0] !== "f");

const exists = names.includes(myName);

//console.log({ newNames, filteredNames, exists });

// ES8

const user = {
  name: "Franko",
  apellido: "De la Vega",
  edad: 30,
  direccion: "Ignacio Molina 586",
};

const entries = Object.entries(user);
// Palabra reservada OBJET. luego viene el metodo en este caso "entries" y despues pasamos como parametro
//el objeto del cual queremos devolver sus entradas

const keys = Object.keys(user);
const values = Object.values(user);

//console.log({ entries, keys, values });

const output = entries.reduce((output, el) => {
  output += `${el[0]}:${el[1]}`;

  return output;
}, "");

// ES9 !!!!

const user2 = {
  name: "Franko",
  apellido: "De la Vega",
  edad: 30,
  direccion: "Ignacio Molina 586",
};

// const name = user2.name;
// const direccion = user2.direccion;
// ES LO MISMO QUE PONER DE LA SIGUIENTE MANERA :

const { name, direccion } = user2;

//console.log(name, direccion);

// ACTIVIDAD

const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

// ["manzanas","peras","carnes"]

const productos = objetos.map((el) => {
  const elArray = Object.keys(el);

  return elArray.join(",");
});
console.log(productos.join(','));
