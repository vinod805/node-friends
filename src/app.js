const hbs=require('hbs')
const path=require('path')
const express=require('express')
const staticpath=path.join(__dirname,"../public")
const app=express()
app.set('view engine','hbs')
app.use(express.static(staticpath))
app.get('/',(req,res)=>{
    res.render('index',{name:'vinod'})
})
app.get('/bestfriends',(req,res)=>{
    res.send(['tulasi','ravindera','koti'])
})
app.get('/friendslist',(req,res)=>{
    res.send(['vinod','tulasi','koti','ravi','boddu'])
})




app.listen(3000,()=>{
    console.log('server is on')
})