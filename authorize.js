const authorize = (req,res,next) =>{
    const {theUser} = req.query;
    console.log(req.query);
    if(theUser === 'jayesh'){
        req.client = {name : 'jayesh', password : 123};
        next();
    }
    else{
        res.status(401).send('unauthorize');
    }
}

module.exports = authorize;