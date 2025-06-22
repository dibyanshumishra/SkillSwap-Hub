const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");
const { generateToken } = require("../utils/generateToken");
const bcrypt = require("bcrypt");

router.get("/login",(req,res)=> {
    res.render("login");
});

router.get("/register",(req,res)=> {
    res.render("register");
});

router.get("/home",(req,res)=> {
    res.render("home");
});

router.get("/about-us",(req,res)=> {
    res.render("about-us");
})

router.get("/contact",(req,res)=> {
    res.render("contact");
})

router.post("/profile",(req,res)=> {
    res.render("profile");
})

module.exports = router;