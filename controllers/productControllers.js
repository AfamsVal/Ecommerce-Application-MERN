import asyncHandler from "express-async-handler"
import ProductModel from "../Models/ProductModel.js"

const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({})
  // res.status(401)
  // throw new Error("Product not found!")
  res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
  //   const id = req.params.id
  //   ProductModel.findById(id)
  //     .then((product) => {
  //       if (product) return res.json(product)
  //       //Below two(2) line in catch my error manage in postman
  //       //////////////
  //       res.status(400)
  //       throw new Error({ error: "Product not found!" })
  //     })
  //     .catch((err) => {
  //       res.status(400).json({ error: "Product not found!!" })
  //     })
})

export { getProducts, getProductById }
