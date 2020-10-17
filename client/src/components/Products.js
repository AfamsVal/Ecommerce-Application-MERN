import React from "react"
import { Link } from "react-router-dom"
import Rating from "../components/Rating"
import PropTypes from "prop-types"

const Products = ({ products }) => {
  return (
    <>
      {products.map(({ _id, name, images, price, rating, numReviews }) => (
        <div key={_id} className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
          <div className="card-hover product-card mx-auto bg-light border h-80">
            {/* <img
              className="mx-auto img-fluid"
              src={images}
              alt="cart item"
              width="auto"
              height="auto"
            /> */}
            <img
              className="mx-auto img-fluid mx-auto d-block"
              src={images}
              alt="cart item"
              width="50%"
              style={{ minHeight: "130px", maxHeight: "120px" }}
              height="50%"
            />
            <div className="card-body text-center mx-auto w-100">
              <p className="card-title font-weight-bold my-0 w-100">
                {name.slice(0, 25)}
                {name.length > 25 && "..."}
              </p>
              <p className="card-text text-brown font-weight-bold font-size-3 pb-0 mb-1">
                ~ ${price} ~
              </p>
              <div className="pb-1 bg-gray">
                <Rating rating={rating} numReviews={`${numReviews} reviews`} />
              </div>
              <div className="mt-3 btn-group btn-group-sm">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  {" "}
                  <Link
                    className="text-dark text-decoration-none"
                    to={`product-details/${_id}`}
                  >
                    DETAILS
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="fa fa-shopping-cart"></i> ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Products

Products.propTypes = {
  products: PropTypes.array.isRequired,
}
