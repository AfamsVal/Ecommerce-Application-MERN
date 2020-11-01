import React from "react"
import s20 from "../images/carosel/s20.jpg"
import iphone12 from "../images/carosel/iphone12.jpg"
import lg from "../images/carosel/lg.jpg"

const Carosel = (props) => {
  const myRef = React.createRef()

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide nav-top"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={s20} alt="Samsung s20" />
          <div className="carousel-caption">
            <h3>Super Amazing Products</h3>
            <button
              onClick={() => {
                props.scroll(myRef)
              }}
              className="carosel-btn my-4 btn btn-light"
            >
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={iphone12} alt="iphone 12" />
          <div className="carousel-caption">
            <h3>Super Amazing Products</h3>
            <button
              onClick={() => {
                props.scroll(myRef)
              }}
              className="carosel-btn my-4 btn btn-light"
            >
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={lg} alt="LG Television" />
          <div className="carousel-caption">
            <h3>Super Amazing Products</h3>
            <button
              onClick={() => {
                props.scroll(myRef)
              }}
              className="carosel-btn my-4 btn btn-light"
            >
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carosel
