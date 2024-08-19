import express from "express";
import bodyParser from "body-parser";
import { products } from '../model/index.js'

const productRouter = express.Router();

productRouter.use(bodyParser.json())

productRouter.get('/products', (req, res) => {
    products.fetchProducts(req, res)
})

productRouter.get('/products/recent', (req, res) => {
    products.recentProducts(req, res)
})

productRouter.get('/products/:id', (req, res) => {
    products.fetchProduct(req, res)
})

productRouter.post('/products/addProduct', (req, res) => {
    products.addProduct(req, res)
})

productRouter.patch('/products/update/:id', (req, res) => {
    products.updateProduct(req, res)
})

productRouter.delete('/products/delete/:id', (req, res) => {
    products.deleteProduct(req, res)
})

export {
    productRouter
}