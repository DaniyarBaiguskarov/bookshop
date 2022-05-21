export enum BooksActionTypes {
  SET_BOOKS = "SET_BOOKS",
  ADD_BOOKS = "ADD_BOOKS",
  SET_IS_ADDED = "SET_IS_ADDED",
}

export interface BookState {
  items: ItemType[];
  isLoaded: boolean;
}

interface SetBooksAction {
  type: BooksActionTypes.SET_BOOKS;
  payload: any[];
}

interface AddBooksAction {
  type: BooksActionTypes.ADD_BOOKS;
  payload: any[];
}

interface SetIsAdded {
  type: BooksActionTypes.SET_IS_ADDED;
  payload: ItemType;
}

export interface ItemType {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    pageCount: number;
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
  saleInfo: {
    saleability: string;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  isAdded: boolean;
}

export interface IItems {
  items: Array<ItemType>;
}

export type BookAction = SetBooksAction | AddBooksAction | SetIsAdded;
