import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constant/productConstant.js"

const initialState = {
  products: [],
  loading: false,
  error: "",
}

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, error: "", loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { ...state, error: "", loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default productListReducer
