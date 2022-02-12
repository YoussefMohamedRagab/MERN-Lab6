const User=require("./user")
const Todo = require("./todo.js")

var userobj1 ={
    username: "Essam24",
    password: "4889",
    firstname: "Youssef",
    age : 22
};
var userobj2 ={
    username: "Giuseppe",
    password: "4271",
    firstname: "Youssef",
    age : 24
};

user1 = new User(userobj1);
user2 = new User(userobj2);

user1.save(userobj1,(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})
user2.save(userobj1,(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

var todobj1 = {
    user : user1._id,
    title : "Learning list",
    todo: 'Learn Data Structures'
}
var todobj2 = {
    user : user2._id,
    title : "Bring home list",
}
Todo.create(todobj1,(err,res)=>{
    console.log(res);
})
Todo.create(todobj2,(err,res)=>{
    console.log(res);
})
