import styled from "styled-components";

export const AppContainer = styled.div`
  margin-top: 130px;
  background: ${({ theme }) => theme.colors.dark};
  min-height: 100%;
  /* min-width: 100%; */
  /* z-index: -1; */

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    margin-top: 100px;
    /* width: 200%; */
    background: red;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    margin-top: 100px;
    width: 100%;
    background: lightblue;
  }
`;
