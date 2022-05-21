
class Mensaje {
    #fs = require('fs')
    constructor() {
        this.mensajes = [];
        this.ruta = 'mensajes'
    }

    leer() {
        //return this.mensajes
        try {
            const data = this.#fs.readFileSync(`./public/${this.ruta}.txt`, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            throw new Error("hay un problema al leer")
        }

    }


    async guardar(mensaje) {
        let objeto, objetoAgregar;
        this.mensajes.push(mensaje)
        let arrayMensajes = []
        try {
            let contenido = await this.#fs.promises.readFile(`./public/${this.ruta}.txt`, 'utf-8')
            if (contenido) {
                objeto = JSON.parse(contenido)
                for (let i = 0; i < objeto.length; i++) {
                    arrayMensajes.push(objeto[i])
                }
                objetoAgregar = {
                    email: mensaje.email,
                    texto: mensaje.texto,
                    fecha: mensaje.fecha
                }
                arrayMensajes.push(objetoAgregar)
                this.#fs.promises.writeFile(`./public/${this.ruta}.txt`, JSON.stringify(arrayMensajes, null, '\t'))

            }
            return arrayMensajes;
        } catch (error) {
            throw new Error("hay un problema al guardar")
        }
    }

}

module.exports = new Mensaje();