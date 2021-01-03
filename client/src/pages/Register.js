import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../action/userAction";

const Checkout = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.userRegister);
  const [alert, setAlert] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { name, email, password1, password2 } = user;

  //REGISTER NEW USER
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = password1;
    dispatch(registerAction(name, email, password));
    setUser({ name: "", email: "", password1: "", password2: "" });
    setAlert(true);
  };

  //FILL UP INPUT
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-photo mt-6 mb-5 py-5">
      <div className="form-container">
        <div className="image-holder"></div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">
            <strong>Create</strong> new account.
          </h2>
          {error && alert && (
            <div className="alert alert-danger fade show">
              <button
                type="button"
                className="close"
                onClick={() => setAlert(false)}
              >
                <small>&times;</small>
              </button>
              <strong>Error!</strong> {error}
            </div>
          )}
          <div className="form-group">
            <input
              className="form-control"
              type="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password1"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password2"
              placeholder="Confirm password"
              onChange={handleChange}
            />
            {password1 !== password2 && (
              <small className="text-danger ml-3">
                Password does not match
              </small>
            )}
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
            <button
              disabled={
                !name ||
                !email ||
                !password1 ||
                !password2 ||
                password1 !== password2
              }
              className="btn btn-dark btn-block"
              type="submit"
            >
              {loading && (
                <div className="spinner-border spinner-border-sm"></div>
              )}{" "}
              Sign Up
            </button>
          </div>
          <Link to="login" className="font-size-1 text-gray">
            <u>I already have an account?</u>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
