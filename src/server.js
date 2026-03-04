import http from 'node:http';
import url from 'node:url';

import routes from './routes.js';
import errors from './errors.js';

http.createServer(function (request, response) {

  const parsed_url = url.parse(request.url, true);

  const router = routes.find(function (route) {
    return parsed_url.pathname === route.endpoint;
  });

  if (router) {
    request.query = parsed_url.query;
    router.handler(request, response);
    return;
  }

  errors.notFound(response);
}).listen(3000);