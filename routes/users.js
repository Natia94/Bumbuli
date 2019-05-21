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
        //console.log("user =>", user) //works

        const pages = await Page.findAll({
            where:{
                AuthorId: req.params.userId
            }
        })
        //console.log('pages=>', pages) //works
        res.send({user, pages})
    }catch(err){
        next(err)
    }
})


module.exports = router;