const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'});

const uri = process.env.DATABASE;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

mongoose.connect(uri,options).then(()=>{
  console.log("connection Success")
}).catch((err)=>console.log(err));

app.get("/",(req,res)=>{
    res.send("hello World")
});
const middleware=(req,res,next)=>{
    console.log("bcjcb");
    next();
}


app.get("/about",middleware,(req,res)=>{
    res.send("hello about")
});


app.listen(7000,()=>{
    console.log("sever is running 7000")
})