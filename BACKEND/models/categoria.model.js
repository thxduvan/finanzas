const database = require("../db/conexiondb")

class CategoriaModel{
    
    static async obtenerCategorias(){
        const [resultad] = await database.query("select * from categorias")
        console.log(resultad)   
        return resultad
    }

} 
module.exports = CategoriaModel
