import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import CheckoutItem from "../components/CheckoutItem"
const PRODUCTS = []
const Checkout = (props) => {
  //React-router-dom Link open at the top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.location.pathname])

  return (
    <section className="mt-6 mb-5">
      <div className="container bg-light shadow-box">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12 py-3">
            <h3 className="display-5 mb-2 font-weight-bold text-center">
              Shopping Cart
            </h3>
            <p className="mb-5 text-center">
              <i className="text-danger font-weight-bold font-size-3">
                {PRODUCTS.length}
              </i>{" "}
              items in your cart
            </p>
            <table
              id="shoppingCart"
              className="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th className="th-60">Product</th>
                  <th className="th-12">Price</th>
                  <th className="th-10">Quantity</th>
                  <th className="th-16"></th>
                </tr>
              </thead>
              <tbody>
                <CheckoutItem items={PRODUCTS} />
              </tbody>
            </table>
            <div className="float-right text-right">
              <h4>Subtotal:</h4>
              <h1>$99.00</h1>
            </div>
          </div>
        </div>
        <div className="row mt-4 d-flex align-items-center">
          <div className="col-sm-6 order-md-2 text-right">
            <a
              href="catalog.html"
              className="btn btn-dark mb-4 btn-lg pl-5 pr-5"
            >
              Checkout
            </a>
          </div>
          <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <Link to="/" className="text-dark font-weight-bold">
              <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
