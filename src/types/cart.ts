import { ItemType } from "./books";

export enum CartActionTypes {
  ADD_CART_BOOK = "ADD_CART_BOOK",
  PLUS_CART_BOOK = "PLUS_CART_BOOK",
  MINUS_CART_BOOK = "MINUS_CART_BOOK",
  REMOVE_CART_BOOK = "REMOVE_CART_BOOK",
  CLEAR_CART = "CLEAR_CART",
}

export interface CartItemType {
  product: ItemType;
  count: number;
}

export interface CartState {
  items: CartItemType[];
  totalPrice: number;
  totalCount: number;
  //   isLoaded: boolean;
}

interface AddCartBookAction {
  type: CartActionTypes.ADD_CART_BOOK;
  payload: ItemType;
}

interface PlusCartBookAction {
  type: CartActionTypes.PLUS_CART_BOOK;
  payload: string;
}

interface MinusCartBook {
  type: CartActionTypes.MINUS_CART_BOOK;
  payload: string;
}

interface RemoveCartBook {
  type: CartActionTypes.REMOVE_CART_BOOK;
  payload: string;
}

interface ClearCart {
  type: CartActionTypes.CLEAR_CART;
}

export type CartAction =
  | AddCartBookAction
  | PlusCartBookAction
  | MinusCartBook
  | ClearCart
  | RemoveCartBook;
