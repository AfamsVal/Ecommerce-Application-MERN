import React from "react"

const HelpFeedback = () => {
  return (
    <section>
      <div className="row w-100 pt-3 my-5">
        <div className="col-6 col-md-3 mb-4">
          <div className="card contact-us border-dark mx-sm-1 p-3 w-100">
            <div className="card border-dark shadow text-dark p-3 my-card">
              <span className="fa fa-shopping-cart" aria-hidden="true"></span>
            </div>
            <div className="text-dark text-center mt-3">
              <h4>Products</h4>
            </div>
            <div className="text-dark text-center mt-2">
              <h1>234</h1>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="card contact-us border-dark mx-sm-1 p-3 w-100">
            <div className="card border-dark shadow text-dark p-3 my-card">
              <span className="fa fa-eye" aria-hidden="true"></span>
            </div>
            <div className="text-dark text-center mt-3">
              <h4>Members</h4>
            </div>
            <div className="text-dark text-center mt-2">
              <h1>9332</h1>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="card contact-us border-dark mx-sm-1 p-3 w-100">
            <div className="card border-dark shadow text-dark p-3 my-card">
              <span className="fa fa-heart" aria-hidden="true"></span>
            </div>
            <div className="text-dark text-center mt-3">
              <h4>Services</h4>
            </div>
            <div className="text-dark text-center mt-2">
              <h1>96%</h1>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="card contact-us border-dark mx-sm-1 p-3 w-100">
            <div className="card border-dark shadow text-warning p-3 my-card">
              <span
                className="fa fa-balance-scale text-dark"
                aria-hidden="true"
              ></span>
            </div>
            <div className="text-dark text-center mt-3">
              <h4>Team</h4>
            </div>
            <div className="text-dark text-center mt-2">
              <h1>36</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpFeedback
