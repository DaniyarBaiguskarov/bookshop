import { BookAction, BooksActionTypes, BookState } from "../../types/books";

const initialState: BookState = {
  items: [],
  isLoaded: false,
};

function books(state = initialState, action: BookAction): BookState {
  switch (action.type) {
    case BooksActionTypes.SET_BOOKS:
      return {
        items: action.payload,
        isLoaded: true,
      };
    case BooksActionTypes.ADD_BOOKS:
      return {
        items: state.items.concat(action.payload),
        isLoaded: true,
      };
    case BooksActionTypes.SET_IS_ADDED:
      const currentItems = state.items;
      const itemToChange = currentItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemToChange) {
        itemToChange.isAdded = true;
      }
      return {
        items: currentItems,
        isLoaded: true,
      };
    default:
      return state;
  }
}
export default books;
