import React from "react"
import { Link } from "react-router-dom"

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product._id}
          className="col-12 col-sm-6 col-md-4 col-lg-3 item py-2"
        >
          <div className="card-hover product-card bg-light border h-100">
            <img
              className="mx-auto img-fluid"
              src={product.images}
              alt="cart item"
              width="auto"
              height="auto"
            />
            <div className="card-body text-center mx-auto">
              <p className="card-title font-weight-bold">Yail wrist watch</p>
              <p className="card-text">$299</p>
              <div className="btn-group btn-group-sm">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  {" "}
                  <Link to="product-details/2">DETAILS</Link>
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
