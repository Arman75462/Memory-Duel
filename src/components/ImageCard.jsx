import "./styles/ImageCard.css";

function ImageCard() {
  const arrayOfImageCardsData = [];

  function flipCardOnClick() {
    const ImageCard = document.querySelector(".ImageCard");
    ImageCard.style.transform = "rotateY(180deg)";

    // Wait before flipping back the ImageCard
    setTimeout(() => {
      ImageCard.style.transform = "rotateY(0deg)";
    }, 1500);
  }

  return (
    <div className="ImageCard" onClick={flipCardOnClick}>
      <div className="ImageCard__front">front</div>
      <div className="ImageCard__back">back</div>
    </div>
  );
}

export default ImageCard;
