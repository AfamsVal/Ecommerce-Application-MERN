import mongoose from "mongoose"
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
)

const ProductSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, isRequired: true },
    images: { type: String, isRequired: true },
    description: { type: String, isRequired: true },
    brand: { type: String, isRequired: true },
    category: { type: String, isRequired: true },
    price: { type: Number, isRequired: true, default: 0 },
    countInStock: { type: Number, default: 0 },
    reviews: [reviewSchema],
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

export default Product
