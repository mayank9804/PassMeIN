const jwt = require('jwt-simple');
require("dotenv").config();
function checkAuthenticated(req,res,next){

    if(!req.header('authorization'))
        return res.status(401).send({message:'Unauthorized access!'});

    let token = req.header('authorization');
    let payload = jwt.decode(token,process.env.JWT_PRIVATE_KEY);
    
    if(!payload)
        return res.status(401).send({message:'Unauthorized access!'});
    next();
}

module.exports = checkAuthenticated