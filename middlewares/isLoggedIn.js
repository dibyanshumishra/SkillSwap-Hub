const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");

module.exports = async(req,res,next) => {
    try {
        const token = req.cookies.token;

        if(!token) {
            return res.status(400).send("Invalid user!! Please Log-in");
        }

        var decoded = jwt.verify(token,process.env.JWT_KEY);
        let user = await userModel.findOne({email:decoded.email}).select("-password");
        req.user = user;
        next();
    } catch(err) {
        res.status(403).send("Auth Failed");
    }

}