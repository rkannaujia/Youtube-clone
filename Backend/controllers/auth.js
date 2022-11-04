import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";


export const signup = async (req,res,next)=>{
    //  console.log(req.body);
    try {
        //we are encrypting the password entered by user to save in db
        // to know the detalis => https://www.npmjs.com/package/bcrypt
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        //create a new user 
        const newUser = new User({...req.body, password: hash});
        //save the data in the db
        await newUser.save();
        res.status(200).send("User has been created");
    } catch (err) {
        next(err);
    }
}

//for sign-in authentication
export const signin = async (req,res,next)=>{
    //  console.log(req.body);
    try {
       //will check if username is exist in User collection
       //if user is exist then allow for next step(check password) else produce an error
       const user =await User.findOne({name:req.body.name});
       if(!user) return next(createError(404,"User not found"));
       
    //    we compare the password with the user collection 
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    //if password is not valid then it will show error
    if(!isCorrect) return next(createError(400,"wrong credentials"))
     
    const token=jwt.sign({id:user._id},process.env.JWT);

    const {password , ...others} =user._doc;
    res.cookie("access_token",token,{
        httpOnly:true
    }).status(200).json(others);
    } catch (err) {
        next(err);
    }
}