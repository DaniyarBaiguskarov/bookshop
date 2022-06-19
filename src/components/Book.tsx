import React from "react";
import { useNavigate } from "react-router-dom";

import { ItemType } from "../types/books";
import ToCartButton from "./ToCartButton";

import { StyledBook, StyledDescription, StyledText } from "./Book.style";

const Book: React.FC<ItemType> = (item) => {
  const { id, volumeInfo, saleInfo } = item;

  const history = useNavigate();

  return (
    <StyledBook onClick={() => history("/" + id, { replace: false })}>
      <StyledDescription>
        <img src={volumeInfo.imageLinks?.thumbnail} alt="Title page" />
      </StyledDescription>
      <StyledDescription>
        <StyledText color="black" size="1.25em">
          {volumeInfo.title}
        </StyledText>
        {volumeInfo.categories && (
          <StyledText color="gray">
            Categories: {volumeInfo.categories?.[0]}
          </StyledText>
        )}
        <StyledText color="gray">
          Authors: {volumeInfo.authors?.join(", ")}
        </StyledText>

        <StyledText color="black" weight="bold" setMarginTop="auto">
          {saleInfo.listPrice?.amount + saleInfo.listPrice.currencyCode}
        </StyledText>
        <ToCartButton {...item} />
      </StyledDescription>
    </StyledBook>
  );
};

export default Book;
