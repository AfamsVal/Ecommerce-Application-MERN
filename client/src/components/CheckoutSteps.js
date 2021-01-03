import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <Link className="navbar-brand  mr-5 text-dark" to="#">
          <strong>
            Steps <i className="fas fa-angle-double-right"></i>
          </strong>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item mr-2">
            {step1 ? (
              <Link className="nav-link text-dark" to="/login">
                <b>Sign In</b>
              </Link>
            ) : (
              <Link className="nav-link not-allowed text-grayer" to="/login">
                Sign In
              </Link>
            )}
          </li>
          <li className="nav-item mr-2">
            {step2 ? (
              <Link className="nav-link  text-dark" to="/shipping">
                <b>Shipping</b>
              </Link>
            ) : (
              <Link className="nav-link not-allowed text-grayer" to="/shipping">
                Shipping
              </Link>
            )}
          </li>
          <li className="nav-item mr-2">
            {step3 ? (
              <Link className="nav-link text-dark" to="/payment">
                <b>Payment</b>
              </Link>
            ) : (
              <Link className="nav-link not-allowed text-grayer" to="/payment">
                Payment
              </Link>
            )}
          </li>
          <li className="nav-item mr-2">
            {step4 ? (
              <Link className="nav-link text-dark" to="/place-order">
                <b>Place order</b>
              </Link>
            ) : (
              <Link
                className="nav-link not-allowed text-grayer"
                to="/place-order"
              >
                Place order
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CheckoutSteps;
