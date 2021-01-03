import {
  CART_ADD_ITEM,
  CART_EMPTY_ITEM,
  CART_LOADING_ITEM,
  CART_LOADING_DEL_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
} from "../constant/cartConstant";

const initialState = {
  cartItems: [],
  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const hasItem = state.cartItems.find((p) => p.product === item.product);

      if (hasItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((p) =>
            p.product === item.product ? item : p
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_EMPTY_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CART_LOADING_ITEM:
      return {
        ...state,
        loading: action.payload,
      };
    case CART_REMOVE_ITEM:
      const cartItems = state.cartItems;
      const id = action.payload;
      const items = cartItems.filter((cart) => cart.product !== id);
      return {
        ...state,
        cartItems: items,
      };
    case CART_LOADING_DEL_ITEM:
      return {
        ...state,
        deleteLoader: action.payload,
      };
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
