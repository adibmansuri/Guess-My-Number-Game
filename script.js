'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' Correct Number! ';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').valfffue = 23;
// console.log(document.querySelector('.guess').value);
//jii
const Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no number
  if (!guess) {
    // document.querySelector('.message').textContent = ' No Number! ';
    displaymessage('No Number');
  }
  //Win
  else if (guess === Secretnumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displaymessage('correct Number!');

    document.querySelector('.number').textContent = Secretnumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Refactoring
  else if (guess !== Secretnumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > Secretnumber ? 'Too High!' : 'Too low!';
      displaymessage(guess > Secretnumber ? 'Too High!' : 'Too low!;');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';

  document.querySelector('.number').style.width = '15rem';
});
