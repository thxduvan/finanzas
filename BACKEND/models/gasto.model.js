const database = require("../db/conexiondb")

class GastoModel{

    static async obtenerGastos(){
        const [resultad] = await database.query("SELECT movimientos.monto, categorias.nombre FROM movimientos INNER JOIN categorias ON movimientos.id_categoria = categorias.id_categoria")
        //[datos][metadatos]
        console.log(resultad)
        return resultad
        
    }

}
module.exports = GastoModel 