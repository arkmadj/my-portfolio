import styled from "styled-components";
import Carousel from "../Carousel/Carousel";

export const StyledCarousel = styled(Carousel)`
  display: flex;
  /* justify-content: center; */
  background: red;
  /* width: 200px; */
  align-items: center;
  height: 400px;

  div {
    background: blue;
    width: 300px;
    height: 300px;
  }
`;
