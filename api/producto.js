class Productos {

    constructor  (){
        this.productos = []
        this.id = 0
    }

    guardar(producto){
        try {
            let objeto ={
                title: producto.title,
                price : producto.price,
                thumbnail : producto.thumbnail,
                id: this.id+=1
            }
            this.productos.push(objeto)
            return objeto
        } catch (error) {
            return {error:'existe un problema'}
        }
  
    }

    leer(){
            return  (this.productos.length === 0)? {error:"No hay productos cargados"} : this.productos
    }

    actualizar(id,producto){
        let id_producto = this.productos.findIndex( elem => { return elem.id == id})

        if(id_producto != -1){
             let objeto ={
                title: producto.title,
                price : producto.price,
                thumbnail : producto.thumbnail,
                id: id
             }
            this.productos.splice(id_producto,1, objeto)
            return objeto
        }else{
           return {error:"producto no encontrado"}
        }


    }


    borrar(id){
        let id_producto = this.productos.findIndex( elem => { return elem.id === id})
        if(id_producto != -1){
             return this.productos.splice(id_producto,1)
        }else{
           return {error:"producto no encontrado"}
        }
      
    }

    buscarProductoId(id){
        let result = this.productos.find( elem => { return elem.id == id})
        return (result ===undefined || result ===null )?{error:"Producto no encontrado"}:result;

    }


}



module.exports=new Productos();