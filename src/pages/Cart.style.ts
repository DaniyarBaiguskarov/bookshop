import styled from "styled-components";

export const StyledCart = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border-bottom: 1px solid #d4bebe;
  text-align: start;
  .name {
    width: 10%;
    @media ${(props) => props.theme.media.phone} {
      width: 37%;
    }
    @media ${(props) => props.theme.media.tablet} {
      width: 20%;
    }
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 0;
    border-bottom: 10px solid #6ebc63;
  }
`;

export const StyledCartHeaderFunnctionality = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 20%;

  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 35%;
  }
`;

export const StyledSum = styled.div`
  width: 50%;
  text-align: center;
  font-weight: bold;
  font-size: 1.25em;
  margin-left: auto;
  margin-right: auto;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;

export const StyledDeleteButton = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-left: auto;
  margin-right: auto;

  color: #7d8290;
  svg {
    fill: #7d8290;
    margin-right: 8px;
  }
  font-height: 24px;
  @media ${(props) => props.theme.media.phone} {
  }
  @media ${(props) => props.theme.media.tablet} {
  }
`;
