//Libs
import styled from "styled-components";

//Types
import { BallButtonProps } from "./types";

export const BallButton = styled.button<BallButtonProps>`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 1px solid #cdcdcd;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#cdcdcd" : "transparent"};
  transition: all ease 0.2s;

  &:hover {
    background-color: #cdcdcd;
  }
`;
