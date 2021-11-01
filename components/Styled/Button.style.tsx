import styled from "styled-components";
import Button from "../Button/Button";
import { StyledButtonProps } from "styled-components";

export const StyledButton = styled(Button)<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${({ margin }) => margin};

  a {
    position: relative;
    width: ${({ width }) => (width ? width : "140px")};
    height: 50px;
    display: inline-block;
    background: orange;
    border-radius: 50px;

    &::after,
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50px;
      background: ${({ reverseShadow }) =>
        reverseShadow
          ? "linear-gradient(45deg, #121214, orange, #121214)"
          : "linear-gradient(45deg, orange, #121214, orange)"};
      transition: 0.5s;
    }

    &:hover {
      &::before {
        inset: -3px;
        filter: blur(5px);
      }

      &::after {
        inset: -3px;
        filter: blur(10px);
      }
    }
  }

  a span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: ${({ background }) => (background ? background : "#121214")};
    border-radius: 50px;
    border: 1px solid orange;
    z-index: 10;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    letter-spacing: 2px;
    color: #fff;
    overflow: hidden;
    transition: 0.6s;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.075);
      transform: skew(30deg);
      transition: 0.6s;
    }

    &:hover {
      transform: scale(1.1);
      color: orange;
      &::before {
        left: -50%;
      }
    }
  }
`;
