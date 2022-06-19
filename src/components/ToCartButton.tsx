import React from "react";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ItemType } from "../types/books";

import { StyledButton, StyledToOrderButton } from "./ToCartButton.style";

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
