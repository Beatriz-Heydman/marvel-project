//Libs
import styled from "styled-components";

//Types
import { MainPageBackgroundProps } from "./types";

export const MainPageBackground = styled.div<MainPageBackgroundProps>`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  transition: all ease 0.2s;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const MainPageContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 2rem;
  overflow: hidden;

  .hero_image {
    right: 100px;
    position: fixed;
  }

  .main_page_description {
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  .buttons_container {
    background-color: #e0e0e02f;
    padding: 0.5rem 0.75rem;
    width: fit-content;
    height: fit-content;
    border-radius: 2rem;
    margin-inline: auto;
    z-index: 999;
  }

  .home_icon {
    font-size: 24px;
    cursor: pointer;
    background-color: transparent;
  }
`;
