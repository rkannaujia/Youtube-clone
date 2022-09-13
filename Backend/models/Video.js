import mongoose from "mongoose";

const VideoSchema=new mongoose.Schema({
    userId: {
        type: String,
        required:true,
    },
    title: {
        type: String,
        required:true,
    },
    desc: {
        type: String,
        required:true,
    },
    imgUrl: {
        type: String,
        required:true,
    },
    videoUrl: {
        type: String,
        default:0,
    },
    views: {
        type: Number,
        required:true,
    },
    tags:{
        type:[String],
        default:[],
    },
    likes:{
        type:[String],
        default:[],
    },
    dislikes:{
        type:[String],
        default:[],
    }
},{ timestamps:true}
);
export default mongoose.model("Video", VideoSchema)