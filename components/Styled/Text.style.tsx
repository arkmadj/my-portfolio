import styled from "styled-components";
import { StyledTextProps } from "styled-components";

export const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : ""};
  position: relative;
  font-style: ${({ isItalized }) => (isItalized ? "italic" : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};

  &::after {
    /* content: ""; */
    content: ${({ isUnderlined }) => (isUnderlined ? "''" : null)};
    position: absolute;
    /* height: ${({ isUnderlined }) => (isUnderlined ? "25px" : "")}; */
    height: 5px;
    width: 50%;
    left: 0%;
    /* bottom: -20px; */
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: 20% 70%;
    transform: translateX(50%);
    margin-top: 10px;
  }
`;
