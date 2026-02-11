
const users = require('../mocks/users');

module.exports = {
  getUsers(response) {
    response.writeHead(
      200,
      {'content-type': 'application/json'}
    );
    response.end(JSON.stringify(users));
  }
}

//Meu codigo
const products = require('../mocks/products');

module.exports = {
  getProducts(response) {
    response.writeHead(
      200,
      {'content-type': 'application/json'}
    );
    response.end(JSON.stringify(products));
  }
}
