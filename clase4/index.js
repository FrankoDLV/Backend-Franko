const obj = {
  name: "Franko",
};

const obj2 = {
  name: "Leonardo",
};

console.log({ obj, obj2 });

const timer = setInterval(() => {
  console.log("Hola");
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 8000);
 