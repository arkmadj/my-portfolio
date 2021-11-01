import styled from "styled-components";
import Section from "../Section/Section";

export const StyledSection = styled(Section)`
  background: ${({ theme }) => theme.colors.darker};
  padding: 50px 200px;

  .section-image {
    /* background: red; */
    /* height: 1200px; */
  }

  h1 {
    color: orange;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    padding: 50px 20px;

    .greeting {
      font-size: 35px;
    }

    .name {
      font-size: 50px;
    }

    .job {
      font-size: 35px;
    }

    .intro {
      font-size: 25px;
    }

    .section-image {
      display: none;
    }
  }
`;
