export enum FiltersActionTypes {
  SET_SORTBY = "SET_SORTBY",
  SET_CATEGORY = "SET_CATEGORY",
  SET_OPTION = "SET_OPTION",
  SET_INDEX = "SET_INDEX",
}

export interface FiltersState {
  category: string;
  sortBy: string;
  option: null | string;
  index: number;
}

interface SetSortBy {
  type: FiltersActionTypes.SET_SORTBY;
  payload: string;
}

interface SetCaregory {
  type: FiltersActionTypes.SET_CATEGORY;
  payload: string;
}

interface SetOption {
  type: FiltersActionTypes.SET_OPTION;
  payload: string | null;
}

interface SetIndex {
  type: FiltersActionTypes.SET_INDEX;
  payload: number;
}

export type FiltersAction = SetSortBy | SetOption | SetIndex | SetCaregory;
