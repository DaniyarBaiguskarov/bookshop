import React, { useRef } from "react";

import Book from "../components/Book";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

import { StyledMain, StyledLoadMoreButton } from "./Body.style";

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
