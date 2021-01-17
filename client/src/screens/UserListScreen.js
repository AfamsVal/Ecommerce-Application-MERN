import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import errorImg from "../images/error.gif";
import { userDeleteAction, userListAction } from "../action/userAction";
import ModalBox from "../components/ModalBox";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, users, error } = useSelector(({ userList }) => userList);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading: deleteLoading, userId: deleteUserId } = useSelector(
    ({ userDelete }) => userDelete
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(userListAction());
    } else {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  const userDeleteHandler = (userId, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      dispatch(userDeleteAction(userId));
    }
  };

  return error ? (
    <div className="container mt-6 mb-2">
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
            <i className="fa fa-info-circle"></i> {error}
          </h1>
        </div>
      </div>
    </div>
  ) : loading ? (
    <div className="container mt-6 mb-2">
      <div className="row mb-5">
        <div className="col-12">
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <Skeleton count={6} height={60} />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  ) : users && users.length === 0 && !loading ? (
    <div className="container mt-4 mb-2" style={{ backgroundColor: "#ddd" }}>
      <div className="row mb-5">
        <div className="col-12 py-5">
          <h2 className="text-danger text-center">Users List is Empty</h2>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="container mt-6 mb-2">
        <div className="row mt-3 py-4 my-5">
          <div className="col-sm-12 mb-3">
            <h3 className="text-center text-uppercase font-weight-bold mb-3">
              All Users
            </h3>
            <div className="table-responsive-sm">
              <table className="table table-sm table-striped table-bordered text-center">
                <thead>
                  <tr>
                    <th>USER ID</th>
                    <th>NAME</th>
                    <th>EMAIL PRICE</th>
                    <th>ADMIN</th>
                    <th>JOINED</th>
                    <th>EDIT</th>
                    <th>DEL</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.isAdmin ? (
                          <strong className="text-success">YES</strong>
                        ) : (
                          <strong className="text-danger">
                            <i className="fas fa-times"></i>
                          </strong>
                        )}
                      </td>
                      <td>{user.createdAt.substring(0, 10)}</td>

                      <td>
                        <ModalBox userId={user._id} />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => userDeleteHandler(user._id, user.name)}
                        >
                          {deleteLoading && user._id === deleteUserId ? (
                            <div className="spinner-border spinner-border-sm"></div>
                          ) : (
                            <i className="fas fa-trash-alt"></i>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListScreen;
