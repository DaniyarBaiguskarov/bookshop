import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ItemType } from "../types/books";

const StyledButton = styled.button`
  // margin-top: auto;
  height: 40px;
  width: 128px;
  padding: 0;
  border: 1px solid gray;
  // margin: 0;
  background: transparent;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #77cc6c;
    border: none;
    color: white;
  }
`;
const StyledToOrderButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 128px;
  color: white;
  padding: auto;
  // border: 1px solid gray;

  background-color: #6ebc63;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #77cc6c;

    color: white;
  }
`;

const ToCartButton: React.FC<ItemType> = (item) => {
  const { cartItems } = useTypedSelector(({ cart }) => ({
    cartItems: cart.items,
  }));
  const { AddCartBook, setIsAdded } = useActions();
  const onClickAdd = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsAdded(item);
    AddCartBook(item);
  };
  return !cartItems.find((items) => items.product.id === item.id) ? (
    <StyledButton onClick={onClickAdd}>В корзину</StyledButton>
  ) : (
    <StyledToOrderButton
      onClick={(e: React.SyntheticEvent<HTMLElement>) => e.stopPropagation()}
      to="/cart"
    >
      Оформить
    </StyledToOrderButton>
  );
};

export default ToCartButton;
