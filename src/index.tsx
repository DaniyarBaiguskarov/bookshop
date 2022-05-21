import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans",system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,"Arial";
    text-decoration:none;
}
`;
const theme = {
  media: {
    phone: "(max-width: 480px)",
    tablet: "(max-width: 768px) and (min-width: 480px)",
    desktop: "(min-width: 768px)",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
