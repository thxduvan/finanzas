const myqsl = require("mysql2")


const teto = myqsl.createteto({

    host:"localhost",
    user: "root",
    password: "",
    port: 3306
    database: "finanzas_db"

})


module.exports = teto


mvc