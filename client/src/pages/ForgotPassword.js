import React from "react"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <div className="login-form">
      <form>
        <h2 className="text-center">Forgot Password</h2>
        <div className="form-group mt-4">
          <input type="email" className="form-control" placeholder="E-mail" />
        </div>

        <div className="form-group">
          <button className="font-weight-bold btn btn-dark btn-block">
            Recover Password
          </button>
        </div>
        <div className="clearfix">
          <Link className="text-dark float-left" to="/login">
            <u>Login?</u>
          </Link>
          <Link className="text-dark float-right" to="/register">
            Create Account?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
