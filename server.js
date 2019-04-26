const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const models = require('./models');

//const { db } = require('./models');
// models.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const PORT = 8080;

const init = async () => {
  //sync creates the table if it does not exist. alter true creates the tables and makes any changes to keep the modules in sync
 
  await models.Page.sync({force: true }) 
  await models.User.sync({force: true }) 

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} <3 <3 <3
    goto: http://localhost:8080`);
  });
}

init();