import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" 
    }
},{timestamps:true});

export default Comment = mongoose.model("Comment", commentSchema);