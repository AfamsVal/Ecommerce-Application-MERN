import React from "react"
import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <div className="register-photo mt-6 mb-5 py-5">
      <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password-repeat"
              placeholder="Confirm password"
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />I agree to
                the license terms.
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-dark btn-block" type="submit">
              Sign Up
            </button>
          </div>
          <Link to="login" className="font-size-1 text-gray">
            <u>I already have an account?</u>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Checkout
