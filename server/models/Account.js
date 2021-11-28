const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const AccountSchema=new Schema({
        username:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        level:{
            type:String,
            enum:['admin','employ','user'],
            default:"user"
        },
        active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
    }
)

module.exports=mongoose.model('Account',AccountSchema)