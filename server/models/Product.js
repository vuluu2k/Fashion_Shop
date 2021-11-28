const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
        name:String,
        description:String,
        imageUrl:String,
        size:{type:String,default:"S"},
        price:{type:String,default:"0"},
        active:{type:Boolean,default:true},
        // user:{
        //     type:mongoose.ObjectId,
        //     ref:"Account"
        // }
    },
    {
        timestamps:true
    }
);
module.exports =mongoose.model('Product',ProductSchema)