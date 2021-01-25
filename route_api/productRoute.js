import express from "express";
import ProductModel from "../Models/ProductModel.js";
import {
  getProducts,
  //getProductById,
  adminDeleteProductList,
  adminCreateProductList,
  adminUpdateProductList,
} from "../controllers/productControllers.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

//@desc Fetch all products
//@route /api/products
//@access Public
router
  .get("/", getProducts)
  .post("/", protect, isAdmin, adminCreateProductList);

//@desc Delete a product
//@route /api/products/:id
//@access Private Admin Delete
router
  .route("/:id")
  .delete(protect, isAdmin, adminDeleteProductList)
  .put(protect, isAdmin, adminUpdateProductList);

//@desc Fetch single product
//@route /api/products/:id
//@access Public
router.get("/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findById(id)
    .then((product) => {
      if (product) return res.json(product);

      //Below two(2) line in catch my error manage in postman
      //////////////
      res.status(400);
      throw new Error({ error: "Product not found!" });
    })
    .catch((err) => {
      res.status(400).json({ error: "Product not found!!" });
    });
});

export default router;
