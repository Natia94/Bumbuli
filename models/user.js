const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: { //unique, identifying email address
      type: Sequelize.STRING,
      allowNull: false,
      isEmail: true,
    }
  });
  


  
  // Page.BeforeUpdate((beforeCreateInstance) => { //once I press submit this lifecycle hook will be created
  //   beforeCreateInstance = beforeCreateInstance.tags.split()
  // })
  //   // takes an instance and second argument is optional
  
  module.exports = User