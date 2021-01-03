import React, { useState, useEffect } from "react";
import {
  getUserDetailsAction,
  userUpdateProfileAction,
} from "../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { user, loading, error } = useSelector((state) => state.userDetails);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetailsAction("profile"));
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

  return userInfo ? (
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
        <div className="row  mt-6">
          <div className="col-sm-12 mb-3">
            <h1 className="text-center text-uppercase font-weight-bold mb-2">
              My Profile
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mt-2">
            <img
              src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              className="avatar img-circle img-rounded"
              alt="avatar"
            />
            <p className="mt-2">Upload a profile photo...</p>
            <input type="file" />
          </div>
          <div className="col-sm-9 mb-5">
            <form onSubmit={handleSubmit}>
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
              <div className="col-xs-6 mb-2">
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
              <div className="col-xs-6 mb-2">
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
              <div className="col-xs-6 mb-2">
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
              <div className="col-xs-12 col-md-6">
                <br />
                <button className="btn btn-lg btn-dark btn-block" type="submit">
                  {userUpdateProfile.loading ? (
                    <div className="spinner-border spinner-border-sm"></div>
                  ) : (
                    <i className="fa fa-pencil"></i>
                  )}{" "}
                  Update Info
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  ) : (
    ""
  );
};

export default Profile;
