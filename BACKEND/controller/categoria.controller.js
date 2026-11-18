const modelo = require("../models/categoria.model")

class CategoriaController{

    static async obtenerCategorias(req,res){

        const datos = await modelo.obtenerCategorias()
        res.json(
            datos 
        )
    }

}
module.exports = CategoriaController