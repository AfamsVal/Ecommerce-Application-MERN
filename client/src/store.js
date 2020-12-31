import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productListReducer from "./reducers/productReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import cartReducer from "./reducers/cartReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { progressBarReducer } from "./reducers/progressBarReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  progressBar: progressBarReducer,
  userRegister: userRegisterReducer,
});

const loadCartItem = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: loadCartItem, loading: true, deleteLoader: false },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
