const express = require('express');
const router = express.Router();
const { isRegistered, isLogin1, islogOut, isLogin2, myCourse } = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const upload = require("../config/multer-config");
const { generateToken } = require("../utils/generateToken");
const userModel = require('../models/user-model');

router.get("/login",(req,res)=> {
    res.render("login");
});

router.get("/register",(req,res)=> {
    res.render("register");
});

router.get("/about-us",(req,res)=> {
    res.render("about-us");
})

router.get("/contact",(req,res)=> {
    res.render("contact");
})

router.post("/profile",isRegistered);

router.get("/profile",isLoggedIn,async(req,res)=> {
    let user = await userModel.findOne({email:req.user.email});
    res.render("profile",{ user });
})

router.post("/profile/home",isLoggedIn,upload.single('profileImage'), isLogin2);

router.post("/home",isLogin1);

router.get("/home",isLoggedIn,async(req,res)=> {
    let user = await userModel.findOne({email:req.user.email});
    res.render("home",{ user });
});

router.post("/myCourse",isLoggedIn,upload.single('courseImage'),myCourse);

router.get("/course",isLoggedIn, async(req,res)=> {
    let user = await userModel.findOne({email:req.user.email});
    res.render("course",{ user });
});

router.get("/logout",islogOut);

module.exports = router;