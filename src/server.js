const http = require('node:http');
const routes = require('./routes');

http.createServer(function (request, response) {
  
  const route = routes.find(function (r) {
    return request.url === r.endpoint;
  });

  if (route) {
    route.handler(response);
    return;
  }

  response.writeHead(
    200,
    {'content-type': 'text/html; charset=utf-8'}
  );
  response.end('<h1>Sejá bem vindo usuario</h1>');
}).listen(3000);
