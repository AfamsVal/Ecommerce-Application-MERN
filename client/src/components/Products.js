import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { cartAction } from "../action/cartAction";
import { notification } from "antd";
import "antd/dist/antd.css";
import { formatNumber } from "../utils/numberFormatter";
import noImg from '../images/no-image.png'


const Context = React.createContext({ name: "Default" });

const Products = ({ error, loading, products }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.error({
      message: `This product is out of stock`,
      placement,
      style: { backgroundColor: "#ffaa91" },
    });
  };
  const dispatch = useDispatch();

  return (
    <>
      {error ? (
        <div className="col-12">
          <h1 className="py-5 text-center text-danger">
            <i className="fas fa-info-circle"></i> {error}
          </h1>
        </div>
      ) : !loading ? (
        <Context.Provider className="bg-danger" value={{ name: "Ant Design" }}>
          {contextHolder}
          {products.map(
            ({
              _id,
              name,
              images,
              price,
              rating,
              countInStock,
              numReviews,
            }) => (
              <div key={_id} className="col-6 col-sm-6 col-md-4 col-lg-3 py-2 px-md-2" style={{paddingLeft:"4px",paddingRight:"4px"}}>
                <div className="card-hover product-card mx-auto bg-light border h-80">
                  {/* <img
              className="mx-auto img-fluid"
              src={images}
              alt="cart item"
              width="auto"
              height="auto"
            /> */}
            <div style={{ height: "120px" }}>
                  <Link to={`product-details/${_id}`}>
                    <img
                      className="mx-auto img-fluid d-block mt-2 h-100 py-2 d-block"
                      src={images ? images : noImg}
                      alt="cart item"
                      width="50%"
                    />
                  </Link>
                  </div>

                  <div className="card-body text-center mx-auto pt-0 w-100">
                    <p
                      className="card-title font-weight-bold my-0 w-100"
                      title={name}
                    >
                      {name.slice(0, 20)}
                      {name.length > 20 && "..."}
                    </p>
                    <p className="card-text text-brown font-weight-bold font-size-3 pb-0 mb-1">
                      ~ ${formatNumber(price)} ~
                    </p>
                    <div className="pb-1 bg-gray">
                      <Rating
                        rating={rating}
                        numReviews={`${numReviews} reviews`}
                      />
                    </div>
                    <div className="mt-3 btn-group btn-group-sm">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        {" "}
                        <Link
                          className="text-dark text-decoration-none"
                          to={`product-details/${_id}`}
                        >
                          DETAILS
                        </Link>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() =>
                          !countInStock
                            ? openNotification("bottomRight")
                            : dispatch(cartAction(_id, 1))
                        }
                      >
                        <i className="fa fa-shopping-cart"></i> ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Context.Provider>
      ) : (
        <>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-2">
            <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <Skeleton count={1} height={300} />
            </SkeletonTheme>
          </div>
        </>
      )}
    </>
  );
};

export default Products;

Products.propTypes = {
  products: PropTypes.array.isRequired,
};
