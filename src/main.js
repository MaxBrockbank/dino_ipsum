import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/css/styles.css';
import DinoIpsum from './js/dinoApiCall.js';
import DinoGame from './js/dinoGameObject.js';

$(document).ready(() => {
  const mysteryDinosaur = DinoIpsum.getMyDino();
  function youLose(guesses) {
    if (guesses === 0) {
      alert('YOU LOSE, YOU GET NOTHING');
    }
  }
  mysteryDinosaur.then(function(response){
    let body = JSON.parse(response);
    let game = new DinoGame(body[0][0]);
    let dashes = game.setUp();
    $('#mystery-dino').text(dashes);
    $('#guesses-left').text(game.guesses);
    $('#game-board').submit(function(event) {
      let letter = $('#letter-guess').val();
      $('#letter-guess').val('');
      game.checkAnswer(letter, dashes);
      $('#guesses-left').text(game.guesses) 
      youLose(game.guesses);
      event.preventDefault();     
    });
  }, function(error){
    console.log(`You suck: ${error}`);
  });
});