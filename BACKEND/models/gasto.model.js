const database = require("../db/conexiondb")

class GastoModel{

    static async obtenerGastos(){
        const [resultad] = await database.query("select * from movimientos")
        //[datos][metadatos]
        console.log(resultad)
        return resultad
        
    }

}
module.exports = GastoModel 