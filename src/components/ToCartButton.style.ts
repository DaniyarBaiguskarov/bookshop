import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
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
export const StyledToOrderButton = styled(Link)`
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
