
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors = require("cors");
const {  response } = require("express");
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://dexter:dexteract007@cluster0.h7bii.mongodb.net/contact?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() =>{
  console.log('connected to db')
})
const loginSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    
    });
    var us = mongoose.model( 'us',loginSchema)
app.post("", async (req,res)=>{

 const user=new us(req.body)
 
await user.save();
console.log("data saved ")



   


})
app.listen("8000",()=>{
    console.log("app is listening at port 8000")
})