const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const NewsSchema=new Schema({
    title:String,
    catagories:String,
    discription:String,
    author:String,
});
module.exports=mongoose.model('news',NewsSchema,'news');