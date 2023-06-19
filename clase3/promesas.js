const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      return reject("Error: No puedes dividr sobre 0");
    }

    return resolve(a / b);
  });
};

const resultado = dividir(4, 2);

console.log({ resultado });

dividir(4, 2)
  .then((result) => {
    console.log({ result });

    const result2 = dividir(9, 3);
    console.log({ result2 });
  })
  .catch((err) => {
    console.log({ err });
  });
