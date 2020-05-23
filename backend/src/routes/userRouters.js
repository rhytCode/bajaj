const express = require ("express");
const User = require ("../models/User");
const auth = require ("../middleware/auth");
const router = express.Router();

//Creating a new user

router.post("/users/create", async (req, res) =>{
const userData = req.body
try{
    const newUser = new User(userData);
    await newUser.save();
    res
    .status(201)
    .send({ message: "User created Successfully", user: newUser})
} catch (error){
res.status(400).send({error});
}
});

//Login User
router.post("/users/login", async (req,res) => {
    const {name,password,role} = req.body;
    const user = await User.findByCredentials(name,password,role);
    if (user.error) {
         return res.status(400).send({error: user.error});
    }
    const token = await user.generateAuthToken()
    res.status(201).send({message:"Logged in successfully!",user, token})

});

// Comment from Liz - Should we added username & staffId to router.post function and remove email as part of login variables needed ?
//     eg. const {username, staffId, password} = req.body;
//     const user = await User.findByCredentials(username, staffId, password);


// view user profile
router.get("/users/profile", auth, (req,res)=>{
    res.status(200)
    .send(req.user);
});

module.exports = router;