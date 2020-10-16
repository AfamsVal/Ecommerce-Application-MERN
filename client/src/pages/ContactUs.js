import React from "react"

const ContactUs = () => {
  return (
    <section>
      <div className="container mt-6 ">
        <h1 className="text-center text-uppercase font-weight-bold">
          contact us
        </h1>
        <p className="text-center w-75 m-auto text-dark mt-2 font-size-3">
          For more infomation on how to react us, kindly use any of the below
          platform. We are professional developers with great passion in
          inovation towards substainable development goals
        </p>
        <div className="row mx-auto">
          <div className="col-sm-6 col-md-3 col-lg-3 my-5">
            <div className="card border-0 w-100 contact-us">
              <div className="card-body text-center w-100">
                <i className="fa fa-phone fa-4x mb-4" aria-hidden="true"></i>
                <h5 className="text-uppercase mb-5 text-center">call us</h5>
                <p>+234 803 7514 469</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 my-5">
            <div className="card border-0 w-100 contact-us">
              <div className="card-body text-center w-100 pb-5">
                <i
                  className="fa fa-map-marker fa-4x mb-4"
                  aria-hidden="true"
                ></i>
                <h5 className="text-uppercase mb-5">office loaction</h5>
                <address>Ikeja, Lagos Nigeria </address>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 my-5">
            <div className="card border-0 w-100 contact-us">
              <div className="card-body text-center w-100 pb-5">
                <i className="fa fa-globe fa-4x mb-4" aria-hidden="true"></i>
                <h5 className="text-uppercase mb-5">Website</h5>
                <address>www.laffout.com </address>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 my-5">
            <div className="card border-0 w-100 contact-us">
              <div className="card-body text-center w-100">
                <i
                  className="fa fa-envelope-open fa-4x mb-4"
                  aria-hidden="true"
                ></i>
                <h4 className="text-uppercase mb-5">email</h4>
                <p>progfams@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
