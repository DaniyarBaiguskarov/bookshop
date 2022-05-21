import * as BooksActionCreators from "./books";
import * as FiltersActionCreators from "./filters";
import * as CartActionCreators from "./cart";

export default {
  ...BooksActionCreators,
  ...FiltersActionCreators,
  ...CartActionCreators,
};
