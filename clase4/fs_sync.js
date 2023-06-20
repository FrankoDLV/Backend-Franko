const fs = require("fs");

const contenido = "Primer contenido para escribir un archivo";

const archivo = "./archivos_sync.txt";

fs.writeFileSync(archivo, contenido);

const contenidoArhivo = fs.readFileSync(archivo, "utf-8");

console.log({ contenidoArhivo });

console.log(contenidoArhivo === contenido);

const nuevoContenido = `contenido adicional para guardar en el archivo`;

fs.appendFileSync(archivo, nuevoContenido);

fs.unlinkSync(archivo);
