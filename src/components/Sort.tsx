import React from "react";

import { useActions } from "../hooks/useActions";

import { StyledFiltersForm, StyledSelect } from "./FilterSort.style";

const Sort: React.FC = () => {
  const { setSortBy } = useActions();
  const handleSubmitSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  return (
    <StyledFiltersForm>
      <StyledSelect
        className="form-select"
        defaultValue="relevance"
        onChange={(e) => handleSubmitSort(e)}
      >
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </StyledSelect>
    </StyledFiltersForm>
  );
};

export default Sort;
