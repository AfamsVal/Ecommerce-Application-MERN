import React from "react"
import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <div className="px-2">
      <div className="login-form ">
        <form>
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
          <p className="text-center mt-4">
            <Link className="text-dark font-size-1" to="/register">
              <u>Create an Account?</u>
            </Link>
          </p>
        </form>
        {/* 
        react-top-loading-bar
        <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
        <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
        <button onClick={() => setProgress(100)}>Complete</button> */}
      </div>
    </div>
  )
}

export default Checkout
