//Libs
import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  display: flex;
  color: white;
  background: black;
  border: 1px solid #4e4e4e;
  max-width: 458px;
  max-height: 128px;
  width: 100%;
  border-radius: 0.5rem;

  .character_description {
    font-size: 0.75rem;
  }

  .container_info {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 1rem;
  }

  .character_image {
    height: 128px;
    width: 128px;
    object-fit: cover;
  }
`;
