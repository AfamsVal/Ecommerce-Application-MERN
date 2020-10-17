import React, { useState, useEffect } from "react"
import { PRODUCTS } from "../products"
import Rating from "../components/Rating"

const ProductDetails = (props) => {
  const { goBack } = props.history
  const { id } = props.match.params
  const [product, setProduct] = useState({})

  useEffect(() => {
    const data = PRODUCTS.find((p) => p._id.toString() === id)
    setProduct(data)
  }, [id])

  const {
    description,
    category,
    name,
    images,
    price,
    rating,
    numReviews,
  } = product

  return (
    <section>
      <div className="container mt-6 mb-2">
        <div
          onClick={() => goBack()}
          className="text-dark font-weight-bold cursor-pointer"
        >
          <i className="fas fa-arrow-left mr-2"></i> Go back
        </div>
        <div className="card py-5 px-5 mt-2 mb-5">
          <div className="wrapper row">
            <div className="col-md-6">
              <img className="w-100" src={images} alt={name} />
            </div>
            <div className="col-md-6">
              <p className="font-size-3 text-gray">
                <span>
                  <i className="fa fa-home font-size-4 "></i>
                </span>
                <span className="ml-2">
                  <i className="fa fa-long-arrow-right"></i> Products
                </span>
                <span className="ml-2">
                  <i className="fa fa-long-arrow-right"></i> {category}
                </span>
              </p>
              <hr />
              <h3 className="text-uppercase font-weight-bold">{name}</h3>
              <div>
                <Rating rating={rating} numReviews={`${numReviews} reviews`} />
              </div>
              <p className="product-description my-3">{description}</p>
              <h4>
                Current price:{" "}
                <span className="font-weight-bolder">${price}</span>
              </h4>
              <p className="vote mt-3">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>

              <div>
                <div className="btn-group btn-group-lg">
                  <button type="button" className="btn btn-dark">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
