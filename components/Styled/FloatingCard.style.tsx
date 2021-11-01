import styled from "styled-components";
import FloatingCard from "../FloatingCard/FloatingCard";
import { StyledFloatingCardProps } from "styled-components";

export const StyledFloatingCard = styled(FloatingCard)<StyledFloatingCardProps>`
  padding: 100px 200px;

  .box {
    width: 400px;
    height: 400px;
    position: relative;

    &:before {
      content: "";
      height: 100%;
      width: 400px;
      background: rgba(255, 255, 255, 0.075);
      position: absolute;
      transform: rotate(-15deg);
      border-radius: 50px;
      transition: 0.6s;
    }

    &:hover {
      &::before {
        transform: rotate(-5deg);
      }
    }
  }

  .card-image {
    width: 120%;
    height: 120%;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    /* display: inline-block; */
    /* background: orange; */
    z-index: 10;
    border-radius: 50px;
    transform: rotate(-5deg);
    /* padding: 20px; */
    transition: 0.6s;
    overflow: hidden;

    &:hover {
      transform: scale(1.1) rotate(0deg);
    }
  }
`;
