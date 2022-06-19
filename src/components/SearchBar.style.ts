import styled from "styled-components";

export const StyledSearchBar = styled.form`
  display: flex;
  width: 100%;
`;

export const StyledInputSearch = styled.input`
  border: none;
  whitespace: wrap;
  border-radius: 5px 0 0 5px;
  background: #e9e9e9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.35em 0.75em;
  border: none;

  width: auto;
  height: 42px;
  flex-grow: 1;
`;

export const StyledSearchButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 0px 5px 5px 0px;

  color: white;
  border: none;

  cursor: pointer;
  background: url(https://lh4.googleusercontent.com/-b-5aBxcxarY/UAfFW9lVyjI/AAAAAAAABUg/gQtEXuPuIds/s13/go.png)
    50% no-repeat;
  background-color: white;
`;
