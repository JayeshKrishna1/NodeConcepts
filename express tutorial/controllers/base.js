const postController = (req,res)=>{
    const {name} = req.body;
    console.log(name);
    res.json(name);
}

module.exports = postController;