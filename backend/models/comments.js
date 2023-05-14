const mongoose = require('mongoose');
const {Schema} = mongoose;
const commentSchema = new Schema({
    content:{
        type:string,
        required:true,
    },
    blog:{
        type:mongoose.SchemaType.ObjectId,
        ref:'blogs',
    },
    author:{
        type:mongoose.SchemaType.ObjectId,
        ref:'users'
    }
},
    {timestamps:true}
);
module.exports=mongoose.module('Comment',commentSchema,'Comments');