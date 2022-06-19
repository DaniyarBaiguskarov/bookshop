import React from "react";

import Categories from "./Categories";
import SearchBar from "./SearchBar";
import Sort from "./Sort";

import {
  StyledHeader,
  StyledFiltration,
  StyledForm,
  StyledLink,
} from "./Header.style";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledForm>
        <SearchBar />
        <StyledFiltration>
          <Categories />
          <Sort />
        </StyledFiltration>
      </StyledForm>
      <StyledLink to="/cart">
        <img
          src="https://www.chitai-gorod.ru/ii/img/general/basket.svg"
          alt="Корзина"
        />
      </StyledLink>
    </StyledHeader>
  );
};

export default Header;
