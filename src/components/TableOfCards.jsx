import "./styles/TableOfCards.css";
import { useState, useEffect, useContext } from "react";
import arrayOfImageCardsData from "../assets/arrayOfImageCardsData.js";
import ImageCard from "./ImageCard.jsx";
import ScoreAndTurnContext from "../contexts/ScoreAndTurnContext.jsx";
import GameEndedBackground from "./GameEndedBackground.jsx";
import { shuffleArray } from "../utils.js";
import flipCardBackSound from "../assets/audioFiles/flipCardBackSound.mp3";
import flipCardSound from "../assets/audioFiles/flipCardSound.mp3";
import earnPointSound from "../assets/audioFiles/earnPointSound.mp3";
import { playSound } from "../utils.js";

function TableOfCards() {
  const {
    bluePlayerTurn,
    setBluePlayerTurn,
    bluePlayerScore,
    redPlayerScore,
    setBluePlayerScore,
    setRedPlayerScore,
  } = useContext(ScoreAndTurnContext);

  // State to know if the first card has been selected. This state is important for the second card logic.
  const [isFirstCardSelected, setIsFirstCardSelected] = useState(true);
  const [clickedCard1Id, setClickedCard1Id] = useState();
  const [clickedCard2Id, setClickedCard2Id] = useState();
  // Don't remove these default values, or else the compareImageCards function will directly run (because these two states below would have the same values)
  const [clickedCard1MatchId, setClickedCard1MatchId] = useState("MatchId 1");
  const [clickedCard2MatchId, setClickedCard2MatchId] = useState("MatchId 2");
  const [gameEnded, setGameEnded] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]); // Store the shuffled cards from arrayOfImageCardsData

  // Shuffles the arrayOfImageCardsData each time the game ends
  useEffect(() => {
    setShuffledCards(shuffleArray([...arrayOfImageCardsData]));
  }, [gameEnded]);

  // Run compareImageCards() each time a card has been clicked
  useEffect(() => {
    compareImageCards();
  }, [isFirstCardSelected]);

  // Run whenever bluePlayerScore or redPlayerScore changes
  useEffect(() => {
    verifyIfGameEnded();
  }, [bluePlayerScore, redPlayerScore]);

  // Function to compare whether the clicked cards' images match or not. Based on this result, various other things will occur (cards disappears, cards flip back, reset card Ids, give point to player, etc.)
  function compareImageCards() {
    // Execute if the cards' matchIds (clickedCard1MatchId and clickedCard2MatchId) are the same
    if (clickedCard1MatchId === clickedCard2MatchId) {
      // Increase the points of whoevers turn it was
      if (bluePlayerTurn) {
        setBluePlayerScore((prevBluePlayerScore) => prevBluePlayerScore + 1);
      } else {
        setRedPlayerScore((prevRedPlayerScore) => prevRedPlayerScore + 1);
      }

      // Make the cards disappear
      makeCardDisappear(clickedCard1Id);
      makeCardDisappear(clickedCard2Id);

      playSound(earnPointSound);

      resetCardsIdAndMatchId();

      // Execute if the cards have non-null IDs and their matchIds aren't the same
    } else if (
      clickedCard1MatchId !== clickedCard2MatchId &&
      clickedCard1Id &&
      clickedCard2Id
    ) {
      resetCardsIdAndMatchId();

      // Flip back the cards
      flipCardBack(clickedCard1Id);
      flipCardBack(clickedCard2Id);

      // Timeout function to wait for the cards to flip back
      setTimeout(() => {
        // Change the player's turn
        setBluePlayerTurn((prevBluePlayerTurn) => !prevBluePlayerTurn);
      }, 1500);
    }
  }

  function verifyIfGameEnded() {
    // If all cards have been clicked
    if (bluePlayerScore + redPlayerScore === shuffledCards.length / 2) {
      // Reset blue player score and red player score to 0
      setBluePlayerScore(0);
      setRedPlayerScore(0);

      // Set gameEnded to true (display <GameEndedBackground /> component)
      setGameEnded((prevValue) => !prevValue);

      // Wait 3 seconds before setting gameEnded state to false (basically, waits 3 seconds before removing the <GameEndedBackground /> component and rerendering the cards for next round once the component appears)
      setTimeout(() => {
        setGameEnded(false);
      }, 3000);
    }
  }

  // This function stores the matchId of the clicked cards in their respective state To be able to use the compareImageCards() function.
  function storeTheIdOfClickedCards(event) {
    // Gets the id of the clicked card and converts it to a number, because the find method just under uses strict equality in the find function
    const clickedCardId = parseInt(event.currentTarget.id, 10);

    // Gets the data object of the clickedCard
    const cardData = shuffledCards.find((card) => card.id === clickedCardId);

    // Gets the matchId of the clicked card
    const clickedCardMatchId = cardData.matchId;

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
    // Rotate, translate in 3D space, scale up slightly, and intensify the shadow
    cardToFlip.style.transform = "rotateY(180deg) translateZ(50px) scale(1.1)";
    cardToFlip.style.boxShadow = "0 0.5vw 1vw rgba(255, 255, 255, 0.7)"; // More pronounced white shadow when flipped

    // Play sound each time a card gets clicked
    playSound(flipCardSound);
  }

  // Flip the card to hide its back image
  function flipCardBack(id) {
    // Wait 1.5 second before making card flip back
    setTimeout(() => {
      const cardToFlip = document.getElementById(id);

      // Rotate back to initial position, reset translation, scale, and shadow
      cardToFlip.style.transform = "rotateY(0deg) translateZ(0px) scale(1)";
      cardToFlip.style.boxShadow = "0 0.2vw 0.4vw rgba(255, 255, 255, 0.4)"; // Reset to default subtle responsive shadow

      playSound(flipCardBackSound);
    }, 1500);
  }

  // Make the card disappear
  function makeCardDisappear(id) {
    // Wait 1 second before making card disappear
    setTimeout(() => {
      const cardToDisappear = document.getElementById(id);
      cardToDisappear.style.animation = "disappearCardsSmoothly 1.25s forwards";
    }, 1000);
  }

  // Reset the id and matchId of clickedCard1 and clickedCard2
  function resetCardsIdAndMatchId() {
    setClickedCard1MatchId("MatchId 1");
    setClickedCard2MatchId("MatchId 2");
    setClickedCard1Id(null);
    setClickedCard2Id(null);
  }

  console.log(gameEnded);

  return (
    <>
      {/* Display the GameEndedBackground if the game has ended */}
      {gameEnded ? <GameEndedBackground /> : null}

      <div className="TableOfCards">
        {gameEnded ? null : (
          <div className="TableOfCards__ImageCards-container">
            {/* If the game hasnt ended, display cards. If the game has ended, dont display them. This conditional is placed to rerender the cards once the game has ended */}
            {shuffledCards.map((cardObjectData) => (
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
        )}
      </div>
    </>
  );
}

export default TableOfCards;
