import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans",system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,"Arial";
    text-decoration:none;
}
`;
export const theme = {
  media: {
    phone: "(max-width: 480px)",
    tablet: "(max-width: 768px) and (min-width: 480px)",
    desktop: "(min-width: 768px)",
  },
};
