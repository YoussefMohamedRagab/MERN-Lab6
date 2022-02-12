const express = require('express')
const router = express.Router()
const User=require("D:/Joe/MERN/Day6/Mylab/user.js");
const Todo = require("D:/Joe/MERN/Day6/Mylab/todo.js");
var jwt = require('jsonwebtoken');
const { query } = require('express');
const e = require('express');


router.get("/:name",(req,res)=>{
    var userName = req.params.name;
    User.findOne({"username": userName} ,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            Todo.find({"user" : data._id},{_id:0 , title :1 ,status:1} , (err,data2)=>{
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

router.post("/",(req,res)=>{
    var username = req.body.userName;
    var todoTitle = req.body.title;
    var todoTag = req.body.tag;

    User.findOne({"username":username},(req,data)=>{
        console.log(data._id);
        var todoObject = {
            user : data._id,
            title : todoTitle,
            status : todoTag
        }
        console.log(todoObject);
        Todo.create(todoObject,(err,data2)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data2);
                res.send("Todo added successfully : " + data2);
            }

        })
    })
})
router.patch("/:username/:title" , (req,res)=>{
    var username = req.params.username;
    var todoTitle = req.params.title;
    var newTitle = req.body.title
    User.findOne({"username":username} , (err,data)=>{
        Todo.findOneAndUpdate({"user":data._id , "title":todoTitle} , {$set:{"title" : newTitle }} ,(err,data2)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Todo editted successfully : ")
            }
        })

    })
})

router.delete("/:username/:title" , (req,res)=>{
    var username = req.params.username;
    var todoTitle = req.params.title;
    User.findOne({"username":username} , (err,data)=>{
        Todo.findOneAndDelete({"user":data._id , "title":todoTitle} ,(err,data2)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Todo removed successfully");
            }
        })

    })
})









module.exports=router;
