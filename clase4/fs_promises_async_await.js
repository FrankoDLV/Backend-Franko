const fs = require("fs");

const contenido = `Primer contenido para escibir en un archivo con promesas`;

const archivo = "./archivo_callbacks.txt";

const init = async () => {

    const resultado = await fs.promises.readFile(archivo, 'utf-8')

    console.log({ resultado })

}


init()