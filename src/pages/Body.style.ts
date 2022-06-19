import styled from "styled-components";

export const StyledMain = styled.main`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;

  justify-content: space-around;
`;

export const StyledLoadMoreButton = styled.button`
  margin-top: 20px;
  height: 40px;
  width: 100px;
  padding: 0;
  border: 1px solid gray;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #77cc6c;
    border: none;
    color: white;
  }
`;
