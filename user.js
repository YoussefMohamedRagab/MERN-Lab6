var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/home",{useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>
{
  
    console.log("connected")
})

const userSchema = new Schema(
    {
    username     : { type : String , unique : true, required : true },
    password    : { type : String , required : true },
    firstname    : { type : String , required : true, minlength:3 , maxlength:15 },
    age         : { type: Number, min: 13}
    
    }
    ,{
        versionKey: false 
    }
)
const User=mongoose.model('users',userSchema)
module.exports = User;
