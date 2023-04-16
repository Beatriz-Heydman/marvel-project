//Libs
import styled from "styled-components";

export const ComicsHQsPage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("/images/background-comicsHQ.jpg");
`;

export const ComicsHQsPageContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: 2rem;
  color: white;

  .button_load_more {
    display: flex;
    align-items: flex-start;
    padding: 0.5rem 2rem;
    gap: 0.65rem;
    transition: all ease 0.2s;
    background: #000000;
    border: 1px solid #797979;
    border-radius: 2rem;
    color: white;
    cursor: pointer;

    &:hover {
      filter: brightness(1.5);
    }
  }

  .card_comics_hqs_container {
    padding: 1rem;
    max-width: 1000px;
    min-height: 610px;
  }
`;
