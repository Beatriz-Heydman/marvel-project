/* eslint-disable react-hooks/exhaustive-deps */

//Libs
import axios from "axios";
import { useEffect, useState } from "react";
import { PUBLIC_KEY, hash, timestamp } from "../../keys";
import { useParams } from "react-router";

//Components
import { Header } from "../../components/header";
import { CharacterCard } from "../../components/character-card";
import { Flex } from "../../components/Flex";

//Styles
import { ComicsHQsPage, ComicsHQsPageContainer } from "../comics-hq/styles";

//Types
import { Character } from "./types";

//Utils
import { formatThumbnail } from "../../utils/format-thumnail";

export function CharactersHqPage() {
  const { comic_id } = useParams();

  const charactersRoute = `https://gateway.marvel.com/v1/public/comics/${comic_id}/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  const [characters, setCharacters] = useState<Character[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  async function getCharacters() {
    try {
      setIsLoading(true);
      const response = await axios.get(charactersRoute);

      setCharacters(response.data.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <ComicsHQsPage>
      <ComicsHQsPageContainer>
        <Header />
        <Flex gap="1rem" style={{ padding: "2rem", margin: "auto" }}>
          {isLoading ? (
            <span>Carregando...</span>
          ) : characters[0] ? (
            characters.map((character) => (
              <CharacterCard
                key={character.id}
                characterImage={formatThumbnail(character.thumbnail)}
                characterName={character.name}
                description={character.description}
              />
            ))
          ) : (
            <span>Não há personagens para este quadrinho</span>
          )}
        </Flex>
      </ComicsHQsPageContainer>
    </ComicsHQsPage>
  );
}
