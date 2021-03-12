import React, { useState, useEffect } from "react";
import Rating from "../components/Rating";
import { useSelector, useDispatch } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { productDetailsAction } from "../action/productActions";
import errorImg from "../images/error.gif";
import { formatNumber } from "../utils/numberFormatter";
import noImg from "../images/no-image.png";

const ProductDetails = (props) => {
  const { goBack } = props.history;
  const { id } = props.match.params;

  const dispatch = useDispatch();

  const { product, error, loading } = useSelector(
    ({ productDetails }) => productDetails
  );
  const {
    description,
    category,
    name,
    images,
    price,
    rating,
    numReviews,
    countInStock,
  } = product;

  // console.log([...Array(countInStock).keys()])

  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const addCartHandle = (e) => {
    e.preventDefault();
    props.history.push(`/checkout/${id}?qty=${qty}`);
  };

  return error ? (
    <div className="container mt-6 mb-2">
      <div className="row mb-5">
        <div className="col-6 offset-3 col-md-4 offset-md-4 col-lg-4 offset-lg-4 mt-3">
          <img
            className="img-fluid text-center"
            src={errorImg}
            alt="Not Found"
          />
        </div>
        <div className="col-12">
          <h1 className="pb-5 text-center text-danger">
            <i className="fa fa-info-circle"></i> {error}
          </h1>
        </div>
      </div>
    </div>
  ) : loading ? (
    <div className="container mt-6 mb-2">
      <div className="row mb-5">
        <div className="col-12 col-sm-5">
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <Skeleton count={1} height={400} />
          </SkeletonTheme>
        </div>
        <div className="col-12 col-sm-7">
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <Skeleton count={7} height={60} />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  ) : (
    <section>
      <div className="container mt-6 mb-2">
        <div className="row">
          <div
            onClick={() => goBack()}
            className="col-12 text-dark font-weight-bold cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i> Go back
          </div>
          <div className="col-sm-5 mt-3">
            <div className="card pt-4 px-5 mt-2">
              <p className="font-size-3 text-gray">
                <span>
                  <i className="fa fa-home font-size-4 "></i>
                </span>
                <span className="ml-2">
                  <i className="fa fa-long-arrow-right"></i> Products
                </span>
                <span className="ml-2">
                  <i className="fa fa-long-arrow-right"></i> {category}
                </span>
              </p>
              <hr />
              <img className="w-100" src={images ? images : noImg} alt={name} />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="card py-5 px-5 mt-2 mb-5">
              <h3 className="text-uppercase font-weight-bold">{name}</h3>
              <div>
                <Rating rating={rating} numReviews={`${numReviews} reviews`} />
              </div>
              <p className="product-description my-3">{description}</p>
              <h4>
                Current price:{" "}
                <span className="font-weight-bolder">
                  ${formatNumber(price)}
                </span>
              </h4>
              <div className="row mt-2">
                <div className="col-6">
                  {countInStock ? (
                    <div className="form-group">
                      <label htmlFor="sel1">Quantity:</label>
                      <select
                        onChange={(e) => setQty(e.target.value)}
                        className="browser-default custom-select"
                      >
                        {[...Array(countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <h5 className="text-danger">Out of Stock</h5>
                  )}
                </div>
              </div>

              <div>
                {countInStock !== 0 && (
                  <div className="btn-group btn-group-lg">
                    <button
                      onClick={addCartHandle}
                      type="button"
                      className="btn btn-dark"
                    >
                      <i className="fa fa-shopping-cart"></i> Add to cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="col-12 mt-3"><hr/></div> */}
        </div>
        {/* comment here */}
        <div className="row mb-5">
          <div class="col-12 col-md-8 mx-auto">
        <div class="comment-wrapper">
            <div class="card">
                <div class="card-body">
                <h4 className="text-center mt-2 mb-4">Comments</h4>
                    <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                    <br/>
                    <button type="button" class="btn btn-info pull-right text-right">
                    <i class="fas fa-pencil-alt"></i> Post Comment</button>
                    <div class="clearfix"></div>
                    <hr/>
                    <ul class="media-list p-0">
                        <li class="media">
                            <a href="#" class="pull-left">
                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle"/>
                            </a>
                            <div class="media-body ml-2">
                                <strong class="text-primary">@MartinoMont</strong><br/>
                                <span class="text-muted">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </li>
                        <li class="media">
                            <a href="#" class="pull-left">
                                <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle"/>
                            </a>
                            <div class="media-body ml-2">
                                <strong class="text-primary">@LaurenceCorreil</strong><br/>
                                <span class="text-muted">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.
                                </p>
                            </div>
                        </li>
                        <li class="media">
                            <a href="#" class="pull-left">
                                <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle"/>
                            </a>
                            <div class="media-body ml-2">
                                <strong class="text-primary">@JohnNida</strong><br/>
                                <span class="text-muted">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                <p>
                                    Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
