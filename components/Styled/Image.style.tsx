import styled from "styled-components";
import Image from "../Image/Image";
import { StyledImageProps } from "styled-components";

export const StyledImage = styled(Image)<StyledImageProps>`
  /* width: 150px; */
  /* margin-left: 40px; */
  /* background: red; */
  display: flex;
  justify-content: center;
`;
