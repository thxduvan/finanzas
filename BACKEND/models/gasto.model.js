const database = require("../db/conexiondb")

const obteneroDatos = async () => {
    const resultad = await database.query("select * from  categorias")
    console.log(resultad)
}

obteneroDatos()