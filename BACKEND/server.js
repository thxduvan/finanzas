
const router = require("./routes/router")
const cors = require("cors")
const express = require("express")
const app = express()
let port = 4000
app.use(cors())
app.use("/api",router)
app.use

app. listen(port, ()=>{
    console.log(`mi primera vez usando un condon ${port}`)
})