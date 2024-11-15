# Memory-Duel

## Description

**Memory-Duel** is a player vs player (2-player) duel where players compete to find matching pairs of cards, earning points for correct matches. The game incorporates dynamic visuals, engaging animations, and sound effects to enhance the gaming experience. This README outlines the key features, gameplay mechanics, and technical details of the project.

### Table of Contents

- [Features](#features)
- [How to Play](#how-to-play)
- [Technical Details](#technical-details)

### Features

- **Multiplayer Gameplay**: Two players compete in turns to match pairs of cards.
- **Dynamic Animations**: Cards flip with smooth animations, and matched cards disappear with transitions.
- **Sound Effects**: Audio feedback for card flipping, matches, and resets.
- **Game State Management**: Tracks scores, player turns, and game completion.
- **Replayability**: Shuffles cards at the end of each game for a new challenge.
- **Responsive Design**: Adapted for various screen sizes.

### How to Play

1. **Objective**: Match more pairs of cards than your opponent.
2. **Starting the Game**:
   - The game begins with a shuffled deck of cards displayed face down.
   - The first player selects a card to reveal it, then selects a second card.
3. **Matching Cards**:
   - If the two selected cards match, the player earns a point, and the cards disappear.
   - If the cards do not match, they flip back over, and the turn passes to the other player.
4. **Game End**:
   - The game ends when all pairs are matched.
   - A "Game Over" background displays the winner before resetting for a new round.
5. **Replay**:
   - After the game ends, the cards are reshuffled, and scores reset for a new round.

### Technical Details

#### Core Technologies

- **React**: Used for UI and state management.
- **CSS**: For animations and responsive design.
- **JavaScript**: Implements game logic and interactivity.
