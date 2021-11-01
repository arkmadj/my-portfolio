import styled from "styled-components";
import { StyledFlexProps } from "styled-components";

export const Flex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => (margin ? margin : "")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  width: ${({ width }) => (width ? width : "")};
  background: ${({ background }) => (background ? background : "")};
  padding: ${({ padding }) => (padding ? padding : "")};

  & > div,
  & > ul {
    flex: ${({ equalSections }) => (equalSections ? 1 : "")};
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: ${({ isResponsive, direction }) =>
      isResponsive ? direction : "column"};
    width: 100%;
    /* background: red; */
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: ${({ isResponsive, direction }) =>
      isResponsive ? direction : "column"};
    width: 100%;
    /* background: lightblue; */
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: ${({ isResponsive, direction }) =>
      isResponsive ? direction : "column"};
    width: "";
  }
`;
