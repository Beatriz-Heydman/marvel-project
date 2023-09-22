/* eslint-disable react-hooks/exhaustive-deps */

//Libs
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

//Components
import { Flex } from "../../components/Flex";
import { CardHq } from "../../components/card-hq";
import { Header } from "../../components/header";

//Styles
import { ComicsHQsPage, ComicsHQsPageContainer } from "./styles";

//Types
import { Hq } from "./types";

//Const
import { URLMarvel } from "./constants";

//Utils
import { formatThumbnail } from "../../utils/format-thumnail";

export function ComicsHQPage() {
  const [hqs, setHqs] = useState<Hq[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSkeleton, setIsLoadingSkeleton] = useState(false);

  const [quantityOfHqs, setQuantityOfHqs] = useState(10);

  async function getHQS() {
    try {
      setIsLoading(true);
      setIsLoadingSkeleton(true);

      const response = await axios.get(URLMarvel, {
        params: { limit: quantityOfHqs },
      });

      setHqs(response.data.data.results);
    } catch (error) {
      console.error("error");
    } finally {
      setIsLoading(false);
      setIsLoadingSkeleton(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingSkeleton(false);
    }, 2000);
    getHQS();
  }, [quantityOfHqs]);

  const navigate = useNavigate();

  return (
    <ComicsHQsPage>
      <ComicsHQsPageContainer>
        <Header />

        <Flex
          className="card_comics_hqs_container"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          {isLoadingSkeleton
            ? hqs.map((hq) => (
                <Skeleton
                  sx={{ bgcolor: "#424242" }}
                  variant="rectangular"
                  animation="wave"
                >
                  <CardHq
                    key={hq.id}
                    hqName={hq.title}
                    hqUrl={formatThumbnail(hq.thumbnail)}
                    onClick={() => {
                      navigate(`/comics_hqs/${hq.id}`);
                    }}
                  />
                </Skeleton>
              ))
            : hqs.map((hq) => (
                <CardHq
                  key={hq.id}
                  hqName={hq.title}
                  hqUrl={formatThumbnail(hq.thumbnail)}
                  onClick={() => {
                    navigate(`/comics_hqs/${hq.id}`);
                  }}
                />
              ))}
        </Flex>

        <button
          disabled={isLoading}
          className="button_load_more"
          onClick={() => {
            setQuantityOfHqs(quantityOfHqs + 10);
          }}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </button>
      </ComicsHQsPageContainer>
    </ComicsHQsPage>
  );
}
