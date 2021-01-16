const express=require('express')
const app=express();

app.get("/hello",(req,res)=>{
    res.send("HK")
})
app.listen(8000,()=>{
    console.log("K")
})