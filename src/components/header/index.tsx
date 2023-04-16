//Libs
import { NavLink } from "react-router-dom";

//Components
import { Flex } from "../Flex";

//Styles
import { StyledHeader } from "./styles";

//Types
import { HeaderProps } from "./types";

export function Header({ isMainPage }: HeaderProps) {
  return (
    <StyledHeader>
      <Flex style={{ height: "100%" }}>
        <img src="/images/logo-marvel.png" alt="Logo da Marvel" />
      </Flex>
      <Flex direction="row" gap="2rem">
        {isMainPage && (
          <NavLink to="/comics_hqs" className="link">
            Ver HQ's
          </NavLink>
        )}
      </Flex>
    </StyledHeader>
  );
}
