/*{"bcrypt": "^6.0.0",
    "config": "^4.0.0",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.7",
    "debug": "^4.4.1",
    "dotenv": "^16.5.0",
    "ejs": "^3.1.10",
    "express": "^5.1.0",
    "express-session": "^1.18.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.15.1",
    "multer": "^2.0.1"
} */
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const path = require('path');

const db = require("./config/mongoose-connection");

require("dotenv").config();


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieparser());
app.use(express.static(path.join(__dirname,"public")));

const userRoute = require("./routes/userRoute");

app.use("/users",userRoute);

app.listen(9000);