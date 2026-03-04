const erros = {
    notFound (response) {
        response.writeHead(
            404,
            {'content-type':'aplication/json'}
        )
        response.end(JSON.stringify({ message: 'Not Found!'}))
    }
}