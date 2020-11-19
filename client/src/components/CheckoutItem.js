import React from "react"

const CheckoutItem = ({ items }) => {
  console.log(items)
  return items.length > 0 ? (
    items.map((item, index) => (
      <div key={index} className="col-12">
        <div className="row mb-3">
          <div className="col-3 col-sm-2 d-none d-sm-block text-left">
            <img
              src={item.image}
              alt=""
              className="img-fluid rounded mb-2 shadow "
            />
          </div>
          <div className="col-12 col-sm-6">
            <h4 className="font-weight-bold">{item.name}</h4>
            <h5>{item.category}</h5>
            <h4 className="font-weight-bold">${item.price}</h4>
          </div>
          <div className="col-6 col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              value={item.qty}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="col-6 col-sm-2">
            <div className="text-right">
              {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                <i className="fas fa-sync"></i>
              </button> */}
              <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12">
      <h2 className="text-center text-danger">
        <i className="fa fa-shopping-cart"></i> Cart is Empty
      </h2>
    </div>
  )
}

export default CheckoutItem
