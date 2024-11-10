import "./styles/TableOfCards.css";
import ImageCard from "./ImageCard";
import clockImage from "../assets/card-images/clockImage.webp";
import dumbbellImage from "../assets/card-images/dumbbellImage.webp";
import fishImage from "../assets/card-images/fishImage.webp";
import flowerImage from "../assets/card-images/flowerImage.webp";
import footballImage from "../assets/card-images/footballImage.webp";
import ghostImage from "../assets/card-images/ghostImage.webp";
import ladybugImage from "../assets/card-images/ladybugImage.webp";
import melonImage from "../assets/card-images/melonImage.webp";
import ratImage from "../assets/card-images/ratImage.webp";
import sunImage from "../assets/card-images/sunImage.webp";
import swordImage from "../assets/card-images/swordImage.webp";

function TableOfCards() {
  const arrayOfImageCardsData = [
    {
      id: 1,
      cardImageSrc: clockImage,
      cardImageAlt: "Clock-1",
      ImageCardBack_BackgroundColor: "#fa8072",
      /* cardImagePairId: "Clock-1", */
    },
    {
      id: 2,
      cardImageSrc: dumbbellImage,
      cardImageAlt: "Dumbbell-1",
      ImageCardBack_BackgroundColor: "#e14adc",
    },
    {
      id: 3,
      cardImageSrc: fishImage,
      cardImageAlt: "Fish-1",
      ImageCardBack_BackgroundColor: "#40e0d0",
    },
    {
      id: 4,
      cardImageSrc: flowerImage,
      cardImageAlt: "Flower-1",
      ImageCardBack_BackgroundColor: "#4169e1",
    },
    {
      id: 5,
      cardImageSrc: footballImage,
      cardImageAlt: "Football-1",
      ImageCardBack_BackgroundColor: "#38d038",
    },
    {
      id: 6,
      cardImageSrc: ghostImage,
      cardImageAlt: "Ghost-1",
      ImageCardBack_BackgroundColor: "#8b008b",
    },
    {
      id: 7,
      cardImageSrc: ladybugImage,
      cardImageAlt: "Ladybug-1",
      ImageCardBack_BackgroundColor: "#ffff00",
    },
    {
      id: 8,
      cardImageSrc: melonImage,
      cardImageAlt: "Melon-1",
      ImageCardBack_BackgroundColor: "#3e3e7b",
    },
    {
      id: 9,
      cardImageSrc: ratImage,
      cardImageAlt: "Rat-1",
      ImageCardBack_BackgroundColor: "#9f1237",
    },
    {
      id: 10,
      cardImageSrc: sunImage,
      cardImageAlt: "Sun-1",
      ImageCardBack_BackgroundColor: "#007FFF",
    },
    {
      id: 11,
      cardImageSrc: swordImage,
      cardImageAlt: "Sword-1",
      ImageCardBack_BackgroundColor: "#92430a",
    },
    {
      id: 12,
      cardImageSrc: clockImage,
      cardImageAlt: "Clock-2",
      ImageCardBack_BackgroundColor: "#fa8072",
    },
    {
      id: 13,
      cardImageSrc: dumbbellImage,
      cardImageAlt: "Dumbbell-2",
      ImageCardBack_BackgroundColor: "#e14adc",
    },
    {
      id: 14,
      cardImageSrc: fishImage,
      cardImageAlt: "Fish-2",
      ImageCardBack_BackgroundColor: "#40e0d0",
    },
    {
      id: 15,
      cardImageSrc: flowerImage,
      cardImageAlt: "Flower-2",
      ImageCardBack_BackgroundColor: "#4169e1",
    },
    {
      id: 16,
      cardImageSrc: footballImage,
      cardImageAlt: "Football-2",
      ImageCardBack_BackgroundColor: "#38d038",
    },
    {
      id: 17,
      cardImageSrc: ghostImage,
      cardImageAlt: "Ghost-2",
      ImageCardBack_BackgroundColor: "#8b008b",
    },
    {
      id: 18,
      cardImageSrc: ladybugImage,
      cardImageAlt: "Ladybug-2",
      ImageCardBack_BackgroundColor: "#ffff00",
    },
    {
      id: 19,
      cardImageSrc: melonImage,
      cardImageAlt: "Melon-2",
      ImageCardBack_BackgroundColor: "#3e3e7b",
    },
    {
      id: 20,
      cardImageSrc: ratImage,
      cardImageAlt: "Rat-2",
      ImageCardBack_BackgroundColor: "#9f1237",
    },
    {
      id: 21,
      cardImageSrc: sunImage,
      cardImageAlt: "Sun-2",
      ImageCardBack_BackgroundColor: "#007FFF",
    },
    {
      id: 22,
      cardImageSrc: swordImage,
      cardImageAlt: "Sword-2",
      ImageCardBack_BackgroundColor: "#92430a",
    },
  ];

  return (
    <div className="TableOfCards">
      <div className="TableOfCards__ImageCards-container">
        {arrayOfImageCardsData.map((cardObjectData) => (
          <ImageCard
            key={cardObjectData.id}
            id={cardObjectData.id}
            cardImageSrc={cardObjectData.cardImageSrc}
            cardImageAlt={cardObjectData.cardImageAlt}
            ImageCardBack_BackgroundColor={
              cardObjectData.ImageCardBack_BackgroundColor
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TableOfCards;
