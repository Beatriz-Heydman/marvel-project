//Components
import { Flex } from "../Flex";

//Styles
import { CharacterCardContainer } from "./styles";

//Types
import { CharacterCardProps } from "./types";

export function CharacterCard({
  characterImage,
  characterName,
  description,
}: CharacterCardProps) {
  return (
    <CharacterCardContainer>
      {" "}
      <Flex>
        <img
          src={characterImage}
          alt="Foto do personagem"
          className="character_image"
        />
      </Flex>
      <div className="container_info">
        <span className="character_name">{characterName}</span>
        <span className="character_description">
          {description || "Não há descrição para o personagem"}
        </span>
      </div>
    </CharacterCardContainer>
  );
}
