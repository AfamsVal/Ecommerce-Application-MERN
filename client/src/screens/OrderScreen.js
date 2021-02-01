import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails, orderPayAction } from "../action/orderAction";
import { PayPalButton } from "react-paypal-button-v2";
import errorImg from "../images/error.gif";
import { ORDER_PAY_REQUEST } from "../constant/orderConstant";
import noImg from '../images/no-image.png'

const OrderScreen = ({ match }) => {
  const myRef = useRef(null);
  const orderId = match.params.id;
  const [alert, setAlert] = useState(true);
  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector(
    ({ orderDetails }) => orderDetails
  );
  const { success: successPay } = useSelector(({ orderPay }) => orderPay);
  const {
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    orderItems,
    user,
    isPaid,
    paidAt,
    isDelivered,
    delliveredAt,
  } = orders;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (successPay) {
      dispatch({ type: ORDER_PAY_REQUEST });
      dispatch(getOrderDetails(orderId));
    } else {
      if (!orders.isPaid) {
        if (!window.paypal) {
          addPaypalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, orders, successPay]);

  useEffect(() => window.scrollTo(0, 0));

  const successPaymentHandler = (paymentResult) => {
    dispatch(orderPayAction(orderId, paymentResult));
  };

  return error ? (
    <section>
      <div className="container">
        <div className="row my-5">
          <div className="col-6 offset-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 mt-3">
            <img
              className="img-fluid text-center"
              src={errorImg}
              alt="Not Found"
            />
          </div>
          <div className="col-12">
            <h1 className="pb-5 text-center text-danger">
              <i className="fa fa-info-circle"></i> {error}
            </h1>
          </div>
        </div>
      </div>
    </section>
  ) : loading ? (
    <section>
      <div className="container mt-6 mb-2">
        <div className="row mb-5">
          <div className="col-12 col-sm-5">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={400} />
            </SkeletonTheme>
          </div>
          <div className="col-12 col-sm-7">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={7} height={60} />
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section>
      <div className="container mt-6 mb-2">
        <div className="row mb-5">
          <div className="col-sm-7 mt-4">
            <div className="card py-4 px-5 mt-2 w-100">
              <h5 className="text-uppercase font-weight-bold">Shipping</h5>
              <address>
                <p>
                  <strong className="font-weight-bold">Name: </strong>{" "}
                  {user.name}{" "}
                </p>
                <p>
                  <strong className="font-weight-bold">E-mail: </strong>{" "}
                  <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                </p>
                <span className="font-weight-bold">Address:</span>{" "}
                {shippingAddress.address}, {shippingAddress.city},{" "}
                {shippingAddress.state}, {shippingAddress.country}.
              </address>
              {isDelivered ? (
                <div className="p-2 bg-success text-white">
                  <i className="far fa-thumbs-up"></i> Delivered on{" "}
                  {delliveredAt.substring(0, 10)}
                </div>
              ) : (
                <div className="p-2 bg-danger text-white">
                  <i className="fas fa-info-circle"></i> Not Delivered
                </div>
              )}
              <hr />
              <h5 className="text-uppercase font-weight-bold">
                Payment Details
              </h5>
              <address>
                <span className="font-weight-bold">Method:</span>{" "}
                {paymentMethod}
              </address>
              {isPaid ? (
                <div className="p-2 bg-success text-white">
                  <i className="far fa-thumbs-up"></i> Paid on{" "}
                  {paidAt.substring(0, 10)}
                </div>
              ) : (
                <div className="p-2 bg-danger text-white">
                  <i className="fas fa-info-circle"></i> Not Paid
                </div>
              )}
              <hr />
              <h5 className="text-uppercase font-weight-bold">Order Items</h5>
              <div className="table-responsive">
                {orderItems.length === 0 ? (
                  <h4 className="text-danger">
                    <i className="fas fa-info-circle text-danger"></i> Cart is
                    Empty
                  </h4>
                ) : (
                  <table className="table table-hover">
                    <tbody>
                      {orderItems.map((item) => (
                        <tr key={item.product}>
                          <td>
                            <img
                              className="img-fluid"
                              width="70px"
                              src={item.images ? item.images : noImg}
                              alt={item.name}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>
                            {item.qty} x ${item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
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
                      <td>${itemsPrice ? itemsPrice : 0}</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>${shippingPrice ? shippingPrice : 0}</td>
                    </tr>
                    <tr>
                      <th>Tax</th>
                      <td>${taxPrice ? taxPrice : 0}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <th>${totalPrice ? totalPrice : 0}</th>
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
                {1 > 2 && alert && (
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
                <div>
                  {orders.isPaid ? (
                    <button type="button" className="btn btn-success btn-block" disabled>
                      <i className="fas fa-thumbs-up"></i> Order Paid
                    </button>
                  ) : (
                    sdkReady && (
                      <PayPalButton
                      className="btn-block w-100"
                        ref={myRef}
                        amount={orders.totalPrice}
                        onSuccess={successPaymentHandler}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderScreen;
