import axios from "axios";
import { Dispatch } from "react";

import settings from "../../config";
import {
  BookAction,
  BooksActionTypes,
  IItems,
  ItemType,
} from "../../types/books";
import { FiltersState } from "../../types/filters";

export const fetchBooks = ({
  category,
  sortBy,
  option,
  index,
}: FiltersState) => {
  return async (dispatch: Dispatch<BookAction>) => {
    if (option !== null && option.split(" ").join("") !== "") {
      const response = await axios.get<IItems>(
        `https://www.googleapis.com/books/v1/volumes?q=${option
          .split(" ")
          .join("")
          .toLowerCase()}${
          category === "All" ? "" : `+subject:${category.toLowerCase()}`
        }&orderBy=${sortBy.toLowerCase()}&startIndex=${index}&maxResults=30&filter=paid-ebooks&key=${
          settings.key
        }&fields=kind,items(id,volumeInfo,saleInfo)`
      );
      const items = response.data.items.map((item) => {
        item.isAdded = false;
        return item;
      });
      dispatch({
        type: BooksActionTypes.SET_BOOKS,
        payload: items,
      });
    }
  };
};

export const fetchAddBooks = ({
  category,
  sortBy,
  option,
  index,
}: FiltersState) => {
  return async (dispatch: Dispatch<BookAction>) => {
    if (option !== null && option.split(" ").join("") !== "") {
      const response = await axios.get<IItems>(
        `https://www.googleapis.com/books/v1/volumes?q=${option
          .split(" ")
          .join("")
          .toLowerCase()}${
          category === "All" ? "" : `+subject:${category.toLowerCase()}`
        }&orderBy=${sortBy.toLowerCase()}&startIndex=${index}&maxResults=30&filter=paid-ebooks&key=${
          settings.key
        }&fields=kind,items(id,volumeInfo,saleInfo)`
      );
      const items = response.data.items.map((item) => {
        item.isAdded = false;
        return item;
      });
      dispatch({
        type: BooksActionTypes.ADD_BOOKS,
        payload: items,
      });
    }
  };
};

export const setBooks = (books: any[]): BookAction => ({
  type: BooksActionTypes.SET_BOOKS,
  payload: books,
});
export const addBooks = (books: any[]): BookAction => ({
  type: BooksActionTypes.ADD_BOOKS,
  payload: books,
});
export const setIsAdded = (book: ItemType): BookAction => ({
  type: BooksActionTypes.SET_IS_ADDED,
  payload: book,
});
// export const setLoaded = (payload:boolean) => ({
//   type: "SET_LOADED",
//   payload,
// });
