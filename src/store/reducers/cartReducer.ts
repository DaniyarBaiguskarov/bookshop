import {
  CartAction,
  CartActionTypes,
  CartItemType,
  CartState,
} from "../../types/cart";

function totalPriceCalc(items: CartItemType[]) {
  return +items
    .reduce(
      (sum, obj) =>
        obj.product.saleInfo.listPrice.amount * (obj.count + 1) + sum,
      0
    )
    .toFixed(2);
}
function totalCountCalc(items: CartItemType[]) {
  return items.reduce((sum, obj) => obj.count + 1 + sum, 0);
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

function cart(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionTypes.ADD_CART_BOOK: {
      const currentItems = state.items;
      const foundItem = currentItems.find(
        (item: CartItemType) => item.product.id === action.payload.id
      );
      if (foundItem) {
        foundItem.count = foundItem.count + 1;
      } else {
        currentItems.push({ product: action.payload, count: 0 });
      }
      return {
        items: currentItems,
        totalPrice: totalPriceCalc(currentItems),
        totalCount: totalCountCalc(currentItems),
      };
    }
    case CartActionTypes.CLEAR_CART:
      return {
        items: [],
        totalPrice: 0,
        totalCount: 0,
      };
    case CartActionTypes.REMOVE_CART_BOOK:
      const newItems = state.items.filter(
        (item, index) => item.product.id !== action.payload
      );
      return {
        items: newItems,
        totalPrice: totalPriceCalc(newItems),
        totalCount: totalCountCalc(newItems),
      };
    case CartActionTypes.MINUS_CART_BOOK: {
      let currentItems = state.items;
      const foundItem = currentItems.find(
        (item: CartItemType) => item.product.id === action.payload
      );
      if (foundItem?.count !== 0 && foundItem !== undefined) {
        foundItem.count = foundItem.count - 1;
      } else {
        currentItems = currentItems.filter(
          (item, index) => item.product.id !== action.payload
        );
      }
      return {
        items: currentItems,
        totalPrice: totalPriceCalc(currentItems),
        totalCount: totalCountCalc(currentItems),
      };
    }
    case CartActionTypes.PLUS_CART_BOOK: {
      const currentItems = state.items;
      const foundItem = currentItems.find(
        (item: CartItemType) => item.product.id === action.payload
      );
      if (foundItem) {
        foundItem.count = foundItem.count + 1;
      }
      return {
        items: currentItems,
        totalPrice: totalPriceCalc(currentItems),
        totalCount: totalCountCalc(currentItems),
      };
    }

    default:
      return state;
  }
}
export default cart;
