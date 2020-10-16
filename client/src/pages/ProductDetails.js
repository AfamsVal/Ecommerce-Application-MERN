import React, { useState, useEffect } from "react"
import { PRODUCTS } from "../products"

const ProductDetails = (props) => {
  const { goBack } = props.history
  const name = "val"
  const { _id } = props.match.params
  const [product, setProduct] = useState({})
  useEffect(() => {
    // const fetchData = async () => {
    //   const item = await PRODUCTS.json()
    //   return item
    // }
    // //setProduct({ item })
    // console.log(fetchData())
  }, [_id])
  // console.log(product)
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
              <img
                className="w-100"
                src="http://placekitten.com/400/252"
                alt={name}
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-uppercase font-weight-bold">
                men's shoes fashion
              </h3>
              <div>
                <div>
                  <span className="fa fa-star text-warning"></span>
                  <span className="fa fa-star text-warning"></span>
                  <span className="fa fa-star-half text-warning"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description my-3">
                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                cubilia sem sem! Repudiandae et! Massa senectus enim minim
                sociosqu delectus posuere.
              </p>
              <h4>
                Current price: <span className="font-weight-bolder">$180</span>
              </h4>
              <p className="vote">
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
