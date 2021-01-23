import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_ADMIN_DELETE_REQUEST,
  PRODUCT_ADMIN_DELETE_SUCCESS,
  PRODUCT_ADMIN_DELETE_FAIL,
  PRODUCT_ADMIN_DELETE_RESET,
  PRODUCT_ADMIN_UPDATE_SUCCESS,
  PRODUCT_ADMIN_UPDATE_REQUEST,
  PRODUCT_ADMIN_UPDATE_FAIL,
  PRODUCT_ADMIN_UPDATE_RESET,
} from "../constant/productConstant.js";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, error: "", loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, error: "", loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminProductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ADMIN_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        productId: action.payload,
      };
    case PRODUCT_ADMIN_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case PRODUCT_ADMIN_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PRODUCT_ADMIN_DELETE_RESET:
      return {
        state: {},
      };
    default:
      return state;
  }
};

const adminUpdateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ADMIN_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_ADMIN_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case PRODUCT_ADMIN_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PRODUCT_ADMIN_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export {
  productListReducer,
  adminProductDeleteReducer,
  adminUpdateProductReducer,
};
