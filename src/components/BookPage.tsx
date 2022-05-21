import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import settings from "../config";

import { ItemType } from "../types/books";
import ToCartButton from "./ToCartButton";

const StyledBookPage = styled.main`
  display: flex;
  flex-direction: column;

  width: 70%;
  margin: 0 auto 0 auto;
  > * {
    margin: 0.5em 0 0.5em 0;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 90%;
  }
`;

const Flex = styled("div")<{ direction?: string; justify?: string }>`
  display: flex;
  padding: 0 10px 0 10px;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify || "stretch"};
  > * {
    padding: 10px 0 10px 0;
  }
`;

const StyledBookCharacteristics = styled(Flex)`
  > * {
    padding: 0.25em;
    @media ${(props) => props.theme.media.phone} {
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

const StyledText = styled("p")<{
  color?: string;
  size?: string;
  weight?: string;
  setMarginTop?: string;
  align?: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-top: ${(props) => props.setMarginTop};
  align-self: ${(props) => props.align};
`;

export const BookPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemType>();
  useEffect(() => {
    (async function fetchBook() {
      const { data } = await axios.get<ItemType>(
        `https://www.googleapis.com/books/v1/volumes/${params.id}?key=${settings.key}`
      );
      setItem(data);
    })();
  }, []);

  return (
    <>
      {item && (
        <StyledBookPage>
          <Flex direction="row">
            <Flex direction="column">
              <img
                src={item?.volumeInfo.imageLinks?.thumbnail}
                alt="Title page"
              />
              <StyledText align="center">
                {item &&
                  item?.saleInfo.listPrice?.amount +
                    item?.saleInfo.listPrice.currencyCode}
              </StyledText>
              <ToCartButton {...item} />
            </Flex>
            <StyledBookCharacteristics
              direction="column"
              justify="space-around"
            >
              <StyledText size="1.5em">{item?.volumeInfo.title}</StyledText>
              <StyledText>
                Categories: {item?.volumeInfo.categories?.join(", ")}
              </StyledText>
              <StyledText>
                Authors: {item?.volumeInfo.authors?.join(", ")}
              </StyledText>
              <StyledText>Page count: {item?.volumeInfo.pageCount}</StyledText>
              <StyledText>Publisher: {item?.volumeInfo.publisher}</StyledText>
              <StyledText>
                Publish date: {item?.volumeInfo.publishedDate}
              </StyledText>
            </StyledBookCharacteristics>
          </Flex>
          {item && (
            <div>
              <StyledText weight="bold" size="1.15em">
                О товаре
              </StyledText>
              <StyledText
                dangerouslySetInnerHTML={{
                  __html: item.volumeInfo.description,
                }}
              />
            </div>
          )}
        </StyledBookPage>
      )}
    </>
  );
};
