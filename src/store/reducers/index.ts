import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import filtersReducer from "./filtersReducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
