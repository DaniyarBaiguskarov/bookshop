import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ItemType } from "../types/books";

import ToCartButton from "./ToCartButton";

const StyledBook = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  padding: 1.5rem;
  &:hover {
    box-shadow: 0 14px 28px rgba(82, 82, 82, 0.25),
      0 10px 10px rgba(82, 82, 82, 0.25);
  }
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    padding: 10px 0 10px 0;

    > * {
      font-size: 14px;
    }
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 40%;
    padding: 10px 0 10px 0;
  }
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px 0 10px;
`;

const StyledText = styled("p")<{
  color: string;
  size?: string;
  weight?: string;
  setMarginTop?: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-top: ${(props) => props.setMarginTop};
`;

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
