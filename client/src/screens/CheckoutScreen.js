import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartAction,
  emptyCartAction,
  loadingCartItem,
} from "../action/cartAction";
import CheckoutItem from "../components/CheckoutItem";
import { formatNumber } from "../utils/numberFormatter";

const Checkout = ({ location, history, match }) => {
  const id = match.params.id ? match.params.id : "";
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  //React-router-dom Link open at the top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { cartItems, loading, deleteLoader } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    id ? dispatch(cartAction(id, qty)) : dispatch(loadingCartItem(false, null));
  }, [dispatch, id, qty]);

  const paymentHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <section className="mt-6 mb-5">
      <div className="container bg-light shadow-box">
        <div className="row w-100 mx-auto">
          <div className="col-12 my-4 text-md-left font-size-3">
            <Link to="/" className="text-dark font-weight-bold">
              <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
            </Link>
          </div>
          <div className="col-lg-12 col-md-12 col-12 py-3">
            <h3 className="mb-2 font-weight-bold text-center font-size-6">
              Shopping Cart
            </h3>
            <p className="mb-5 text-center font-size-4">
              <i className="font-weight-bold">
                {cartItems.length
                  ? cartItems.reduce(
                      (accumulator, item) => accumulator + Number(item.qty),
                      0
                    )
                  : "No"}
              </i>{" "}
              item
              {cartItems.length > 1 ? "s" : ""} in your cart
            </p>
          </div>
          <CheckoutItem
            items={cartItems}
            loading={loading}
            deleteLoader={deleteLoader}
          />
          <div className="col-lg-12 col-md-12 col-12">
            <div className="float-right text-right">
              <h4>Subtotal:</h4>
              <h2>
                $
                {cartItems.length > 0
                  ? formatNumber(
                      cartItems
                        .reduce(
                          (accumulator, item) =>
                            accumulator + Number(item.qty) * Number(item.price),
                          0
                        )
                        .toFixed(2)
                    )
                  : "0.0"}
              </h2>
            </div>
          </div>

          <div className="col-12 order-md-2 my-4 text-right">
            <div className="btn-group btn-group-lg">
              <button
                onClick={() => dispatch(emptyCartAction())}
                type="button"
                className="btn btn-secondary"
              >
                <i class="far fa-trash-alt"></i> Empty Cart
              </button>
              <button
                onClick={paymentHandler}
                type="button"
                className={`btn btn-dark ${
                  cartItems.length === 0 ? "not-allowed" : ""
                }`}
                disabled={cartItems.length === 0}
              >
                <i class="fab fa-opencart"></i> Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
