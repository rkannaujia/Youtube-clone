import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to Database");
    }).catch((err)=>{
        throw err
    });
}

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes); 
app.use("/api/users", userRoutes); 
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// for handling the error
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success:false,
        status:status,
        message:message
    })
})
app.listen(8800, ()=>{
    connect();
    console.log("Connected! to server");
})
