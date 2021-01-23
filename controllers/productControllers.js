import asyncHandler from "express-async-handler";
import ProductModel from "../Models/ProductModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({}).populate("user", "name email");

  res.json(products);
});

//@desc Delete a product
//@route /api/products/:id
//@access Private Admin Delete
const adminDeleteProductList = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.findById(productId);
  if (product) {
    await product.remove();
    const products = await ProductModel.find({});
    res.json(products);
  } else {
    res.status(404);
    throw new Error({ error: "Product not found!" });
  }
});

//@desc Create a product
//@route /api/products/
//@access Private Admin Create
const adminCreateProductList = asyncHandler(async (req, res) => {
  const newProduct = ProductModel({
    name: "sample name",
    price: 0,
    user: req.user._id,
    images: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "sample description",
  });

  const createdProduct = await newProduct.save();
  if (createdProduct) {
    res.status(201).json(createdProduct);
  } else {
    res.status(404);
    throw new Error({ error: "Product not found!" });
  }
});

//@desc Update a product
//@route /api/products/:id
//@access PUT: Private Admin
const adminUpdateProductList = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    //numReviews,
    description,
  } = req.body;

  const product = await ProductModel.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    //product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    //product.numReviews = numReviews;
    product.description = description;

    await product.save();
    const updatedProduct = await ProductModel.find({}).select("-__v");
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found!");
  }
});

//
//
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
});

export {
  getProducts,
  getProductById,
  adminDeleteProductList,
  adminCreateProductList,
  adminUpdateProductList,
};
