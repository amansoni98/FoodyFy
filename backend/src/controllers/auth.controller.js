const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

async function registerUser(req , res){

    const {fullName , email , password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    });
    if(isUserAlreadyExists){
        return res.status(400).json({
            message : "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password , 10);

    const user = await user.model.create({
        fullName,
        email,
        password : hashedPassword
    })

    const token  = jwt.sign({
        id : user._id
    } , "268be609c2499f7b7f1ed69648434a0e37ebd895")
    res.cookie("token" , token )
    return res.status(201).json({
        message : "User registered successfully",
        user:{
            _id : user._id,
            fullName : user.fullName,
            email : user.email
        }
    })
}

async function loginUser(req , res){

    const {email , password} = req.body;
}


module.exports = {
    registerUser,
    loginUser
}