const express = require('express');
const router = express.Router();
const { isRegistered, isLogin1, islogOut, isLogin2, myCourse, updateCourse } = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const upload = require("../config/multer-config");
const { generateToken } = require("../utils/generateToken");
const userModel = require('../models/user-model');
const courseModel = require('../models/course-model');

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
    let courses = await courseModel.find().populate('instructorID');
    res.render("home",{ user, courses });
});

router.get("/course",isLoggedIn, async(req,res)=> {
    let user = await userModel.findOne({email:req.user.email});
    res.render("course",{ user });
});

router.post("/myCourse",isLoggedIn,upload.single('courseImage'),myCourse);

router.get("/myCourse",isLoggedIn,async(req,res)=> {
    let user = await userModel.findOne({email:req.user.email});
    let courses = await courseModel.find({userID: req.user._id});
    res.render("myCourse",{ user , courses });
});

router.get("/myCourse/:id", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });
    let course = await courseModel.findOne({ _id: req.params.id }).populate('instructorID');
    res.render("course-id", { user, course });
});

router.post("/myCourse/:id", isLoggedIn, upload.single('courseImage'),updateCourse);

router.get("/myCourse/delete/:id",isLoggedIn,async(req,res) => {
    let deleteCourse = await courseModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/users/myCourse");
})

router.get("/instructor/:instructorId/course/:courseId",isLoggedIn,async(req,res)=> {
    let instructor = await userModel.findById(req.params.instructorId);
    let user = await userModel.findOne({ email: req.user.email });
    //let instructorCourses = await courseModel.find({ instructorID: req.params.id });
    let instructorCourse = await courseModel.findOne({ _id: req.params.courseId, instructorID: instructor._id });
    res.render("instructor",{ instructor, instructorCourse, user });
})

router.get("/logout",islogOut);

module.exports = router;