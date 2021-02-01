const hbs=require('hbs')
const path=require('path')
const express=require('express')
const mongoose=require("mongoose")
const connection=require("../conncet")
const friends=require("../model/occu")
// const data=new friends({name:"tulasi",occupation:"manager"})
// data.save((err,res)=>{
//     console.log(res)
// })
const occRouter=require("./route/occRoute")



const staticpath=path.join(__dirname,"../public")
const app=express()
app.use(occRouter)

app.use(express.json())
app.set('view engine','hbs')
app.use(express.static(staticpath))





app.listen(3000,()=>{
    console.log('server is on')
})