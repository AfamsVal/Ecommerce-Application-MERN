import React from "react"
import { Link } from "react-router-dom"

const Pricing = () => {
  return (
    <section className="pricing mt-6">
      <div className="container">
        <h1 className="text-center text-uppercase font-weight-bold mb-2">
          Pricing
        </h1>
        <p className="text-center w-75 m-auto text-dark font-size-3 ">
          Enjoy our wonderful and super amazing monthly Pricing
        </p>
        <div className="row my-5">
          <div className="col-sm-4">
            <div className="card mb-5 mb-lg-0 w-100">
              <div className="card-body w-100">
                <h5 className="font-size-2 text-muted text-uppercase font-weight-bold text-center">
                  Free
                </h5>
                <h6 className="font-size-6 text-center">
                  $0<span className="font-size-1">/month</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Single User
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    5GB Storage
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    Free Subdomain
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <Link to="/#" className="btn btn-block btn-dark text-uppercase">
                  Button
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mb-5 mb-lg-0  w-100">
              <div className="card-body  w-100">
                <h5 className="font-size-2 text-muted text-uppercase font-weight-bold text-center">
                  Plus
                </h5>
                <h6 className="font-size-6 text-center">
                  $9<span className="font-size-1">/month</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    <strong>5 Users</strong>
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    50GB Storage
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Free Subdomain
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <Link to="/#" className="btn btn-block btn-dark text-uppercase">
                  Button
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card w-100">
              <div className="card-body w-100">
                <h5 className="font-size-2 text-muted text-uppercase font-weight-bold text-center">
                  Pro
                </h5>
                <h6 className="font-size-6 text-center">
                  $49<span className="font-size-1">/month</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    <strong>Unlimited Users</strong>
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    150GB Storage
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    <strong>Unlimited</strong> Free Subdomains
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <Link to="/#" className="btn btn-block btn-dark text-uppercase">
                  Button
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
