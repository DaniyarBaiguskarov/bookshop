import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-image: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80");
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledForm = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30%;
  padding: 40px 0 40px 0;

  @media ${(props) => props.theme.media.phone} {
    width: 70%;
    margin-left: 10%;
    padding: 20px 0 20px 0;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 70%;
    margin-left: 10%;
    padding: 20px 0 20px 0;
  }
`;

export const StyledFiltration = styled.div`
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: 4%;
  align-self: center;
  @media ${(props) => props.theme.media.phone} {
    img {
      width: 45px;
      height: 45px;
    }
  }
  @media ${(props) => props.theme.media.tablet} {
    img {
      width: 45px;
      height: 45px;
    }
  }
`;
