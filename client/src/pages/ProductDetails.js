import React from "react"

const ProductDetails = () => {
  return (
    <section>
      <div className="container mt-6 mb-4">
        <div className="card py-5 px-5">
          <div className="wrapper row">
            <div className="col-md-6">
              <img className="w-100" src="http://placekitten.com/400/252" />
            </div>
            <div className="col-md-6">
              <h3 className="text-capitalize">men's shoes fashion</h3>
              <div>
                <div>
                  <span className="fa fa-star text-warning"></span>
                  <span className="fa fa-star text-warning"></span>
                  <span className="fa fa-star-half text-warning"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">
                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                cubilia sem sem! Repudiandae et! Massa senectus enim minim
                sociosqu delectus posuere.
              </p>
              <h4>
                current price: <span className="font-weight-bolder">$180</span>
              </h4>
              <p className="vote">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>
              <h5 className="sizes">
                sizes:
                <span className="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span className="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span className="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span className="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5>
              <h5 className="colors">
                colors:
                <span className="color orange"></span>
                <span className="color green"></span>
                <span className="color blue"></span>
              </h5>

              <div>
                <div class="btn-group btn-group-lg">
                  <button type="button" class="btn btn-dark">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </button>
                  <button type="button" class="btn btn-secondary">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
