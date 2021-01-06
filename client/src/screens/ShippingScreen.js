import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../action/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

//React-router-dom Link open at the top of page
const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { error, shippingAddress } = useSelector(({ cart }) => cart);

  const cartItems = useSelector(({ cart }) => cart.cartItems);

  useEffect(() => {
    if (cartItems.length === 0) history.push("/");
    window.scrollTo(0, 0);
  });
  const [alert, setAlert] = useState(true);
  const [shippingInfo, setshippingInfo] = useState({
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });
  const { phone, address, city, state, country } = shippingInfo;

  useEffect(() => {
    setshippingInfo((prevState) => ({ ...prevState, shippingAddress }));
  }, [shippingAddress]);

  //SUBMIT SHIPPING INFORMATION
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(shippingInfo));
    //setAlert(true);
    history.push("/payment");
  };

  //FILL UP INPUT
  const handleChange = (e) => {
    setshippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div className="container mt-6 ">
        <CheckoutSteps step1 step2 />
        <p className="text-center w-75 m-auto text-dark pt-4 font-size-2">
          If you are experiencing challenges or want to get more infomation
          about our shipping services, kindly{" "}
          <Link to="/contact-us">contact us</Link>.
        </p>
        <div className="row mx-auto">
          <div className="col-sm-12 col-md-6 offset-md-3 mb-5 mt-4">
            <div className="card border-0 w-100 contact-us">
              <div className="card-body text-center w-100">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-center">
                    <strong>Shipping</strong> Details
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
                      name="phone"
                      value={phone}
                      placeholder="Enter Phone No"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control resize-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="address"
                      value={address}
                      onChange={handleChange}
                      placeholder="Enter shipping address"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="name"
                      name="city"
                      value={city}
                      placeholder="Enter City"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      value={state}
                      placeholder="Enter State"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="country"
                      value={country}
                      placeholder="Enter Country"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      disabled={
                        !state || !address || !city || !state || !country
                      }
                      className="btn btn-dark btn-block"
                      type="submit"
                    >
                      {/* {loading && (
                        <div className="spinner-border spinner-border-sm"></div>
                      )}{" "} */}
                      Continue with Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingScreen;
