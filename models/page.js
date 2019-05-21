
const Sequelize = require('sequelize')
const db = require('./db')

const Page = db.define('page',{
    title:{
      type: Sequelize.STRING,
      allowNull: false
    },
    slug:{ //a url-safe version of the page title, for links
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
    content:{
      type: Sequelize.TEXT,
      allowNull: false
    },
    // status:{ //page is open or closed
    //   type: Sequelize.ENUM("open", "closed"),
    //   allowNull: false
    // },
    tags: {
      type: Sequelize.ARRAY(Sequelize.TEXT), // an array of text strings (Postgres only)
      //defaultValue: [],
      allowNull: false
    },
  });
  
  Page.findByTag = function (tag) {
    return this.findAll({
      where: {
        tags: { $contains: [tag] } 
      }
    });
  }

  function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    console.log('title', title )
    return title
    //.replace(/\s+/g, '_').replace(/\W/g, '');
  }
  
  Page.beforeValidate((pageInstance) => {
    console.log('hit befire validate')
  
    pageInstance.slug = generateSlug(pageInstance.title)
  
    return pageInstance.slug 
    //attach a created slug to this page instance
    // instead of returning it from the function.
  })

    //I need before create hook, it will come as as sting and I need to convert it as an array of strings
    // Page.beforeCreate(page => {
  
    //   if (typeof page.tags === "string") {
    //     page.tags = page.tags.split(" ").map(str => str.trim());
    //     console.log("Validated tags", page.tags)
    //   }
    // });

module.exports = Page

  