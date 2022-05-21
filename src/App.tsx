import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Body from "./components/Body";
import { BookPage } from "./components/BookPage";
import { Cart } from "./components/Cart";
import Header from "./components/Header";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />

      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path={"/"} element={<Body />} />
        <Route path={"/:id"} element={<BookPage />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
