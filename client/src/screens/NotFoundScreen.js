import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-6 text-center mb-5 pb-5">
            <h1 className="text-danger">Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="my-4">
              <Link to="/" className="btn btn-dark btn-lg">
                <span className="fa fa-home"></span> Take Me Home{" "}
              </Link>
              <Link to="/contact-us" className="btn btn-secondary btn-lg">
                <span className="fa fa-envelope"></span> Contact Support{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
