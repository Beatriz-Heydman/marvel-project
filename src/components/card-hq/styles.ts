//Libs
import styled from "styled-components";

//Types
import { StyledCardProps } from "./types";

export const StyledCard = styled.div<StyledCardProps>`
  width: 175px;
  height: 285px;
  border-radius: 0.25rem;
  background-image: ${({ urlImage }) => `url(${urlImage})`};
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px -108px 37px rgba(0, 0, 0, 0.88);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  border: 1px solid #adadad;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: 0.625rem;

  &:hover {
    &::before {
      bottom: 50%;
    }
  }

  &::before {
    content: "";
    left: 0;
    bottom: -150%;
    position: absolute;
    width: 50px;
    height: 200%;
    background: #ffffff50;
    transform: rotate(-45deg);
    transition: all ease 0.4s;
    filter: blur(15px);
  }

  .button_card {
    color: #fff;
    border: 1px solid #b6b6b6;
    background: linear-gradient(
      96.76deg,
      rgba(0, 0, 0, 0.79) 17.19%,
      rgba(242, 19, 19, 0.48) 30.99%,
      rgba(137, 2, 2, 0.53) 60.31%,
      rgba(0, 0, 0, 0.44) 83.42%,
      #000000 83.42%,
      #000000 83.42%,
      #000000 83.42%,
      #000000 83.42%
    );
    background-position: -100px;
    border-radius: 2rem;
    padding: 6px 16px 6px 16px;
    width: fit-content;
    cursor: pointer;
    transition: all ease 0.4s;
    font-size: 0.75rem;
    line-height: 0.75rem;

    &:hover {
      background-position: 0px;
    }
  }

  .hq_name {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
