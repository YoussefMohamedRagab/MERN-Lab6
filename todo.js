var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/home",{useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>
{
  
    console.log("connected")
})

const todoSchema = new Schema(
    {   
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    title    : { type : String , required : true, minlength:5 , maxlength:20 ,indexes: true},
    status   : {type: String, default: 'to-do'}
    
    }
    ,{
        versionKey: false 
    }
)
const Todo=mongoose.model('todo',todoSchema)
module.exports = Todo;