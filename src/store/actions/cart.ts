import { ItemType } from "../../types/books";
import { CartAction, CartActionTypes } from "../../types/cart";

export const AddCartBook = (book: ItemType): CartAction => ({
  type: CartActionTypes.ADD_CART_BOOK,
  payload: book,
});

export const PlusCartBook = (id: string): CartAction => ({
  type: CartActionTypes.PLUS_CART_BOOK,
  payload: id,
});

export const MinusCartBook = (id: string): CartAction => ({
  type: CartActionTypes.MINUS_CART_BOOK,
  payload: id,
});

export const RemoveCartBook = (id: string): CartAction => ({
  type: CartActionTypes.REMOVE_CART_BOOK,
  payload: id,
});

export const ClearCart = (): CartAction => ({
  type: CartActionTypes.CLEAR_CART,
});
