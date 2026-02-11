
const UserController = require('./controllers/UserController');

module.exports = [{
  endpoint: '/users',
  handler: UserController.getUsers
}];

//Meu codigo
const productsController = require('./controllers/UserController')

module.exports = [{
  endpoint: '/products',
  handler: UserController.getProducts
}]

