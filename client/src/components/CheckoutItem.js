import React from "react"
import { useDispatch } from "react-redux"
import { cartAction, deleteCartAction } from "../action/cartAction"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const CheckoutItem = ({ items, loading, deleteLoader }) => {
  const dispatch = useDispatch()

  const deleteItemHandle = (id) => {
    dispatch(deleteCartAction(id))
  }

  return loading ? (
    <>
      <div className="col-6 offset-3 mb-2">
        <SkeletonTheme color="#ddd" highlightColor="#ccc">
          <Skeleton height={30} count={1} />
        </SkeletonTheme>
      </div>
      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton height={100} count={3} />
            </SkeletonTheme>
          </div>
          <div className="col-6">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton height={100} count={3} />
            </SkeletonTheme>
          </div>
          <div className="col-4">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton height={100} count={3} />
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </>
  ) : items.length > 0 ? (
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
            <select
              onChange={(e) =>
                dispatch(cartAction(item.product, Number(e.target.value)))
              }
              className="browser-default custom-select"
              value={item.qty}
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-sm-2">
            <div className="text-right">
              {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                <i className="fas fa-sync"></i>
              </button> */}
              <button
                onClick={() => deleteItemHandle(item.product)}
                className="btn btn-white border-secondary bg-white btn-md mb-2"
              >
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
