const escribeArchivoFake = (callbackFn) => {
  setTimeout(() => {
    console.log("simulando escribir en un archivo");

    callbackFn(null, "mywebsite.com/statics/file.pdf");
  }, 1000);
};

const escribeBDFake = (ruta, callbackFn) => {
  setTimeout(() => {
    console.log("simulando escribir en una base de datos");

    callbackFn(null, 100);
  }, 1000);
};

console.log("inicio el programa");

const callbackFn = (err, ruta) => {
  if (err != null) {
    console.log(`ocurrio un error: ${err}`);
    return;
  }

  escribeBDFake(ruta, (err, idBD) => {
    if (err != null) {
      console.log(`ocurrio un error: ${err}`);
      return;
    }
    console.log("termino mi programa");
  });
};v 

escribeArchivoFake(callbackFn);
