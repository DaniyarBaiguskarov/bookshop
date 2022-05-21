import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";

const StyledCartItem = styled.div`
  display: flex;

  justify-content: start;
  padding: 10px;

  border-bottom: 1px solid #d4bebe;
  width: auto;
`;

const StyledImage = styled.div`
  padding-right: 10px;
  width: auto;
`;

const StyledTitle = styled.div`
  width: 76%;
  a {
    font-size: 1.5em;
    color: #3d70b2;
    &:hover {
      color: #4186df;
    }
  }
  div {
    color: #7d8290;
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 60%;
  }
`;

const StyledButtons = styled.div`
  width: 10%;
  display: inline-flex;

  > * {
    height: 40px;
    width: 40px;
    padding: 0;
    border: 1px solid gray;
    margin: 0;
    background: transparent;

    text-align: center;
    @media ${(props) => props.theme.media.desktop} {
      &:hover {
        background-color: #77cc6c;
        color: white;
      }
    }
  }

  .right {
    border-right: none;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
  }
  .left {
    border-left: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 70%;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 20%;
  }
`;

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10%;

  @media ${(props) => props.theme.media.tablet} {
    width: 24%;
  }
`;
const StyledSum = styled.div`
  font-weight: bold;
  font-size: 1.25em;
  margin-left: auto;
  margin-right: auto;
`;
const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  color: #7d8290;
  svg {
    fill: #7d8290;
    margin-right: 8px;
  }
  font-height: 24px;
`;

const Flex = styled("div")<{ direction?: string; justify?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify || "stretch"};

  width: 100%;
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    > * {
      padding: 0 0 10px 0;
    }
  }
`;

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
