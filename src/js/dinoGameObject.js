export default class DinoGame {
  constructor(dinosaur) {
    this.dinosaur = dinosaur;
    this.previousGuesses = [];
    this.guesses = 6;
  }

  setUp() {
    let emptyAnswerArray = [];
    for(let i=0; i<this.dinosaur.length; i++) {
      emptyAnswerArray.push('-');
    };
    let displayEmptyAnswerArray = emptyAnswerArray.join(''); // --------------
    console.log(displayEmptyAnswerArray.length);
    console.log(this.dinosaur.length);
    return displayEmptyAnswerArray;
  }

  checkAnswer(guess, displayedLetters) {
    for(let i=0; i<this.dinosaur.length; i++) {
      if (this.dinosaur[i] == guess ) {
        displayedLetters = displayedLetters[i].replace('-', guess);
      } else {
        this.previousGuesses.push(guess);
        this.guesses--;
      }
    }
  }
  


};