const mongoose = require('../config/mongo.config')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    username:String,
    mobileno:String,
   password: String,
   

})

module.exports= mongoose.model('user',userSchema,'user')