console.log("ihfdaKSbvhQ2JOHOWQvbkjbhsfjoi")

const express = require("express")
const app = express()
let port = 3000

app.get("/",(req,res)=>{
    res.send("tests")
})

app. listen(port, ()=>{
    console.log(`mi primera vez usando un condon & {port}`)
})