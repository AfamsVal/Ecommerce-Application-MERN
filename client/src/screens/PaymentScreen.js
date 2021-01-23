import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../action/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

//React-router-dom Link open at the top of page
const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { error, cartItems, shippingAddress } = useSelector(({ cart }) => cart);

  useEffect(() => {
    if (Object.entries(cartItems).length === 0) return history.push("/");
    if (Object.keys(shippingAddress).length === 0) history.push("/shipping");

    window.scrollTo(0, 0);
  });

  const [alert, setAlert] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");

  //SUBMIT PAYMENT INFORMATION
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    console.log(paymentMethod);
    //setAlert(true);
    history.push("/place-order");
  };

  return (
    <section>
      <div className="container mt-6 ">
        <CheckoutSteps step1 step2 step3 />
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
                  <h3 className="text-center mb-4">
                    <strong>Payment</strong> Method
                  </h3>
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
                  <div className="text-left">
                    <div className=" my-3">
                      <input
                        type="radio"
                        id="PayPal"
                        name="paymentMethod"
                        value="PayPal"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        //checked={paymentMethod === "PayPal"}
                      />
                      <label
                        className="ml-2 font-size-3"
                        htmlFor="paymentMethod"
                      >
                        <i className="fab fa-paypal text-primary"></i>{" "}
                        <strong>PayPal</strong>
                      </label>
                    </div>
                    <div className=" my-3">
                      <input
                        type="radio"
                        id="PayStack"
                        name="paymentMethod"
                        value="PayStack"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        //checked={paymentMethod === "PayStack"}
                      />
                      <label
                        className="ml-2 font-size-3"
                        htmlFor="paymentMethod"
                      >
                        <i className="fab fa-cc-mastercard text-danger"></i>{" "}
                        <strong>Pay Stack</strong>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      disabled={!paymentMethod}
                      className="btn btn-dark btn-block"
                      type="submit"
                    >
                      {/* {loading && (
                        <div className="spinner-border spinner-border-sm"></div>
                      )}{" "} */}
                      Place Order <i class="fas fa-angle-double-right"></i>
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

export default PaymentScreen;
