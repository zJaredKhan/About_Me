"use strict";

//Get username and welcome to site
var userName = prompt('Welcome to my site, what is your name?');

alert('Welcome to my site ' + userName + '!');
console.log('The user is ' + userName);

//Ask if Jared likes to read
var reading = prompt('Does Jared like to read?');
var readingUpper = reading.toUpperCase();
if (readingUpper === 'YES' || readingUpper === 'Y'){
  alert('That is correct');
}else if (readingUpper === 'NO' || readingUpper === 'N'){
  alert('Actually Jared loves reading!');
}else{
  alert('I expected the answers yes or no');
}
console.log('User answered ' + reading);

//ask if Jared likes to camp
var camping = prompt('Does Jared like camping?');
var campingUpper = camping.toUpperCase();
if (campingUpper === 'YES' || campingUpper === 'Y'){
  alert('Absolutely! Jared loves camping');
}else if (campingUpper === 'NO' || campingUpper === 'N'){
  alert('Jared actually loves sleeping under the stars');
}else{
  alert('I expected the answers yes or no');
}
console.log('They answered ' + camping + ' for camping');

//Ask if Jared is a Pro gamer
var job = prompt('Is Jared a professional gamer?');
var jobUpper = job.toUpperCase();
if (jobUpper === 'YES' || jobUpper === 'Y'){
  alert('While Jared used to be highly ranked in R6 ladders, he is not a pro');
}else if (jobUpper === 'NO' || jobUpper === 'N'){
  alert('Correct, he is a Network Engineer');
}else{
  alert('I expected the answers yes or no');
}
console.log('They answered ' + job + ' for if I am a pro gamer');

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

//Ask if they know about IDDQD
var iddqd = prompt('What game is the code "IDDQD" from?');
var iddqdUpper = iddqd.toUpperCase();
if (iddqdUpper === 'DOOM' || iddqdUpper === 'DOOM!'){
  alert('Oh yeah! Watch out for those Cyber Demons!');
}else{
  alert('You must be too young for that question');
}
