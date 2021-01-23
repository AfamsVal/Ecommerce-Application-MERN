import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import errorImg from "../images/error.gif";
import { formatNumber } from "../utils/numberFormatter";
import {
  productDeleteAction,
  listProductsAction,
} from "../action/productActions";
import ProductModal from "../components/ProductModal";

const ProductListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector(
    ({ productList }) => productList
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading: deleteLoading, productId: deleteProductId } = useSelector(
    ({ adminProductDelete }) => adminProductDelete
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProductsAction());
    } else {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  const productDeleteHandler = (productId, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      dispatch(productDeleteAction(productId));
    }
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
        <div className="col-12">
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <Skeleton count={6} height={60} />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  ) : products && products.length === 0 && !loading ? (
    <div className="container mt-4 mb-2" style={{ backgroundColor: "#ddd" }}>
      <div className="row mb-5">
        <div className="col-12 py-5">
          <h2 className="text-danger text-center">Users List is Empty</h2>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="container mt-6 mb-2">
        <div className="row mt-3 py-4 my-5">
          <div className="col-sm-6 mb-3">
            <h3 className="text-uppercase font-weight-bold mb-3">
              All Products
            </h3>
          </div>
          <div className="col-sm-6 mb-3 text-right">
            <ProductModal productId="" />
          </div>
          <div className="col-sm-12 mb-3">
            <div className="table-responsive-sm">
              <table className="table table-sm table-striped table-bordered text-center">
                <thead>
                  <tr>
                    <th>IMG</th>
                    <th>NAME</th>
                    <th>BRAND</th>
                    <th>Qty</th>
                    <th>PRICE</th>
                    <th>POSTED BY</th>
                    <th>CREATED</th>
                    <th>EDIT</th>
                    <th>DEL</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <img
                          className="img-fluid"
                          width="70px"
                          src={product.images}
                          alt={product.name}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.brand}</td>
                      <td>{product.countInStock}</td>
                      <td>${formatNumber(product.price)}</td>
                      <td>{product.user.name}</td>
                      <td>{product.createdAt.substring(0, 10)}</td>

                      <td>
                        <ProductModal productId={product._id} />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            productDeleteHandler(product._id, product.name)
                          }
                        >
                          {deleteLoading && product._id === deleteProductId ? (
                            <div className="spinner-border spinner-border-sm"></div>
                          ) : (
                            <i className="fas fa-trash-alt"></i>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListScreen;
