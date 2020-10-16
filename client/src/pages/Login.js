import React from "react"
import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <div className="login-form">
      <form method="post">
        <h2 className="text-center">Log in</h2>
        <div className="form-group mt-4">
          <input type="email" className="form-control" placeholder="E-mail" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button className="font-weight-bold btn btn-dark btn-block">
            Log in
          </button>
        </div>
        <div className="clearfix">
          <label className="float-left form-check-label">
            <input type="checkbox" /> Remember me
          </label>
          <Link className="text-dark float-right" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
      </form>
      <p className="text-center">
        <Link className="text-dark" to="/register">
          <u>Create an Account</u>
        </Link>
      </p>
    </div>
  )
}

export default Checkout
