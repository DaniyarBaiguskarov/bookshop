import { FiltersAction, FiltersActionTypes } from "../../types/filters";

export const setSortBy = (sortBy: string): FiltersAction => ({
  type: FiltersActionTypes.SET_SORTBY,
  payload: sortBy,
});

export const setCategory = (catName: string): FiltersAction => ({
  type: FiltersActionTypes.SET_CATEGORY,
  payload: catName,
});

export const setOption = (optName: string | null): FiltersAction => ({
  type: FiltersActionTypes.SET_OPTION,
  payload: optName,
});

export const setIndex = (index: number): FiltersAction => ({
  type: FiltersActionTypes.SET_INDEX,
  payload: index,
});
