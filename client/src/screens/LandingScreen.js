import React, { useState, useEffect } from "react";
import Carosel from "../components/Carosel";
import Products from "../components/Products";
import InputText from "../components/InputText";
import { useSelector, useDispatch } from "react-redux";
import {
  listProductsAction,
  productInputSearch,
} from "../action/productActions";

const Landing = (props) => {
  const { error, loading, products } = useSelector(
    ({ productList }) => productList
  );

const {loading:searchLoading,error:searchError} = useSelector(({productSearch})=>productSearch)

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput) {
      dispatch(productInputSearch(searchInput));
    } else {
      dispatch(listProductsAction());
    }
  }, [dispatch, searchInput]);

  // Scroll
  const [myRef, setMyRef] = useState({ current: null });

  const scroll = (ref) => {
    setMyRef({ ...myRef, ref });
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [props.location.pathname])

  return (
    <div>
      <Carosel scroll={(myRef) => scroll(myRef)} />
      <div className="container-fluid">
        <div className="row bg-milk ">
          <div className="col-sm-12 pt-5 text-center font-weight-bolder">
            <h1>ALL PRODUCTS</h1>
            <p>
              We offer the best products and services that is second to none.
              Place an order today and will deliver it as expected.
            </p>
            <p ref={myRef}></p>
          </div>
          <div className="col-sm-8 offset-sm-2 bg-milk mb-2">
            <InputText
              label=""
              value={searchInput}
              placeholder="Search for product..."
              className="form-control text-center bg-gray"
              onChange={({ target }) => setSearchInput(target.value)}
            />
            {searchLoading && <h5 className="font-weight-bold text-center">Loading...</h5>}
            {searchError && <h5 className="font-weight-bold text-danger text-center">{searchError}</h5>}
          </div>
        </div>

        <div className="row mb-5 my-4">
          <Products error={error} loading={loading} products={products} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
