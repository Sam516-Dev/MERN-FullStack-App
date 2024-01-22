import express  from "express";

const app = express()


app.get("/login", (req,res)=>{
res.send("You tried to login !")
})




app.listen(3000, ()=>{
    console.log("app listening on port 3000 !!")
})