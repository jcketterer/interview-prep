function guessingGame() {
  const secretNum = Math.floor(Math.random() * 100);
  let gameOver = false;
  let count = 0;

  return function guesses(number) {
    if (gameOver) return 'The game is over, you already won!';
    count++;
    if (number === secretNum) {
      gameOver = true;
      const guess = count === 1 ? 'guess' : 'guesses';
      return `You win! You found ${number} in ${count} ${guess}.`;
    }
    if (number < secretNum) return `${number} is too low!`;
    if (number > secretNum) return `${number} is too high!`;
  };
}

let game = guessingGame();

module.exports = { guessingGame };
