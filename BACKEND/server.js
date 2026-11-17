
const router = require("./routes/router")
const express = require("express")
const app = express()
let port = 4000

app.use("/api",router)

app. listen(port, ()=>{
    console.log(`mi primera vez usando un condon & {port}`)
})