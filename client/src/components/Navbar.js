import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../action/userAction";

//import { SmileOutlined } from '@ant-design/icons';

const Navbar = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(userInfo);
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <Link to="/" className="navbar-brand ml-3" href="#">
        Afams Shop
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="justify-content-center collapse navbar-collapse"
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item mr-4">
            <Link to="/" className="nav-link">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link to="/help" className="nav-link">
              <i className="fa fa-info-circle"></i> Help
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link to="/pricing" className="nav-link">
              <i className="fa fa-certificate"></i> Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              <i className="fa fa-phone-square"></i> Contact-us
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="justify-content-end collapse navbar-collapse"
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item mr-4">
            <Link to="/checkout" className="nav-link" href="#">
              <i className="fas fa-shopping-cart">
                {cartItems.length !== 0 && (
                  <sup className="font-size-2 text-danger g-font">
                    <span className="badge badge-danger">
                      {cartItems.length}
                    </span>
                  </sup>
                )}
              </i>
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link to="/register" className="nav-link">
              <i className="fas fa-lock-alt"></i> Register
            </Link>
          </li>
          {userInfo ? (
            <li className="nav-item dropdown mr-4">
              <Link
                to="/#"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user"></i> {userInfo.name.split(" ")[0]}{" "}
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <Link to="/#" className="dropdown-item">
                  My account
                </Link>
                <button
                  onClick={() => dispatch(logoutAction())}
                  className="btn btn-link dropdown-item"
                >
                  Log out
                </button>
              </div>
            </li>
          ) : (
            <li className="nav-item mr-4">
              <Link to="/login" className="nav-link">
                <i className="fas fa-unlock"></i> Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
