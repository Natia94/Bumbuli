const express = require("express");
const router = express.Router();

const Page = require("../models/page")
const User = require("../models/user")

router.get('/', async (req, res, next) => {
    try{
        const users = await User.findAll()
        res.send(users)
    }catch(err){
        next(err)
    };

});

router.get("/:userId", async(req, res, next)=>{
    try{
        const user = await User.findOne({
            where:{
                id: req.params.userId
            }
        })
        console.log("user =>", user)
        const pages = await Page.findAll({
            where:{
                authorId: req.params.userId
            }
        })
        // const pages = await user.getPages() // returns a promise for the pug's owner
        console.log('pages=>', pages)
        res.send(user)
    }catch(err){
        next(err)
    }
})


module.exports = router;