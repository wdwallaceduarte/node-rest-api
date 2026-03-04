import users from '../mocks/users.js';

const UserController = {
  index(request, response) {

    const sorted_users = users.sort(function (a, b) {
      if (request.query.order === 'desc') {
        return b.id - a.id;
      }

      return a.id - b.id;
    });

    response.writeHead(
      200,
      {'content-type': 'application/json'}
    );
    response.end(JSON.stringify(sorted_users));
  }
}

export default UserController;