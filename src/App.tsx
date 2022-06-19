import React from "react";
import { Route, Routes } from "react-router-dom";

import Body from "./pages/Body";
import { BookPage } from "./pages/BookPage";
import { Cart } from "./pages/Cart";
import Header from "./components/Header";

import { StyledApp } from "./App.style";

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
