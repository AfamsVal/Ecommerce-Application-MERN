import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../action/userAction";

//import { SmileOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [state, setState] = useState({
    collapsed: true,
  });

  const toggleNavbar = () => {
    setState({
      ...collapsed,
      collapsed: !state.collapsed,
    });
  };


  const collapsed = state.collapsed;
  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";


  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const { userInfo } = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    setCount(cartItems.length);
  }, [cartItems]);

  const logoutHandle = (useHistory) => {
    dispatch(logoutAction());
  };

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <Link to="/" className="navbar-brand ml-3" href="#">
        Afams Shop
      </Link>

      <button
        className={`${classTwo} navbar-toggler`}
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${classOne} justify-content-end collapse navbar-collapse`}
        id="collapsibleNavbar"
        onClick={toggleNavbar}
      >
        <ul className="navbar-nav">
        {count !== 0 && (<li className="nav-item mr-4">
            <Link to="/checkout" className="nav-link" href="#">
              <i className="fas fa-shopping-cart">
                  <sup className="font-size-2 text-danger g-font">
                    <span className="badge badge-danger">{count}</span>
                  </sup>
              </i>
            </Link>
          </li>)}
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
              <i className="fab fa-paypal"></i> Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              <i className="fa fa-phone-square"></i> Contact-us
            </Link>
          </li>

          <li className="nav-item mr-4">
            <Link to="/register" className="nav-link">
              <i className="fas fa-unlock-alt"></i> Register
            </Link>
          </li>

          {userInfo ? (
            <li className="nav-item dropdown mr-4">
              <a
                href="/#"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i> {userInfo.name.split(" ")[0]}{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <Link to="/profile" className="dropdown-item">
                  My Profile
                </Link>
                {userInfo && userInfo.isAdmin && (
                  <>
                    <Link to="/admin/users" className="dropdown-item">
                      Users
                    </Link>
                    <Link to="/admin/products" className="dropdown-item">
                      Products
                    </Link>
                    <Link to="/admin/orders" className="dropdown-item">
                      Orders
                    </Link>
                  </>
                )}
                <button
                  onClick={logoutHandle}
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
