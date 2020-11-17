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
  }

  checkAnswer(guess) {
    let answerArray = []
    for(let i=0; i<this.dinosaur.length; i++) {
      if (this.dinosaur[i] == guess ) {

      }
    }
  }


};