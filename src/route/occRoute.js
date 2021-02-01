const express=require('express')
const mongoose=require('mongoose')
const route=express.Router()
const occu=require("../../model/occu")
route.get('/',async (req,res)=>{
   var data=await occu.find()
   res.send(data)
})
route.post('/occu',async (req,res)=>{
    var data=await occu.insertOne(req.body)
    res.send(data)
})
route.get('/occu/:id',async (req,res)=>{
    console.log("helloooo")
    console.log(req.params.id)
    var data=await occu.findById(req.params.id)
    res.send(data)
})
route.patch('/occu/:id',async (req,res)=>{
    var data =await occu.findByIdAndUpdate(req.params.id,{name:'vinod kumar'})
    res.send(data)
})

module.exports=route