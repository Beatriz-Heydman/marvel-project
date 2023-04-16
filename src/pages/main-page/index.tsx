//Libs
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";

//Components
import { BallButton } from "../../components/ball-button";
import { Flex } from "../../components/Flex";
import { Header } from "../../components/header";

//Styles
import { MainPageBackground, MainPageContainer } from "./styles";

//Const
import { infosMainPage } from "./constants";

export function MainPage() {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  return (
    <MainPageBackground
      backgroundImage={infosMainPage[currentInfoIndex].background_image_url}
    >
      <MainPageContainer>
        <Header isMainPage />
        <Flex
          gap="3rem"
          justifyContent="center"
          alignItems="center"
          style={{ width: "50%" }}
        >
          <Flex justifyContent="flex-start" style={{ maxWidth: "500px" }}>
            <h1>{infosMainPage[currentInfoIndex].title}</h1>
            <p className="main_page_description">
              {infosMainPage[currentInfoIndex].description}
            </p>
          </Flex>
          <img
            className="hero_image"
            src={infosMainPage[currentInfoIndex].url_image}
            alt="Logo da Marvel"
          />
        </Flex>
        <Flex
          className="buttons_container"
          gap="0.75rem"
          alignItems="center"
          justifyContent="center"
        >
          <AiOutlineHome
            className={"home_icon"}
            onClick={() => {
              setCurrentInfoIndex(0);
            }}
          />

          <BallButton
            isSelected={currentInfoIndex === 1}
            onClick={() => {
              setCurrentInfoIndex(1);
            }}
          />
          <BallButton
            isSelected={currentInfoIndex === 2}
            onClick={() => {
              setCurrentInfoIndex(2);
            }}
          />
          <BallButton
            isSelected={currentInfoIndex === 3}
            onClick={() => {
              setCurrentInfoIndex(3);
            }}
          />
        </Flex>
      </MainPageContainer>
    </MainPageBackground>
  );
}
