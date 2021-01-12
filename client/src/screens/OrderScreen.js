import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";

const OrderScreen = () => {
  return (
    <section>
      <div className="container mt-6 mb-2">
        <CheckoutSteps step1 step2 step3 step4 />
        <div className="row mb-5">
          <div className="col-sm-7 mt-4">How are u</div>
        </div>
      </div>
    </section>
  );
};

export default OrderScreen;
