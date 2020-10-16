import React from "react"
import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <div className="register-form">
      <form method="post">
        <h2 className="text-center">Register</h2>
        <div className="form-group mt-4">
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="E-mail"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group">
          <button className="font-weight-bold btn btn-dark btn-block">
            Register
          </button>
        </div>
        <div className="clearfix">
          <label className="float-left form-check-label">
            <input type="checkbox" /> Remember me
          </label>
          <Link className="text-dark float-right" to="/login">
            <u> Login? </u>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Checkout
