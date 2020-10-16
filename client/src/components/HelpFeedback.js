import React from "react"

const HelpFeedback = () => {
  return (
    <section>
      <div className="row w-100 my-5">
        <div className="col-md-3">
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
        <div className="col-md-3">
          <div className="card contact-us border-dark mx-sm-1 p-3 w-100">
            <div className="card border-dark shadow text-dark p-3 my-card">
              <span className="fa fa-eye" aria-hidden="true"></span>
            </div>
            <div className="text-dark text-center mt-3">
              <h4>Views</h4>
            </div>
            <div className="text-dark text-center mt-2">
              <h1>9332</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card contact-us border-dark mx-sm-1 p-3 w-100">
            <div className="card border-dark shadow text-dark p-3 my-card">
              <span className="fa fa-heart" aria-hidden="true"></span>
            </div>
            <div className="text-dark text-center mt-3">
              <h4>Love</h4>
            </div>
            <div className="text-dark text-center mt-2">
              <h1>346</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card contact-us border-dark mx-sm-1 p-3 w-100">
            <div className="card border-dark shadow text-warning p-3 my-card">
              <span
                className="fa fa-balance-scale text-dark"
                aria-hidden="true"
              ></span>
            </div>
            <div className="text-dark text-center mt-3">
              <h4>sales</h4>
            </div>
            <div className="text-dark text-center mt-2">
              <h1>346</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpFeedback
