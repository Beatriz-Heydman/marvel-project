//Styles
import { StyledCard } from "./styles";

//Types
import { CardProps } from "./types";

export function CardHq({ hqName, hqUrl, onClick }: CardProps) {
  const isDefaultImage = hqUrl?.includes("image_not_available");

  return (
    <StyledCard
      title={hqName}
      urlImage={
        isDefaultImage ? "/images/marvel-default-background.jpg" : hqUrl
      }
    >
      <span className="hq_name">{hqName}</span>
      <button className="button_card" onClick={onClick}>
        Ver Personagens
      </button>
    </StyledCard>
  );
}
