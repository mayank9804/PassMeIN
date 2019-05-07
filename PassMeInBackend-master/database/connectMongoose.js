require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/"+process.env.DB_NAME,{useNewUrlParser:true})
.then(()=>{console.log("Connected")})
.catch(err=>{console.log("Could not connect",err)});
