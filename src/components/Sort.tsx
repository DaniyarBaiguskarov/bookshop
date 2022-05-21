import React from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";

const StyledFiltersForm = styled.form`
  width: 48%;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 38px;
  border-radius: 5px;
  border: none;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -webkit-appearance: none;
  background-position: right 0.75rem center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
  line-height: 1em;
  /* for FF */
  -moz-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
  /* for IE */
  -ms-appearance: none;
  appearance: none !important;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
`;

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
