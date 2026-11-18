const modelo = require("../models/gasto.model")

class GastosController{

    static async obtenerGastos(req,res){

        const datos = await modelo.obtenerGastos()
        return res.json(
            datos 
        )
    }

}

module.exports = GastosController