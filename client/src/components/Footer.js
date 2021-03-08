import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="footer bg-dark pb-3 pt-1">
      <div className="container">
        <div className="row">
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 className=" pt2 text-light mt-4 mb-3">Afams Shop</h5>

            <p className="line-height-24">
              Cheap delivery on millions of low priced items across African
              biggest selection of electronics & accessories, wears, jewelry,
              groceries & many more.
            </p>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="text-light mt-4 mb-3">Quick links</h5>

            <ul className="footer_ul_amrc">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">Faq</Link>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="text-light mt-4 mb-3">Quick links</h5>

            <ul className="footer_ul_amrc">
              <li>
                <Link to="contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-12 col">
            <h5 className="text-light mt-4 mb-3">Contact us</h5>
            <p className="mb-3">
              <i className="fa fa-location-arrow"></i> Ikeja, Lagos Nigeria.
            </p>
            <p className="mb-3">
              <i className="fa fa-phone"></i> +234 803 7514 469
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> progfams@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="text-center">
          Copyright @2020 | Designed By{" "}
          <Link className="text-light" to={pathname}>
            <u>Afams Val</u>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
