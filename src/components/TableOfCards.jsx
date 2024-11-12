import "./styles/TableOfCards.css";
import { useState, useEffect } from "react";
import arrayOfImageCardsData from "../assets/arrayOfImageCardsData.js";
import ImageCard from "./ImageCard.jsx";

function TableOfCards() {
  const [isFirstCardSelected, setIsFirstCardSelected] = useState(true);
  const [clickedCard1Id, setClickedCard1Id] = useState(null);
  const [clickedCard2Id, setClickedCard2Id] = useState(null);
  // Don't remove these default values, or else the compareImageCards function will directly run (because these two states below would have the same values)
  const [clickedCard1MatchId, setClickedCard1MatchId] = useState("MatchId 1");
  const [clickedCard2MatchId, setClickedCard2MatchId] = useState("MatchId 2");

  // Run compareImageCards() each time a card has been clicked
  useEffect(() => {
    compareImageCards();
  }, [isFirstCardSelected]); // Dependencies on both card IDs

  function compareImageCards() {
    // Execute if the cards' matchIds (clickedCard1MatchId and clickedCard2MatchId) are the same
    if (clickedCard1MatchId === clickedCard2MatchId) {
      // Increase the points of whoevers turn it was

      // Make the cards disappear
      makeCardDisappear(clickedCard1Id);
      makeCardDisappear(clickedCard2Id);

      resetCardsIdAndMatchId();

      // Execute if the cards have non-null IDs and their matchIds aren't the same
    } else if (
      clickedCard1MatchId !== clickedCard2MatchId &&
      clickedCard1Id &&
      clickedCard2Id
    ) {
      resetCardsIdAndMatchId();

      // Flip back the cards when the cards' matchIds (clickedCard1MatchId and clickedCard2MatchId) aren't the same
      flipCardBack(clickedCard1Id);
      flipCardBack(clickedCard2Id);
    }
  }

  function storeTheIdOfClickedCards(event) {
    // Gets the id of the clicked card
    const clickedCardId = arrayOfImageCardsData[event.target.id - 1].id;

    // Gets the matchId of the clicked card
    const clickedCardMatchId =
      arrayOfImageCardsData[event.target.id - 1].matchId;

    // Determine if this is the turn to select the first card. If true, store the ID of the clicked card as the first selected card; otherwise, store it as the second selected card.
    if (isFirstCardSelected) {
      setClickedCard1MatchId(clickedCardMatchId);
      setClickedCard1Id(clickedCardId);
    } else {
      setClickedCard2MatchId(clickedCardMatchId);
      setClickedCard2Id(clickedCardId);
    }

    flipCard(clickedCardId); // Initiate the card flip to reveal the back image whenever a card is clicked

    setIsFirstCardSelected(!isFirstCardSelected); // Toggle the turn for next card
  }

  // Flip the card to show its back image
  function flipCard(id) {
    const cardToFlip = document.getElementById(id);
    cardToFlip.style.transform = "rotateY(180deg)";
  }

  // Flip the card to hide its back image
  function flipCardBack(id) {
    // Wait 1.5 second before making card flip back
    setTimeout(() => {
      const cardToFlip = document.getElementById(id);
      cardToFlip.style.transform = "rotateY(0deg)";
    }, 1500);
  }

  // Make the card disappear
  function makeCardDisappear(id) {
    // Wait 1 second before making card disappear
    setTimeout(() => {
      const cardToDisappear = document.getElementById(id);
      cardToDisappear.style.animation = "disappearSmoothly 1.25s forwards";
    }, 1000);
  }

  // Reset the id and matchId of clickedCard1 and clickedCard2
  function resetCardsIdAndMatchId() {
    setClickedCard1MatchId("MatchId 1");
    setClickedCard2MatchId("MatchId 2");
    setClickedCard1Id(null);
    setClickedCard2Id(null);
  }

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
            onClick={storeTheIdOfClickedCards}
          />
        ))}
      </div>
    </div>
  );
}

export default TableOfCards;
