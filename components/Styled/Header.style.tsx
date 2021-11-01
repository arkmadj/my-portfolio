import styled from "styled-components";
import Header from "../Header/Header";

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 200px;
  background: ${({ theme }) => theme.colors.dark};
  z-index: 100;

  .logo {
    position: relative;
    font-weight: 700;
    color: orange;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;
  }

  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li {
    position: relative;
    list-style: none;
  }

  ul li > a {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 500px;
    transition: 0.6s;
    display: inline-block;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: orange;
      transition: width 0.6s;
      margin-top: 5px;
    }

    &:hover {
      color: orange;
      &::after {
        width: 100%;
        transition: width 0.6s;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding: 40px 0px;
    justify-content: center;
    /* width: 80%; */

    ul {
      display: none;
    }
  }
`;
