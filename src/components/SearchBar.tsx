import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";

const StyledSearchBar = styled.form`
  display: flex;
  width: 100%;
`;

const StyledInputSearch = styled.input`
  border: none;
  whitespace: wrap;
  border-radius: 5px 0 0 5px;
  background: #e9e9e9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.35em 0.75em;
  border: none;

  width: auto;
  height: 42px;
  flex-grow: 1;
`;

const StyledSearchButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 0px 5px 5px 0px;

  color: white;
  border: none;

  cursor: pointer;
  background: url(https://lh4.googleusercontent.com/-b-5aBxcxarY/UAfFW9lVyjI/AAAAAAAABUg/gQtEXuPuIds/s13/go.png)
    50% no-repeat;
  background-color: white;
`;

const SearchBar: React.FC = () => {
  const [request, setRequest] = useState<string | null>(null);

  const { setOption } = useActions();
  const history = useNavigate();

  const handleSubmitOption = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOption(request);
  };

  return (
    <StyledSearchBar onSubmit={handleSubmitOption}>
      <StyledInputSearch
        type="text"
        onChange={(e) => setRequest(e.target.value)}
      />
      <StyledSearchButton
        type="submit"
        onClick={() => history("/", { replace: false })}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
