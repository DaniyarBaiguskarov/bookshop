import React from "react";

import { useActions } from "../hooks/useActions";

import { StyledFiltersForm, StyledSelect } from "./FilterSort.style";

const Categories: React.FC = () => {
  const { setCategory } = useActions();
  const handleSubmitCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  return (
    <StyledFiltersForm>
      <StyledSelect
        className="form-select"
        defaultValue="All"
        onChange={(e) => handleSubmitCategory(e)}
      >
        <option value="0" disabled>
          Categories
        </option>
        <option value="All">All</option>
        <option value="Art">Art</option>
        <option value="Biography">Biography</option>
        <option value="Computers">Computers</option>
        <option value="History">History</option>
        <option value="Medical">Medical</option>
        <option value="Poetry">Poetry</option>
      </StyledSelect>
    </StyledFiltersForm>
  );
};

export default Categories;
