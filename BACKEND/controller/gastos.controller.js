const modelo = require("../models/gasto.model")

class GastosController{

    static async obtenerGastos(){

        const datos = modelo.obtenerGastos()
        return res.json(
            datos 
        )
    }

}
module.exports = GastosController