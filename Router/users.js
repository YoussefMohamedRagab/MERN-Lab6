const express = require('express')
const router = express.Router()
const User=require("D:/Joe/MERN/Day6/Mylab/user.js");
const Todo = require("D:/Joe/MERN/Day6/Mylab/todo.js");
var jwt = require('jsonwebtoken');
const { query } = require('express');
const e = require('express');

router.get("/register",(req,res)=>{
    res.sendFile("D:/Joe/MERN/Day6/Mylab/register.html");
})
router.post("/register",(req,res)=>{
    var userobj = {
        username :req.body.userName,
        password : req.body.password,
        firstname : req.body.firstName,
    }
    User.create(userobj,(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
        }
    })   
    res.send("user was registered successfully and token");
})

router.get("/" , (req,res)=>{
    User.find({},{firstname:1 , _id:0} , (err,data)=>{
        res.send(data);
    })
    
})

router.get("/login",(req,res)=>{
    res.sendFile("D:/Joe/MERN/Day6/Mylab/login.html");
})
router.post("/login",(req,res)=>{
    var userName = req.body.userName;
    var password = req.body.password;
    User.findOne({"username": userName ," password":password} ,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            Todo.findOne({"user" : data._id},{_id:0 , title :1 ,status:1} , (err,data2)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data2);
                    res.send(data2);
                }
            })
        }
    });
    
})

router.delete("/:name",(req,res)=>{
    var username  = req.params.name;
    User.findOneAndDelete({"username": username},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            Todo.findOneAndDelete({"user": data._id},(err,data2)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data2);
                    res.send("deleted successfully")
                }
            })
        }
    })
})

router.patch("/:name",(req,res)=>{
    var username = req.params.name;
    var edit = req.body.edit;
    User.findOneAndUpdate({"username": username} , {$set:{"firstname" : edit }} , (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("User was edited successfully , user : " + edit );
        }
    })
})











module.exports=router;
