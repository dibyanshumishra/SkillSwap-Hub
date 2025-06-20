const jwt = require("jsonwebtoken");

const generateToken = (user)=> {
    jwt.sign({email:user.email,id:user._id},process.env.JWT_KEY);
};

module.exports.generateToken = generateToken;