const userModel = require("../models/user-model");
const courseModel = require("../models/course-model");
const adminModel = require("../models/admin-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");


module.exports.isRegistered = async(req,res) => {
    try{
        let {name,email,password,confirmPassword} = req.body;

        let user = await userModel.findOne({email});

        if(user) return res.status(401).send("User already created, Please log-in");

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async(err, hash)=> {
                if(password !== confirmPassword) {
                    return res.status(400).send("Oops! something went wrong.");
                } else {
                    let user = await userModel.create({
                        name,
                        email,
                        password:hash,
                    });
                    let token = generateToken(user);
                    res.cookie("token",token);

                    res.render("profile",{ user });
                }
            });
        });
    } catch(err) {
        res.redirect("/login");
    }
    
};

module.exports.isLogin1 = async(req,res) => {
    try {
        let {email,password} = req.body;

        let user = await userModel.findOne({email});

        if(!user) return res.status(402).send("User not found");

        bcrypt.compare(password,user.password, function(err, result) {
            if(!result) return res.status(403).send("Invalid password!");
            if(result) {
                let token = generateToken(user);
                res.cookie("token",token);

                res.render("home",{ user });
            }
        });
    } catch(err) {
        res.redirect("/login");
    }
    
}

module.exports.isLogin2 = async(req,res)=> {
    let {bio,location , skillsOffered} = req.body;
    let profileImage;
    if (req.file) {
        profileImage = "/images/uploads/" + req.file.filename;
    }

    let email = req.user.email;
    

    let user = await userModel.findOneAndUpdate({email},{
        bio,
        location,
        skillsOffered,
        profileImage
    }, { new:true });

    if(!user) return res.status(402).send("User not found");

    res.render("home", { user });
}

module.exports.myCourse = async(req,res)=> {
    let {title, about, price, duration , courseImage} = req.body;
    let email = req.user.email;
    let user = await userModel.findOne({email});

    let course = await courseModel.create({
        title,
        about,
        price,
        duration,
        courseImage,
    });
    res.render("myCourse",{ course });
}

module.exports.islogOut = async(req,res) => {
    res.clearCookie("token");

    res.redirect("/users/login");
}