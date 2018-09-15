'use strict';

//Define favorite JRPG games
var jrpgs = ['CHRONO TRIGGER', 'FINAL FANTASY 6', 'FINAL FANTASY 7', 'SECRET OF MANA'];

//Get username and welcome to site
var userName = prompt('Welcome to my site, what is your name?');

alert('Welcome to my site ' + userName + '!');
console.log('The user is ' + userName);

//Variable for tracking correct answers
var answersCorrect = 0;

//Ask if Jared likes to read
var reading = prompt('Does Jared like to read?');
var readingUpper = reading.toUpperCase();
if (readingUpper === 'YES' || readingUpper === 'Y'){
  alert('That is correct.');
}else if (readingUpper === 'NO' || readingUpper === 'N'){
  alert('Actually Jared loves reading!');
}else{
  alert('I expected the answers yes or no.');
}

console.log('User answered ' + reading);

if (readingUpper === 'YES' || readingUpper === 'Y'){
  answersCorrect++;
}


//ask if Jared likes to camp
var camping = prompt('Does Jared like camping?');
var campingUpper = camping.toUpperCase();
if (campingUpper === 'YES' || campingUpper === 'Y'){
  alert('Absolutely! Jared loves camping.');
}else if (campingUpper === 'NO' || campingUpper === 'N'){
  alert('Jared actually loves sleeping under the stars.');
}else{
  alert('I expected the answers yes or no.');
}
console.log('They answered ' + camping + ' for camping');

if (campingUpper === 'YES' || campingUpper === 'Y'){
  answersCorrect++;
}

//Ask if Jared is a Pro gamer
var job = prompt('Is Jared a professional gamer?');
var jobUpper = job.toUpperCase();
if (jobUpper === 'YES' || jobUpper === 'Y'){
  alert('While Jared used to be highly ranked in R6 ladders, he is not a pro.');
}else if (jobUpper === 'NO' || jobUpper === 'N'){
  alert('Correct, he is a Network Engineer.');
}else{
  alert('I expected the answers yes or no.');
}

console.log('They answered ' + job + ' for if I am a pro gamer.');
if (jobUpper === 'NO' || jobUpper === 'N'){
  answersCorrect++;
}

//Ask if Jared can code
var code = prompt('Can Jared code?');
var codeUpper = code.toUpperCase();
if (codeUpper === 'YES' || codeUpper === 'Y'){
  alert('That is an optimistic response!');
}else if (codeUpper ==='NO' || codeUpper === 'N'){
  alert('I guess we will find out in a few months!');
}else{
  alert('What kind of response is that? Yes or No please.');
}
console.log('Do they think I can code? ' + code);

if (codeUpper === 'YES' || codeUpper === 'Y'){
  answersCorrect++;
}

//Ask if they know about IDDQD
var iddqd = prompt('What game is the code "IDDQD" from?');
var iddqdUpper = iddqd.toUpperCase();
if (iddqdUpper === 'DOOM' || iddqdUpper === 'DOOM!'){
  alert('Oh yeah! Watch out for those Cyber Demons!');
}else{
  alert('You must be too young for that question!');
}
console.log('They answered ' + iddqd);

if (iddqdUpper === 'DOOM' || iddqdUpper === 'DOOM!'){
  answersCorrect++;
}

//Nested for if loop for guessing how many countries I've been to
var n = 3;
for (n = 3; n >= 0; n--) {
  var countryGuess = prompt('Guess how many countries Jared has been to!');
  if (countryGuess === '9' || countryGuess === 'Nine'){
    alert('You got it! 9!');
    answersCorrect++;
    break;
  }else if (countryGuess > 9){
    alert('Nope, your answer was too high! try again! You have ' + n + ' attemps left');
  }else if (countryGuess < 9){
    alert('Nope, too low! You have ' + n + ' attemps left.');
  }
}

alert('Ok last question!');

console.log('Their last accepted answer was ' + countryGuess);

//Nested for if loop for guessing favorite game
var i = 5;
for (i = 5; i >= 0; i--) {
  var gameGuess = prompt('Can you guess one of my favorite JRPGs?');
  var gameGuessUpper = gameGuess.toUpperCase();
  if (gameGuessUpper === jrpgs[0] || gameGuessUpper === jrpgs[1] || gameGuessUpper === jrpgs[2] || gameGuessUpper === jrpgs[3]){
    alert('That is correct, Jared spent many hours playing ' + gameGuess + '!');
    answersCorrect++;
    break;
  }else{
    alert('That game is great but not one of my favorites! You have ' + i + ' guesses remaining.');
  }
}
console.log('The last accepted answer was ' + gameGuess);

//How the user did
if (answersCorrect >= 5){
  alert('You got ' + answersCorrect + ' out of 7 answers right! Great job!');
}else{
  alert('You got ' + answersCorrect + '. Please try again!');
}

