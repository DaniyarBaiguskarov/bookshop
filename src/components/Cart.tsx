import React from "react";

import styled from "styled-components";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CartItem } from "./CartItem";

const StyledCart = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border-bottom: 1px solid #d4bebe;
  text-align: start;
  .name {
    width: 10%;
    @media ${(props) => props.theme.media.phone} {
      width: 37%;
    }
    @media ${(props) => props.theme.media.tablet} {
      width: 20%;
    }
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 0;
    border-bottom: 10px solid #6ebc63;
  }
`;

const StyledCartHeaderFunnctionality = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 20%;

  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 35%;
  }
`;

const StyledSum = styled.div`
  width: 50%;
  text-align: center;
  font-weight: bold;
  font-size: 1.25em;
  margin-left: auto;
  margin-right: auto;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;

const StyledDeleteButton = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-left: auto;
  margin-right: auto;

  color: #7d8290;
  svg {
    fill: #7d8290;
    margin-right: 8px;
  }
  font-height: 24px;
  @media ${(props) => props.theme.media.phone} {
  }
  @media ${(props) => props.theme.media.tablet} {
  }
`;

export const Cart: React.FC = () => {
  const { items, totalPrice } = useTypedSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));
  const { ClearCart } = useActions();

  return (
    <StyledCart>
      <StyledCartHeader>
        <div className="name">Корзина</div>
        {items.length !== 0 && (
          <StyledCartHeaderFunnctionality>
            <StyledDeleteButton onClick={() => ClearCart()}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.714 1.875h.411a.875.875 0 010 1.75H2.875a.875.875 0 110-1.75h2.819l.263-.511A.645.645 0 016.539 1h3.11c.248 0 .474.14.585.364l.249.511h2.231zm.715 11.813V4.438a.328.328 0 00-.327-.328H3.088a.328.328 0 00-.326.328v9.248c0 .725.53 1.313 1.252 1.313h8.108a1.31 1.31 0 001.307-1.313zm-8-7.244c.24 0 .38.197.38.438v6.125c0 .24-.14.437-.38.437s-.381-.196-.381-.437V6.882c0-.24.141-.438.38-.438zm2.666 0c.24 0 .381.197.381.438v6.125c0 .24-.141.437-.38.437-.24 0-.382-.196-.382-.437V6.882c0-.24.142-.438.381-.438zm2.667 0c.24 0 .38.197.38.438v6.125c0 .24-.14.437-.38.437s-.381-.196-.381-.437V6.882c0-.24.142-.438.381-.438z"></path>
              </svg>
              Удалить все
            </StyledDeleteButton>
            <StyledSum>{totalPrice}RUB</StyledSum>
          </StyledCartHeaderFunnctionality>
        )}
      </StyledCartHeader>
      {items &&
        items.map((item, index) => (
          <CartItem
            key={`${item}_${index}`}
            id={item.product.id}
            title={item.product.volumeInfo.title}
            price={item.product.saleInfo.listPrice.amount}
            authors={item.product.volumeInfo.authors}
            img={item.product.volumeInfo.imageLinks?.thumbnail}
            count={item.count}
          />
        ))}
    </StyledCart>
  );
};
