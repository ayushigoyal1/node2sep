const express=require("express");
const user=require("./user.json")
const fs=require('fs')
const app=express();
app.use(express.json())
app.get('/users',(req,res)=>{
    res.json(user)
})
app.get('/user/:id',(req,res)=>{
    let id=req.params.id
    let use=user.find((use)=> use.id===parseInt(id))
    console.log(use);
    res.json(user)
 })
app.post('/add/user',(req,res)=>{
    console.log(req.body);
    req.body.id=31;
    user.push(req.body)
    fs.writeFile('user.json',JSON.stringify(user),(err)=>{
        if(err){
            console.log("error.....");
        }
        else{
            console.log("data added successfully");
            res.end("data added successfully")
        }
    })
    })
app.put('/edit/user/:id',(req,res)=>{
    let id=req.params.id;
    console.log(id);
    let index=user.findIndex((use)=>use.id===parseInt(id))
    user[index].first_name="ram"
    fs.writeFile('user.json',JSON.stringify(user),(err)=>{
        if(err){
            console.log("error.....");
        }
        else{
            console.log("data added successfully");
            res.end("data added successfully")
        }
    })
})
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is runnimng on 3000");
    }
})