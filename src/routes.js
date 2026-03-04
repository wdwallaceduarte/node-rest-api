import UserController from './controllers/UserController.js';
import ProductController from './controllers/ProductController.js';

const routes = [{
  endpoint: '/users',
  handler: UserController.index
}, {
  endpoint: '/products',
  handler: ProductController.index
}];

export default routes;