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
      alert('YOU LOSE, YOU GET NOTHING')
    }
  }
  mysteryDinosaur.then(function(response){
    let body = JSON.parse(response);
    let game = new DinoGame(body[0][0]);
    let dashes = game.setUp();
    $('#guesses-left').text(game.guesses);
    $('#letter-guess').click(function() {
      let letter = $('#letter').val();
      game.checkAnswer(guess, dashes); 
      youLose(game.guesses);     
    })
  }, function(error){
    console.log(`You suck: ${error}`);
  });
    console.log(body);
  
  console.log(game);
});