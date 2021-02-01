const mongoose=require('mongoose')

const friendschema=mongoose.Schema({
    name:String,
    occupation:String
})

module.exports= mongoose.model("friends",friendschema)