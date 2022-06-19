import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useActions } from "../hooks/useActions";

import {
  StyledInputSearch,
  StyledSearchBar,
  StyledSearchButton,
} from "./SearchBar.style";

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
