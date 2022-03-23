
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors");
const { response } = require("express");
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://dexter:dexteract007@cluster0.h7bii.mongodb.net/contact?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('connected to db')
    })

const loginSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,

});
const subSchema=new mongoose.Schema({
    email:String
})
var sub=mongoose.model('sub',subSchema)
var us = mongoose.model('us', loginSchema)
app.post("/register", async (req, res) => {

    
    const user = new us(req.body)

    await user.save();
    console.log("data saved ")
    res.status(200).json({ success: true });
// console.log(res.statusCode())




})

app.post("/subscribe", async(req,res)=>{
const user =new sub(req.body)
await user.save();
console.log("subscribed")
res.status(200).json({success:true})

})
app.listen("8000", () => {
    console.log("app is listening at port 8000")
})