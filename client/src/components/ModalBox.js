import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAdminAction } from "../action/userAction";
import { USER_UPDATE_ADMIN_RESET } from "../constant/userConstant";

const ModalBox = ({ userId }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userList);
  const { loading, success, error: updateError } = useSelector(
    (state) => state.updateUserAdmin
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    userId: "",
    updateSuccess: false,
  });
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    if (updateError) {
      setEditUser({ ...editUser, error: updateError });
      dispatch({ type: USER_UPDATE_ADMIN_RESET });
    }

    if (success) {
      setEditUser({ ...editUser, updateSuccess: true, error: "" });
      setTimeout(() => setIsModalVisible(false), 1500);
      dispatch({ type: USER_UPDATE_ADMIN_RESET });
    }
  }, [dispatch, editUser, updateError, success]);

  const showModal = (userId) => {
    setIsModalVisible(true);
    const user = users.find((user) => user._id === userId);
    setEditUser({
      ...editUser,
      name: user.name,
      email: user.email,
      userId,
      updateSuccess: false,
      error: "",
    });
  };

  const handleUpdate = () => {
    setEditUser({ ...editUser, error: "" });
    setAlert(true);
    if (!editUser.name)
      return setEditUser({ ...editUser, error: "Name feild is required!" });
    if (!editUser.email)
      return setEditUser({ ...editUser, error: "E-mail feild is required!" });
    if (!editUser.password)
      return setEditUser({ ...editUser, error: "Password feild is required!" });

    const { error, updateSuccess, userId, ...obj } = editUser;
    dispatch(updateUserAdminAction(userId, obj));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => showModal(userId)}>
        <i className="fas fa-user-edit"></i>
      </Button>
      <Modal
        visible={isModalVisible}
        title="Update User Information"
        onOk={handleUpdate}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            close
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdate}>
            {loading ? (
              <div className="spinner-border spinner-border-sm mr-1"></div>
            ) : (
              <i class="fas fa-edit mr-1"></i>
            )}{" "}
            Update
          </Button>,
        ]}
      >
        <div>
          {editUser.error && alert && (
            <div className="alert alert-danger fade show">
              <button
                type="button"
                className="close"
                onClick={() => setAlert(false)}
              >
                <small>&times;</small>
              </button>
              <strong>Error!</strong> {editUser.error}
            </div>
          )}
          {editUser.updateSuccess && alert && (
            <div className="alert alert-success fade show">
              <button
                type="button"
                className="close"
                onClick={() => setAlert(false)}
              >
                <small>&times;</small>
              </button>
              <strong>Success!</strong> User updated successful!
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={editUser.name}
              className="form-control"
              onChange={({ target }) =>
                setEditUser({ ...editUser, [target.name]: target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              value={editUser.email}
              className="form-control"
              onChange={({ target }) =>
                setEditUser({ ...editUser, [target.name]: target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password:</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={editUser.password}
              autoComplete="password"
              onChange={({ target }) =>
                setEditUser({ ...editUser, [target.name]: target.value })
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalBox;
