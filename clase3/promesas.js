const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      return reject("Error: No puedes dividr sobre 0");
    }

    return resolve(a / b);
  });
};

dividir(4, 2)
  .then((result) => {
    console.log({ result });
    return dividir(9, 3).then((resultado2) => {
      console.log({ resultado2 });
    });
  })
  .catch((err) => {
    console.log({ err });
  });
