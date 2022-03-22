import styled from "styled-components";
import Footer from "../Footer/Footer";

export const StyledFooter = styled(Footer)`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.darker};
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    z-index: 10;
    border-top: 1px solid rgba(51, 38, 38, 0.5);
    /* background: rgba(255, 255, 255, 0.1); */
    background: #20202481;
    backdrop-filter: blur(10px);
  }

  .content {
    position: absolute;
    /* background: red; */
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 15;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 200px;
  }

  .contact-info {
    /* width: 200px; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    position: relative;
    /* background: red; */

    a{
      text-decoration: none;
      cursor: pointer;
      color: orange;
      &:hover{
        color: orange;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      background: rgba(255, 255, 255, 0.1);
      width: 1%;
      height: 70%;
      z-index: 1;
      transform: translateY(20%);
      border-radius: 2px;
    }
  }

  .contact-info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2em;
    /* line-height: 24px; */

    &:hover{
      span{
        color: orange;
      }

      svg {
        fill: orange;
      }
    }

    span {
      font-weight: lighter;
      font-size: 15px;
      /* color: red; */
    }
  }

  ul {
    position: relative;
    display: flex;

    li {
      position: relative;
      list-style: none;
      margin: 10px;

      a {
        position: relative;
        top: 0;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        font-size: 2em;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(4px);
        z-index: 1;
        box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        overflow: hidden;
        transition: top 0.6s, z-index 0s, transform 0.5s;
        transition-delay: 0.5s, 0.5s, 0s;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 100%;
          background: rgba(255, 255, 255, 0.5);
          transform: skewX(45deg) translateX(150px);
          transition: 0.6s;
        }

        &:hover {
          transition-delay: 0s, 0.5s, 0.5s;
          top: -50px;
          transform: translateY(50px);
          z-index: 11;
          &::before {
            transform: skewX(45deg) translateX(-150px);
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .content {
      padding: 0 20px;
    }
  }
`;
