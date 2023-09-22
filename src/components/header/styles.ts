//Libs
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #25242477;
  width: 100%;
  min-height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  z-index: 999;

  img {
    width: 150px;

    @media (max-width: 550px) {
      width: 100px;
    }
  }

  .link {
    color: white;
  }
`;
