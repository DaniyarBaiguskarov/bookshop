import styled from "styled-components";

export const StyledBookPage = styled.main`
  display: flex;
  flex-direction: column;

  width: 70%;
  margin: 0 auto 0 auto;
  > * {
    margin: 0.5em 0 0.5em 0;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 90%;
  }
`;

export const Flex = styled("div")<{ direction?: string; justify?: string }>`
  display: flex;
  padding: 0 10px 0 10px;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify || "stretch"};
  > * {
    padding: 10px 0 10px 0;
  }
`;

export const StyledBookCharacteristics = styled(Flex)`
  > * {
    padding: 0.25em;
    @media ${(props) => props.theme.media.phone} {
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

export const StyledText = styled("p")<{
  color?: string;
  size?: string;
  weight?: string;
  setMarginTop?: string;
  align?: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-top: ${(props) => props.setMarginTop};
  align-self: ${(props) => props.align};
`;
