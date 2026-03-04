import products from "../mocks/products";

const ProductController = {
    index(response) {
        response.writeHead(
            200, 
            {'content-type': 'application/json'}
        )
        resoponse.end(JSON.stringify(products))
    }
}

export default ProductController