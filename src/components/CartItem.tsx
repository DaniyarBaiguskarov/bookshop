import React from "react";
import { useNavigate } from "react-router-dom";

import { useActions } from "../hooks/useActions";

import {
  StyledButtons,
  StyledCartItem,
  StyledDeleteButton,
  StyledImage,
  StyledSum,
  StyledSummary,
  StyledTitle,
  Flex,
} from "./CartItem.style";

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  img?: string;
  authors: string[];
  count: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  img,
  authors,
  count,
}: CartItemProps) => {
  const { MinusCartBook, PlusCartBook, RemoveCartBook } = useActions();
  const history = useNavigate();
  return (
    <StyledCartItem>
      <StyledImage>
        <img src={img} alt="Title page" />
      </StyledImage>
      <Flex justify="space-around">
        <StyledTitle>
          <a
            href={"/" + id}
            onClick={() => history("/" + id, { replace: false })}
          >
            {title}
          </a>
          <div>{authors.join(", ")}</div>
        </StyledTitle>

        <StyledButtons>
          <button className="right" onClick={() => PlusCartBook(id)}>
            +
          </button>

          <button>{count + 1}</button>

          <button className="left" onClick={() => MinusCartBook(id)}>
            -
          </button>
        </StyledButtons>
        <StyledSummary>
          <StyledSum>{price * (count + 1)}RUB</StyledSum>
          <StyledDeleteButton onClick={() => RemoveCartBook(id)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.714 1.875h.411a.875.875 0 010 1.75H2.875a.875.875 0 110-1.75h2.819l.263-.511A.645.645 0 016.539 1h3.11c.248 0 .474.14.585.364l.249.511h2.231zm.715 11.813V4.438a.328.328 0 00-.327-.328H3.088a.328.328 0 00-.326.328v9.248c0 .725.53 1.313 1.252 1.313h8.108a1.31 1.31 0 001.307-1.313zm-8-7.244c.24 0 .38.197.38.438v6.125c0 .24-.14.437-.38.437s-.381-.196-.381-.437V6.882c0-.24.141-.438.38-.438zm2.666 0c.24 0 .381.197.381.438v6.125c0 .24-.141.437-.38.437-.24 0-.382-.196-.382-.437V6.882c0-.24.142-.438.381-.438zm2.667 0c.24 0 .38.197.38.438v6.125c0 .24-.14.437-.38.437s-.381-.196-.381-.437V6.882c0-.24.142-.438.381-.438z"></path>
            </svg>
            Удалить
          </StyledDeleteButton>
        </StyledSummary>
      </Flex>
    </StyledCartItem>
  );
};
