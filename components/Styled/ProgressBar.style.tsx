import styled, { StyledProgressBarProps } from "styled-components";
import ProgressBar from "../ProgressBar/ProgressBar";

export const StyledProgressBar = styled(ProgressBar)<StyledProgressBarProps>`
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: black;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  .percent {
    position: relative;
    width: ${({ width }) => width};
    height: ${({ width }) => width};

    svg {
      position: relative;
      width: ${({ width }) => width};
      height: ${({ width }) => width};
      transform: rotate(-90deg);
      overflow: visible;
      circle {
        fill: none;
        stroke-width: 10;
        stroke: #000;
        stroke-dasharray: calc(2 * 3.142 * ${({ radius }) => radius});
        stroke-dashoffset: calc(2 * 3.142 * ${({ radius }) => radius});
        stroke-linecap: round;

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: #f3f3f3;
        }

        &:nth-child(2) {
          stroke-dashoffset: calc(2 * 3.142 * ${({ radius }) => radius});
          stroke: orange;
          animation: animate-progress 1.2s forwards;
        }

        @keyframes animate-progress {
          100% {
            stroke-dashoffset: ${({ value, radius }) =>
              value && radius
                ? 2 * 3.142 * radius - 2 * 3.142 * radius * (value / 100)
                : 0};
          }
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
        font-size: 48px;

        span {
          font-size: 24px;
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
`;
