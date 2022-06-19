import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import settings from "../config";

import { ItemType } from "../types/books";
import ToCartButton from "../components/ToCartButton";

import {
  StyledBookCharacteristics,
  StyledBookPage,
  StyledText,
  Flex,
} from "./BookPage.style";

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
