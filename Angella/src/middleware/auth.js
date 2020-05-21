const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");
const User = require("../models/User")


const auth = async (req, res, next) =>{
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, "teamBAJAJ");
    const {id, email} = data;
    const user = await User.findOne({_id: id,email});
    if (!user){
       return res
       .status(401)
       .send({message:"Unauthorised to access this resource"});
    }
    req.user = user;
    req.token = token;
    next();
};

module.exports = auth;