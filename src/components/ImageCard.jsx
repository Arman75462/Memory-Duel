import "./styles/ImageCard.css";

function ImageCard({
  id,
  cardImageSrc,
  cardImageAlt,
  ImageCardBack_BackgroundColor,
  onClick,
}) {
  return (
    <div className="ImageCard" id={id} onClick={onClick}>
      <div className="ImageCard__front" id={id}>
        {/* The 'id' is also assigned to ImageCard__front to ensure that the flipping action is triggered from anywhere on the card, not just the borders. Without passing the id to ImageCard__front, clicking on the center part of the card, which corresponds to ImageCard__front, wouldn't activate the flip. */}
      </div>
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
