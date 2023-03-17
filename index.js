const express = require("express")

const app =express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome Utkarsh")
})

app.listen(8000,()=>{
    console.log("connected to server")
})