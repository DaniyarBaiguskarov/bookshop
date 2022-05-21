import {
  FiltersAction,
  FiltersActionTypes,
  FiltersState,
} from "../../types/filters";

const initialState: FiltersState = {
  category: "All",
  sortBy: "Relevance",
  option: null,
  index: 0,
};

function filters(state = initialState, action: FiltersAction) {
  switch (action.type) {
    case FiltersActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case FiltersActionTypes.SET_INDEX:
      return {
        ...state,
        index: action.payload,
      };
    case FiltersActionTypes.SET_OPTION:
      return {
        ...state,
        option: action.payload,
      };
    case FiltersActionTypes.SET_SORTBY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
}

export default filters;
