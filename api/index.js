import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGOPASS).then(()=>{
    console.log('connected to mongo db ...')
}).catch((err)=>{
    console.log(err)
})
    

const app = express()


app.get("/login", (req,res)=>{
res.send("You tried to login !")
})




app.listen(3000, ()=>{
    console.log("app listening on port 3000 !!")
})