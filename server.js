const express = require('express')
const app = express()
const user=require("./Router/users")
const todo=require("./Router/todos")
var jwt = require('jsonwebtoken');
const port = 3000
app.use(express.urlencoded({extended:true}))
var cors = require('cors');

app.use(cors({origin: "*"}));
app.use("/users",user);
app.use("/todos",todo);









app.listen(port, () => console.log(`Example app listening on port ${port}!`))