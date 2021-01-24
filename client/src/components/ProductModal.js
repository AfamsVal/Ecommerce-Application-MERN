import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  adminCreateProductAction,
  adminUpdateProductAction,
  productDetailsAction,
} from "../action/productActions";
import {
  PRODUCT_ADMIN_CREATE_RESET,
  PRODUCT_ADMIN_UPDATE_RESET,
} from "../constant/productConstant";

const ProductModal = ({ productId }) => {
  const dispatch = useDispatch();
  const { loading, product, error: productError } = useSelector(
    (state) => state.productDetails
  );

  const { loading: updateLoading, success, error: updateError } = useSelector(
    (state) => state.adminUpdateProduct
  );

  const {
    loading: createLoading,
    success: createSuccess,
    error: createError,
  } = useSelector((state) => state.adminCreateProduct);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myProduct, setMyProduct] = useState({
    name: "",
    price: "",
    images: "",
    brand: "",
    category: "",
    countInStock: "",
    description: "",
    error: "",
    productId: "",
  });
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setMyProduct((prevState) => ({
      ...prevState,
      name: productId && product ? product.name : "",
      price: productId && product ? product.price : "",
      images: productId && product ? product.images : "/images/sample.jpg",
      brand: productId && product ? product.brand : "",
      category: productId && product ? product.category : "",
      countInStock: productId && product ? product.countInStock : "",
      description: productId && product ? product.description : "",
    }));
  }, [product, productId]);

  useEffect(() => {
    if (productError || updateError || createError) {
      productError && setMyProduct({ ...myProduct, error: productError });
      updateError && setMyProduct({ ...myProduct, error: updateError });
      createError && setMyProduct({ ...myProduct, error: createError });
      dispatch({ type: PRODUCT_ADMIN_UPDATE_RESET });
      dispatch({ type: PRODUCT_ADMIN_CREATE_RESET });
    }

    if (success || createSuccess) {
      setMyProduct({ ...myProduct, updateSuccess: true, error: "" });
      setTimeout(() => setIsModalVisible(false), 1500);
      dispatch({ type: PRODUCT_ADMIN_UPDATE_RESET });
      dispatch({ type: PRODUCT_ADMIN_CREATE_RESET });
    }
  }, [
    dispatch,
    myProduct,
    productError,
    updateError,
    success,
    createSuccess,
    createError,
  ]);

  //SHOW MODAL
  const showModal = (productId) => {
    setMyProduct((prevState) => ({
      ...prevState,
      name: "",
      price: "",
      images: "",
      brand: "",
      countInStock: "",
      category: "",
      description: "",
      error: "",
      updateSuccess: false,
    }));
    setIsModalVisible(true);
    if (productId) {
      dispatch(productDetailsAction(productId));
      setMyProduct((prevState) => ({ ...prevState, productId }));
    }
  };

  const validate = () => {
    setMyProduct({ ...myProduct, error: "" });
    setAlert(true);
    if (!myProduct.name)
      return setMyProduct({ ...myProduct, error: "Name field is required!" });
    if (!myProduct.brand)
      return setMyProduct({ ...myProduct, error: "Brand field is required!" });
    if (!myProduct.countInStock)
      return setMyProduct({
        ...myProduct,
        error: "Count in Stock is required!",
      });
    if (!myProduct.price)
      return setMyProduct({ ...myProduct, error: "Price field is required!" });

    if (!myProduct.category)
      return setMyProduct({
        ...myProduct,
        error: "Category field is required!",
      });

    if (!myProduct.description)
      return setMyProduct({
        ...myProduct,
        error: "Description field is required!",
      });
    return "success";
  };

  //
  const handleUpdate = () => {
    if (validate() === "success") {
      const { error, updateSuccess, productId, ...productObj } = myProduct;
      dispatch(adminUpdateProductAction(productId, productObj));
    }
  };

  //
  const handleCreate = () => {
    if (validate() === "success") {
      const { error, updateSuccess, productId, ...productObj } = myProduct;
      dispatch(adminCreateProductAction(productObj));
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button className="btn btn-dark" onClick={() => showModal(productId)}>
        {productId ? (
          <i className="fas fa-user-edit"></i>
        ) : (
          <>
            <i className="fas fa-plus"></i> Create Product
          </>
        )}
      </button>
      <Modal
        visible={isModalVisible}
        title={
          productId ? (
            <>
              <i className="fas fa-user-edit"></i> Update Product
            </>
          ) : (
            <>
              <i className="fas fa-plus"></i> Create Product
            </>
          )
        }
        onOk={handleUpdate}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="danger" onClick={handleCancel}>
            close
          </Button>,

          <Button
            key="submit"
            type="primary"
            onClick={productId ? handleUpdate : handleCreate}
          >
            {productId ? (
              <>
                {updateLoading ? (
                  <div className="spinner-border spinner-border-sm mr-1"></div>
                ) : (
                  <i className="fas fa-user-edit mr-1"></i>
                )}{" "}
                Update Product
              </>
            ) : (
              <>
                {updateLoading || createLoading ? (
                  <div className="spinner-border spinner-border-sm mr-1"></div>
                ) : (
                  <i className="fas fa-plus mr-1"></i>
                )}{" "}
                Create Product
              </>
            )}
          </Button>,
        ]}
      >
        <div>
          {myProduct.error && alert && (
            <div className="alert alert-danger fade show">
              <button
                type="button"
                className="close"
                onClick={() => setAlert(false)}
              >
                <small>&times;</small>
              </button>
              <strong>Error!</strong> {myProduct.error}
            </div>
          )}
          {myProduct.updateSuccess && alert && (
            <div className="alert alert-success fade show">
              <button
                type="button"
                className="close"
                onClick={() => setAlert(false)}
              >
                <small>&times;</small>
              </button>
              <strong>Success!</strong> Product updated successful!
            </div>
          )}
          <div className="row">
            {productId && loading && (
              <div className="col-12 mb-2 text-success text-center">
                <div className="spinner-border spinner-border-sm mr-1"></div>{" "}
                Fetching contents...
              </div>
            )}
            <div className="form-group col-6 pr-1">
              <label className="font-size-1">Product Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Product name*"
                value={myProduct.name}
                className="form-control"
                onChange={({ target }) =>
                  setMyProduct({ ...myProduct, [target.name]: target.value })
                }
              />
            </div>
            <div className="form-group col-6 pl-1">
              <label className="font-size-1">Product brand:</label>
              <input
                type="text"
                name="brand"
                placeholder="Product brand*"
                value={myProduct.brand}
                className="form-control"
                onChange={({ target }) =>
                  setMyProduct({ ...myProduct, [target.name]: target.value })
                }
              />
            </div>
            <div className="form-group col-6 pr-1">
              <label className="font-size-1">Count in Stock:</label>
              <select
                name="countInStock"
                onChange={({ target }) =>
                  setMyProduct({ ...myProduct, [target.name]: target.value })
                }
                className="form-control"
              >
                <option defaultValue="true" value={myProduct.countInStock}>
                  {myProduct.countInStock
                    ? myProduct.countInStock
                    : "Count in Stock*"}
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="form-group col-6 pl-1">
              <label className="font-size-1">Product price:</label>
              <div className="input-group">
                <div className="input-group-prepend bg-secondary border border-secondary px-1">
                  <span className="input-group-text  bg-secondary text-white border-0 px-1">
                    $
                  </span>
                </div>
                <input
                  type="text"
                  name="price"
                  placeholder="Price*"
                  value={myProduct.price}
                  className="form-control"
                  onChange={({ target }) =>
                    setMyProduct({ ...myProduct, [target.name]: target.value })
                  }
                />
              </div>
            </div>

            <div className="form-group col-12">
              <label className="font-size-1">Product category:</label>
              <select
                className="form-control"
                name="category"
                onChange={({ target }) =>
                  setMyProduct({ ...myProduct, [target.name]: target.value })
                }
              >
                <option defaultValue={myProduct.category}>
                  {myProduct.category ? myProduct.category : "Select Cetrgory*"}
                </option>
                <option value="phonea">Phones</option>
                <option value="Laptops">Laptops</option>
                <option value="Wears">Wears</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>

            <div className="form-group col-12">
              <label className="font-size-1">Product description:</label>
              <textarea
                className="form-control resize-none"
                rows="4"
                name="description"
                placeholder="Description*"
                value={myProduct.description}
                onChange={({ target }) =>
                  setMyProduct({ ...myProduct, [target.name]: target.value })
                }
              ></textarea>
            </div>

            {!productId && (
              <div className="form-group col-12">
                <label htmlFor="email">Upload product label:</label>
                <input type="file" className="form-control-file border" />
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductModal;
