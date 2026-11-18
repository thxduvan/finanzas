const express = require("express")
const router = express.Router()
const controlador = require("../controller/gastos.controller")
const controlar = require("../controller/categoria.controller")

router.get("/gastos", controlador.obtenerGastos),

router.get("/categoria", controlar.obtenerCategorias)

module.exports = router

