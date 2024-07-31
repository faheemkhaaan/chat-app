import { matchedData, validationResult } from "express-validator";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import genrateTokenAndSetCookie from "../utils/genrateToken.js";

export const signup = async (req,res) =>{

    try {
        const result = validationResult(req);
        if(!result.isEmpty()){
            return res.status(400).send(result.array());
        }
        const {fullName,username,password,confirmPassword,gender} = matchedData(req)
        console.log(password , confirmPassword);
        if(password !== confirmPassword){
           return  res.status(400).json({error: "password don't match"});
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error: "Username already exits"})
        }

        // HASH PASSWORD HERE 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        // https://avatar-placeholder.iran.liara.run/avatar/200/200/any

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser){
            // Genrate jwt token
            genrateTokenAndSetCookie(newUser._id,res)
            await newUser.save();
            return res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }else{
            res.status(400).json({error: "Invalid user data"});
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
}
export const login = async (req,res) =>{
    try {
        const result = validationResult(req);
        if(!result.isEmpty()){
            return res.status(401).send(result.array())
        }
        const {username,password} = matchedData(req);
        console.log(username,password);
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).send({error: "Invalid username"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        console.log(isPasswordCorrect);
        if(!isPasswordCorrect){
            return res.status(400).send({error: "Invalid password"})
        }
        genrateTokenAndSetCookie(user._id,res)

        res.send({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
}
export const logout = async (req,res) =>{
    try {
        res.cookie("jwt","",{maxAge: 0});
        res.status(200).json({message: "logout successfully"})
    } catch (error) {
        console.log( "error in logout controler backend/controller/auth.controller.js" ,error)
        res.status(500).json({error: "Internal server error"})
    }
}