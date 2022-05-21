import React, { useRef } from "react";

import Book from "./Book";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

import styled from "styled-components";

const StyledMain = styled.main`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;

  justify-content: space-around;
`;

const StyledLoadMoreButton = styled.button`
  margin-top: 20px;
  height: 40px;
  width: 100px;
  padding: 0;
  border: 1px solid gray;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #77cc6c;
    border: none;
    color: white;
  }
`;

const Body: React.FC = () => {
  const { items, category, sortBy, option, index, isLoaded } = useTypedSelector(
    ({ filters, books }) => ({
      items: books.items,
      isLoaded: books.isLoaded,
      category: filters.category,
      sortBy: filters.sortBy,
      option: filters.option,
      index: filters.index,
    })
  );
  const isMounted = useRef(false);
  const { fetchAddBooks, fetchBooks, setIndex } = useActions();

  React.useEffect(() => {
    if (option !== null && index !== 0) {
      fetchAddBooks({ category, sortBy, option, index });
    }
  }, [index]);

  React.useEffect(() => {
    if (isMounted.current && option !== null) {
      fetchBooks({ category, sortBy, option, index });
      setIndex(0);
    } else {
      isMounted.current = true;
    }
  }, [category, sortBy, option]);
  const handlePage = () => {
    setIndex(index + 30);
  };
  return (
    <>
      <StyledMain>
        {items &&
          items.map((item, index) => (
            <Book key={`${item}_${index}`} {...item} />
          ))}
      </StyledMain>
      {isLoaded && (
        <StyledLoadMoreButton onClick={handlePage}>
          Загрузить еще
        </StyledLoadMoreButton>
      )}
    </>
  );
};

export default Body;
