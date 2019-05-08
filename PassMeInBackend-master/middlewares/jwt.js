const jwt = require('jwt-simple');
require("dotenv").config();
function checkAuthenticated(req,res,next){
    console.log("Checking");
    console.log(req.header('authorization'));
    
    if(!req.header('authorization'))
        return res.status(401).send({message:'Unauthorized access!'});

    let token = req.header('authorization');
    let payload = jwt.decode(token,process.env.JWTPRIVATEKEY);
    console.log(payload);
    
    if(!payload)
        return res.status(401).send({message:'Unauthorized access!'});
    next();
}

module.exports = checkAuthenticated