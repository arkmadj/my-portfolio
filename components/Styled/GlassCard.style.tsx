import styled from "styled-components";
import GlassCard from "../GlassCard/GlassCard";
import { StyledGlassCardProps } from "styled-components";

export const StyledGlassCard = styled(GlassCard)<StyledGlassCardProps>`
  .box {
    position: relative;
    width: 400px;
    height: 400px;
    transition: 0.6s;
    /* background: red; */

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50px;
      width: 50%;
      height: 100%;
      background: linear-gradient(315deg, orange, #ff7300);
      border-radius: 8px;
      transform: skewX(15deg);
      transition: 0.5s;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50px;
      width: 50%;
      height: 100%;
      background: linear-gradient(315deg, orange, #ff7300);
      border-radius: 8px;
      transform: skewX(15deg);
      transition: 0.5s;
      filter: blur(30px);
    }

    &:hover {
      &::before,
      &::after {
        transform: skewX(0deg);
        left: 20px;
        width: calc(100% - 90px);
      }

      .content {
        left: -25px;
        padding: 60px 40px;
      }
    }

    &:hover > span {
      &::before {
        top: -50px;
        left: 50px;
        width: 100px;
        height: 100px;
        opacity: 1;
      }
      &::after {
        bottom: -50px;
        right: 50px;
        width: 100px;
        height: 100px;
        opacity: 1;
      }
    }

    .content {
      position: relative;
      left: 0;
      padding: 20px 40px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      backdrop-filter: blur(10px);
      z-index: 1;
      transition: 0.6s;

      h2 {
        font-size: 2em;
      }

      p {
        font-size: 1.1em;
        margin-bottom: 10px;
      }
    }
  }
  .box > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    pointer-events: none;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: 0.6s;
      animation: animate-span 2s ease-in-out infinite;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: 0.6s;
      animation: animate-span 2s ease-in-out infinite;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
  }

  @keyframes animate-span {
    0%,
    100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .content h2,
  p {
    color: black;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    .box {
      width: 300px;
      height: 410px;

      .content {
        padding: 20px;
      }

      &:hover {
      &::before,
      &::after {
        transform: skewX(0deg);
        left: 10px;
        width: calc(100% - 10px);
      }

      .content {
        left: -20px;
        padding: 40px 30px;
      }
    }

    &:hover > span {
      &::before {
        left: 30px;
      }
      &::after {
        right: 30px;
      }
    }
    /* background: red; */
  }
`;
