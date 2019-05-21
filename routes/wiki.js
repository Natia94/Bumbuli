const express = require("express");
const router = express.Router();

const Page = require("../models/page")
const User = require("../models/user")

router.get('/', async(req, res, next) => {
    
    try{
        const pages = await Page.findAll()
        res.send(pages)
    }catch(err){
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const page = await Page.create(req.body);
        const [user] = await User.findOrCreate({
            where:{
                name: req.body.name,
                email: req.body.email
            }
        })
        await page.save();
        page.setAuthor(user)
    } catch (error) { next(error) }
    
});

//searches pages by tags
router.get("/search", async (req, res, next) => {
    try {
      const pages = await Page.findByTag(req.query.search);
      res.send(main(pages));
    } catch (error) { next(error) }
  });

//finds an article by slug/title
router.get('/:slug', async(req, res, next) => {
    console.log('insi')
    try{
        let pageArr = await Page.findOrCreate({
            where:{
                slug: req.params.slug,   
            },
        })

        const page = pageArr[0]
        
        if(page===null){
            res.sendStatus(404)
        }
        try{
            const author = await page.getAuthor()
            console.log('got inside nested try block')
            res.send({ page, author })
        } catch (err){
            next(err)
        }
        
    }catch(err){
        next(err)
    }
    
})

router.get('/:slug/edit', async(req, res, next)=>{
    try{
        const page = await Page.findOne({
            where:{
                slug:req.params.slug
            }
        })
        if (page === null) {
            res.sendStatus(404);
        } else {
        const author = await page.getAuthor() 
        //console.log('page tags inside edit route', page.tags)
        res.send(editPage(page, author))     
        }   
    }catch(err){
        next(err)
    }
})

router.put("/:slug", async (req, res, next) => { //put
    try {
      await Page.update(req.body, {
        where: {
          slug: req.params.slug
        },
        returning: true, // needed for affectedRows to be populated
       // plain: true // makes sure that the returned instances are just plain objects => causing problems with editing
      });
      //res.redirect("/wiki/" + updatedPages[0].slug);
    } catch (error) { next(error) }
});


router.delete("/:slug/delete", async (req, res, next) => {
    try {
        await Page.destroy({
            where: {
              slug: req.params.slug 
            }
        })
        //console.log('req.params.slug', req.params.slug)
    } catch (err){
        next(err)
    }
})

module.exports = router