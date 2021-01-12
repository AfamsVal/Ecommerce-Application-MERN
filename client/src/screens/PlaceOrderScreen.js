import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrderAction } from "../action/orderAction";

const ProductDetails = ({ history }) => {
  const [alert, setAlert] = useState(true);

  const dispatch = useDispatch();
  const cart = useSelector(({ cart }) => cart);
  const { cartItems, paymentMethod, shippingAddress } = cart;

  const { loading, success, order, error } = useSelector(
    ({ createOrder }) => createOrder
  );

  useEffect(() => {
    if (success) history.push(`/order/${order._id}`);
    // eslint-disable-next-line
  }, [history, success]);

  useEffect(() => {
    //if (Object.entries(cartItems).length === 0) return history.push("/");
    if (!paymentMethod) history.push("/payment");

    window.scrollTo(0, 0);
  }, [paymentMethod, cartItems, history]);

  const addDecimal = (num) => (Math.round(num * 100) / 100).toFixed(2);

  cart.itemsPrice = addDecimal(
    cartItems.reduce(
      (accumulator, item) =>
        accumulator + Number(item.price) * Number(item.qty),
      0
    )
  );

  cart.shippingPrice = addDecimal(100);

  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));

  cart.totalPrice = addDecimal(
    Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  );

  //SUBMIT Place Order//////////////
  const placeOrderHandle = () => {
    dispatch(
      createOrderAction({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        shippingPrice: cart.shippingPrice,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
    setAlert(true);
  };

  return (
    <section>
      <div className="container mt-6 mb-2">
        <CheckoutSteps step1 step2 step3 step4 />
        <div className="row mb-5">
          <div className="col-sm-7 mt-4">
            <div className="card py-4 px-5 mt-2 w-100">
              <h5 className="text-uppercase font-weight-bold">Shipping</h5>
              <address>
                <span className="font-weight-bold">Address:</span>{" "}
                {shippingAddress.address}, {shippingAddress.city},{" "}
                {shippingAddress.state}, {shippingAddress.country}.
              </address>
              <hr />
              <h5 className="text-uppercase font-weight-bold">
                Payment Method
              </h5>
              <address>
                <span className="font-weight-bold">Method:</span>{" "}
                {paymentMethod}
              </address>
              <hr />
              <h5 className="text-uppercase font-weight-bold">Order Items</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <tbody>
                    {cartItems.length === 0 ? (
                      <h4 className="text-danger">
                        <i class="fas fa-info-circle text-danger"></i> Cart is
                        Empty
                      </h4>
                    ) : (
                      cartItems.map((item) => (
                        <tr key={item.product}>
                          <td>
                            <img
                              className="img-fluid"
                              width="70px"
                              src={item.image}
                              alt={item.name}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>
                            {item.qty} x ${item.price}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-5 mt-4">
            <div className="card py-5 px-5 mt-2 mb-5 w-100">
              <h5 className="text-uppercase font-weight-bold">Order Summary</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th>Items</th>
                      <td>${cart.itemsPrice ? cart.itemsPrice : 0}</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>${cart.shippingPrice ? cart.shippingPrice : 0}</td>
                    </tr>
                    <tr>
                      <th>Tax</th>
                      <td>${cart.taxPrice ? cart.taxPrice : 0}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <th>${cart.totalPrice ? cart.totalPrice : 0}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
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
                {success && alert && (
                  <div className="alert alert-success fade show">
                    <button
                      type="button"
                      className="close"
                      onClick={() => setAlert(false)}
                    >
                      <small>&times;</small>
                    </button>
                    <strong>Success!</strong> Order placed successfully
                  </div>
                )}
                <div className="btn-group btn-block btn-group-lg">
                  <button
                    onClick={placeOrderHandle}
                    type="button"
                    className="btn btn-dark"
                    disabled={cartItems === 0}
                  >
                    {loading ? (
                      <div className="spinner-border spinner-border-sm"></div>
                    ) : (
                      <i className="fa fa-file-invoice"></i>
                    )}{" "}
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
