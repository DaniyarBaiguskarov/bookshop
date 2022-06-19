import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;

  justify-content: start;
  padding: 10px;

  border-bottom: 1px solid #d4bebe;
  width: auto;
`;

export const StyledImage = styled.div`
  padding-right: 10px;
  width: auto;
`;

export const StyledTitle = styled.div`
  width: 76%;
  a {
    font-size: 1.5em;
    color: #3d70b2;
    &:hover {
      color: #4186df;
    }
  }
  div {
    color: #7d8290;
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 60%;
  }
`;

export const StyledButtons = styled.div`
  width: 10%;
  display: inline-flex;

  > * {
    height: 40px;
    width: 40px;
    padding: 0;
    border: 1px solid gray;
    margin: 0;
    background: transparent;

    text-align: center;
    @media ${(props) => props.theme.media.desktop} {
      &:hover {
        background-color: #77cc6c;
        color: white;
      }
    }
  }

  .right {
    border-right: none;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
  }
  .left {
    border-left: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 70%;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 20%;
  }
`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10%;

  @media ${(props) => props.theme.media.tablet} {
    width: 24%;
  }
`;
export const StyledSum = styled.div`
  font-weight: bold;
  font-size: 1.25em;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  color: #7d8290;
  svg {
    fill: #7d8290;
    margin-right: 8px;
  }
  font-height: 24px;
`;

export const Flex = styled("div")<{ direction?: string; justify?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify || "stretch"};

  width: 100%;
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    > * {
      padding: 0 0 10px 0;
    }
  }
`;
