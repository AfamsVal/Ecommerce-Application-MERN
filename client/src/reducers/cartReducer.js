import {
  CART_ADD_ITEM,
  //CART_REMOVE_ITEM
} from "../constant/cartConstant"

const initialState = {
  cartItems: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const hasItem = state.cartItems.find((p) => p.product === item.product)

      if (hasItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((p) =>
            p.product === item.product ? item : p
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    default:
      return state
  }
}

export default cartReducer
