import styled from "styled-components";

export const StyledBook = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  padding: 1.5rem;
  &:hover {
    box-shadow: 0 14px 28px rgba(82, 82, 82, 0.25),
      0 10px 10px rgba(82, 82, 82, 0.25);
  }
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    padding: 10px 0 10px 0;

    > * {
      font-size: 14px;
    }
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 40%;
    padding: 10px 0 10px 0;
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px 0 10px;
`;

export const StyledText = styled("p")<{
  color: string;
  size?: string;
  weight?: string;
  setMarginTop?: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-top: ${(props) => props.setMarginTop};
`;
