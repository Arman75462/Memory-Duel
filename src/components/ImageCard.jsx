import "./styles/ImageCard.css";

function ImageCard({
  id,
  cardImageSrc,
  cardImageAlt,
  ImageCardBack_BackgroundColor,
}) {
  function flipCard() {
    const cardToFlip = document.getElementById(id);
    cardToFlip.style.transform = "rotateY(180deg)";

    // Wait before flipping back the cardToFlip
    setTimeout(() => {
      cardToFlip.style.transform = "rotateY(0deg)";
    }, 1500);
  }

  return (
    <div className="ImageCard" id={id} onClick={flipCard}>
      <div className="ImageCard__front"></div>
      <div
        className="ImageCard__back"
        style={{ backgroundColor: ImageCardBack_BackgroundColor }}
      >
        <img
          className={`ImageCard__back-image`}
          src={cardImageSrc}
          alt={cardImageAlt}
        />
      </div>
    </div>
  );
}

export default ImageCard;
