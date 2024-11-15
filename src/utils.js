// Randomize (shuffle) the order of elements in an array by passing the array as shuffleArray's argument
export function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Create an audio element and play it by passing the mp3 file as playSound's argument
export function playSound(sound) {
  const audio = new Audio(sound);
  audio.play();
}
