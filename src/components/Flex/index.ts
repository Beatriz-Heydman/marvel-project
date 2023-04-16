//Libs
import styled from "styled-components";

//Types
import { FlexProps } from "./types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  gap: ${({ gap = "0" }) => gap};
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-wrap: ${({ flexWrap = "wrap" }) => flexWrap};
`;
