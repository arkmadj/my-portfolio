import styled from "styled-components";
import SkillCard from "../SkillCard/SkillCard";
import { StyledSkillCardProps } from "styled-components";

export const StyledSkillCard = styled(SkillCard)<StyledSkillCardProps>`
  position: relative;
  width: 350px;
  height: 290px;
  background: ${({ theme }) => theme.colors.darker};
  /* background: orange; */
  border-radius: 20px;
  overflow: hidden;

  .percent {
    position: absolute;
    width: 80px;
    height: 80px;
    z-index: 3;
    transform: scale(0);
    transition: 0.6s;
    transition-delay: 0s;

    svg {
      position: relative;
      width: 80px;
      height: 80px;
      transform: rotate(-90deg);
      overflow: visible;
      circle {
        fill: none;
        stroke-width: 5;
        stroke: #000;
        stroke-dasharray: calc(2 * 3.142 * 40);
        stroke-dashoffset: calc(2 * 3.142 * 40);
        stroke-linecap: round;

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: ${({ theme }) => theme.colors.dark};
        }
      }
    }

    .number {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: orange;

      h2 {
        font-size: 24px;

        span {
          font-size: 14px;
        }
      }
    }

    .text {
      padding: 10px 0 0;
      color: #999;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ iconBackground }) =>
      iconBackground ? iconBackground : "red"};
    transition: 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    z-index: 2;
    transition-delay: 0.25s;
  }

  .icon > svg {
    &:first-child {
      transform: scale(1);
      transition: 0.6s;
      transition-delay: 0s;
    }
  }

  .content {
    position: relative;
    padding: 20px;
    text-align: center;
    margin-top: 100px;
    z-index: 1;
    transform: scale(0);
    transition: 0.6s;
    transition-delay: 0s;

    h2 {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    p {
      font-weight: 300;
      line-height: 1.5em;
      font-size: 13.5px;
    }
  }

  &:hover {
    .icon {
      top: 30px;
      left: calc(50% - 40px);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      font-size: 2em;
      transition-delay: 0s;
      background: transparent;
    }

    .icon > svg {
      &:first-child {
        transform: scale(0);
        transition: 0.6s;
        transition-delay: 0s;
      }
    }

    .percent {
      transform: scale(1);
      transition-delay: 0.25s;

      svg {
        circle {
          &:nth-child(2) {
            stroke-dashoffset: ${({ value }) => (value ? 2 * 3.142 * 40 : 0)};
            stroke: orange;
            animation: animate-progress 3s forwards;
          }

          @keyframes animate-progress {
            100% {
              stroke-dashoffset: ${({ value }) =>
                value
                  ? 2 * 3.142 * 40 - 2 * 3.142 * 40 * (value / 100)
                  : value};
            }
          }
        }
      }
    }

    .content {
      transform: scale(1);
      transition-delay: 0.25s;
    }
  }
`;
