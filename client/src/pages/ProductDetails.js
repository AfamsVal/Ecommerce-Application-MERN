import React, { useState, useEffect } from "react"
import Rating from "../components/Rating"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import axios from "axios"

const ProductDetails = (props) => {
  const { goBack } = props.history
  const { id } = props.match.params
  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios(`/api/products/${id}`)
        setProduct(data)
      } catch (err) {
        const { error } = err.response
        console.log(error)
      }
    }
    getProduct()
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

  return Object.keys(product).length === 0 ? (
    <div className="container mt-6 mb-2">
      <div className="row mb-5">
        <div className="col-12 col-sm-5">
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <Skeleton count={1} height={400} />
          </SkeletonTheme>
        </div>
        <div className="col-12 col-sm-7">
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <Skeleton count={7} height={60} />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  ) : (
    <section>
      <div className="container mt-6 mb-2">
        <div className="row mb-5">
          <div
            onClick={() => goBack()}
            className="col-12 text-dark font-weight-bold cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i> Go back
          </div>
          <div className="col-sm-5 mt-3">
            <div className="card pt-4 px-5 mt-2">
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
              <img className="w-100" src={images} alt={name} />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="card py-5 px-5 mt-2 mb-5">
              <h3 className="text-uppercase font-weight-bold">{name}</h3>
              <div>
                {rating && (
                  <Rating
                    rating={rating}
                    numReviews={`${numReviews} reviews`}
                  />
                )}
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
