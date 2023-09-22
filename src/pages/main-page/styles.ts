//Libs
import styled from "styled-components";

//Types
import { MainPageBackgroundProps } from "./types";

export const MainPageBackground = styled.div<MainPageBackgroundProps>`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  transition: all ease 0.2s;
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const MainPageContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  max-width: 100%;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 2rem;

  .main_content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    gap: 3rem;

    @media (max-width: 750px) {
      flex-direction: column;
    }
  }

  .hero_image {
    width: 500px;
    @media (max-width: 1250px) {
      width: 400px;
    }

    @media (max-width: 800px) {
      width: 350px;
    }

    @media (max-width: 700px) {
      top: 50%;
      position: none;
    }
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
    z-index: 9999;
  }

  .home_icon {
    font-size: 24px;
    cursor: pointer;
    background-color: transparent;
  }
`;
