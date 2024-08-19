import express from "express"
import bodyParser from "body-parser"
import { products } from "../model/index.js"

const productRouter = express.Router();

productRouter.use(bodyParser.json())

/**all products */
productRouter.get("/", (req, res) => {
    products.fetchProducts(req, res)
})

/**single product */
productRouter.get('/:id', (req, res) => {
    products.fetchProduct(req, res)
})

/**recent products */
productRouter.get('/recent', (req, res) => {
    products.recentProducts(req, res)
})

/**add product */
productRouter.post('/add', (req, res) => {
    products.addProduct(req, res)
})

/**update product */
productRouter.patch('/:id', (req, res) => {
    products.updateProduct(req, res)
})

/**delete product */
productRouter.delete('/:id', (req, res) => {
    products.deleteProduct(req, res)
})

export {
    productRouter
}