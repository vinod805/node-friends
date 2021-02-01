const mongoose=require('mongoose')
const url="mongodb://localhost:27017/friends"

mongoose.connect(url, { useNewUrlParser: true },{ useUnifiedTopology: true } )