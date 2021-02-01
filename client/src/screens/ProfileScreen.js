import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getUserDetailsAction,
  userUpdateProfileAction,
} from "../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { listMyOrders } from "../action/orderAction";
import errorImg from "../images/error.gif";

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { user, loading, error } = useSelector((state) => state.userDetails);
  const { orders, loading: orderLoading, error: orderError } = useSelector(
    (state) => state.orderListMy
  );
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState(true);
  const [{ prevImg, imgFile }, setProfileImage] = useState({
    prevImg: "",
    imgFile: "",
  });

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetailsAction("profile"));
        dispatch(listMyOrders());
      } else {
        setUserData((prevState) => ({
          ...prevState,
          name: user.name,
          email: user.email,
        }));
      }
    }
  }, [userInfo, history, dispatch, user]);

  const hadleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userUpdateProfileAction({ ...userData, id: user._id }));
    setAlert(true);
  };

  const handleFileChange = (e) => {
    e.persist();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage((prevState) => ({
          ...prevState,
          prevImg: reader.result,
          imgFile: e.target.files[0],
        }));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      {userInfo ? (
        loading ? (
          <div className="container mt-6 mb-2">
            <div className="row mb-5">
              <div className="col-12 col-sm-4">
                <SkeletonTheme color="#ddd" highlightColor="#ccc">
                  <Skeleton count={1} height={300} />
                </SkeletonTheme>
              </div>
              <div className="col-12 col-sm-8">
                <SkeletonTheme color="#ddd" highlightColor="#ccc">
                  <Skeleton count={5} height={60} />
                </SkeletonTheme>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row mt-6">
              <div className="col-sm-12 mb-3">
                <h1 className="text-center text-uppercase font-weight-bold mb-2">
                  My Profile
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-5 col-md-4 mt-2">
                <img
                  src={
                    prevImg
                      ? prevImg
                      : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  }
                  className="avatar img-rounded img-fluid w-100"
                  alt="avatar"
                />
                <p className="mt-2">Upload a profile photo...</p>
                <input type="file" onChange={handleFileChange} />
                {prevImg && (
                  <p className="mt-2">
                    <button className="btn btn-sm btn-secondary">
                      <i className="fas fa-cloud-upload-alt"></i> Upload Now
                    </button>
                  </p>
                )}
              </div>
              <div className="col-12 col-sm-7 col-md-8 mb-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
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
                    {userUpdateProfile.error && alert && (
                      <div className="alert alert-danger fade show">
                        <button
                          type="button"
                          className="close"
                          onClick={() => setAlert(false)}
                        >
                          <small>&times;</small>
                        </button>
                        <strong>Error!</strong> {userUpdateProfile.error}
                      </div>
                    )}
                    {userUpdateProfile.success && alert && (
                      <div className="alert alert-success fade show">
                        <button
                          type="button"
                          className="close"
                          onClick={() => setAlert(false)}
                        >
                          <small>&times;</small>
                        </button>
                        <strong> Updated Successfully!</strong>
                      </div>
                    )}
                    <div className="form-group col-12 mb-2">
                      <label htmlFor="name">Enter name</label>
                      <input
                        autoComplete="new-name"
                        type="text"
                        className="form-control"
                        name="name"
                        value={userData.name}
                        placeholder="Name required"
                        onChange={hadleChange}
                      />
                    </div>
                    <div className="form-group col-12 mb-2">
                      <label htmlFor="email">E-mail</label>
                      <input
                        autoComplete="off"
                        type="email"
                        className="form-control"
                        name="email"
                        value={userData.email}
                        placeholder="E-mail required"
                        onChange={hadleChange}
                      />
                    </div>
                    <div className="form-group col-12 mb-2">
                      <label htmlFor="password">Change Password</label>
                      <input
                        autoComplete="off"
                        type="password"
                        className="form-control"
                        name="password"
                        value={userData.password}
                        placeholder="New password"
                        onChange={hadleChange}
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <br />
                      <button
                        className="btn btn-lg btn-dark btn-block"
                        type="submit"
                      >
                        {userUpdateProfile.loading ? (
                          <div className="spinner-border spinner-border-sm"></div>
                        ) : (
                          <i className="fa fa-pencil"></i>
                        )}{" "}
                        Update Info
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
      ) : (
        ""
      )}

      {/* ///
  BELOW IS THE ORDER TABLE */}
      {orderError ? (
        <div className="container mt-4 mb-2">
          <div className="row mb-5">
            <div className="col-6 offset-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 mt-3">
              <img
                className="img-fluid text-center"
                src={errorImg}
                alt="Not Found"
              />
            </div>
            <div className="col-12">
              <h1 className="pb-5 text-center text-danger">
                <i className="fa fa-info-circle"></i> {orderError}
              </h1>
            </div>
          </div>
        </div>
      ) : orderLoading ? (
        <div className="container mt-5 mb-2">
          <div className="row mb-5">
            <div className="col-12">
              <SkeletonTheme color="#ddd" highlightColor="#ccc">
                <Skeleton count={4} height={60} />
              </SkeletonTheme>
            </div>
          </div>
        </div>
      ) : orders && orders.length === 0 && !orderLoading ? (
        <div
          className="container mt-4 mb-2"
          style={{ backgroundColor: "#ddd" }}
        >
          <div className="row mb-5">
            <div className="col-12 py-5">
              <h2 className="text-danger text-center">Order List is Empty</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mb-2" style={{ backgroundColor: "#ddd" }}>
          <div className="row mt-3 py-4 mb-5">
            <div className="col-sm-12 mb-3">
              <h3 className="text-center text-uppercase font-weight-bold mb-3">
                My Orders
              </h3>
              <div className="table-responsive-sm">
                <table className="table table-sm table-hover text-center">
                  <thead>
                    <tr>
                      <th>ORDER ID</th>
                      <th>DATE</th>
                      <th>TOTAL PRICE</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th>-</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.totalPrice}</td>
                        <td>
                          {order.isPaid ? (
                            <strong className="text-success">YES</strong>
                          ) : (
                            <strong className="text-danger">NO</strong>
                          )}
                        </td>
                        <td>
                          {" "}
                          {order.isDelivered ? (
                            <strong className="text-success">YES</strong>
                          ) : (
                            <strong className="text-danger">NO</strong>
                          )}
                        </td>
                        <td>
                          <Link
                            className="btn btn-secondary"
                            to={`/order/${order._id}`}
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
