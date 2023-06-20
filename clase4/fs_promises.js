const fs = require("fs");

const contenido = `Primer contenido para escibir en un archivo con promesas`;

const archivo = "./archivo_promesas.txt";

const resultado = fs.promises.writeFile(archivo, contenido)

    .then((resultado) => {
        console.log('archivo escrito correctamente')

        return fs.promises.readFile(archivo, 'utf-8')

    })
    .then((contenidoArhivo) => {
        console.log({ contenidoArhivo })

        const nuevoContenido = `
        Contenido adicional para guardar en el archivo`

        return fs.promises.appendFile(archivo, nuevoContenido)
    })
    .then(() => {
        console.log('contenido adicional escrito correctamente')
        return fs.promises.unlink(archivo)
    })
    .catch((err) => {
        console.log({ err })
    })

console.log(resultado)