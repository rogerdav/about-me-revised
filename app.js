'use strict';
// construct a function to ask all of the questions//
var user = prompt('What is your name');
var firstQuestions = ['Was Roger born in America?','Is Roger married?','Does Roger have  more than one child?','Is Roger making a major life change?','Does Roger Like coding?'];
console.log(user);
var correctAnswers = ['n','y','n','y','y'];


// function askquestions will take an array of questions and return an array of answers.//
function askquestions(questionArray) {
  var answerArray = [];
  for (var i = 0; i < questionArray.length; i++) {
    var answer = prompt(questionArray[i]);
    var answerfirstletter = answer.charAt(0);
    console.log(answerfirstletter);
    answerArray.push(answerfirstletter.toLowerCase());
  }
  return answerArray;
}
//this function compareanswers will take two arrays and compare there contents
//it will alert the user as to how many correct answers they got
function compareAnswers(answerArray,correctAnswers) {
  var numCorrect = 0;
  for (var j = 0; j < answerArray.length; j++) {
    //console.log[j];
    //console.log(answerArray[j]);
    //console.log(correctAnswers[j]);
    if (answerArray[j] === correctAnswers[j]) {
      console.log('Correct');
      numCorrect = numCorrect + 1;
    }
  }
  return numCorrect;
}
var firstAnswers = askquestions(firstQuestions);
//alert(firstAnswers);
// compares the user answers with correct answers
var userCorrect = compareAnswers(firstAnswers,correctAnswers);
alert('Hey ' + user + ' you got ' + userCorrect + ' answers correct.');
// this section is for the guessing game//
var guesscounter = 0;
var userguess;
var maxguesses = 4;

while (userguess !== 7 && guesscounter < maxguesses) {
  userguess = parseInt(prompt('How many countries have I visited? you have ' + (maxguesses - guesscounter) + ' guesses left.'));

  if (userguess < 7) {
    alert('Nope too low.');
    guesscounter++;
  } else if (userguess > 7) {
    alert('Naw too high');
    guesscounter++;
  } else if (isNaN(userguess) || userguess === null) {
    alert('Please enter a number');
    guesscounter++;
  }
}
console.log('guess counter', guesscounter);
// this is to guess one correct answer out of an array of posssible correct answers
var flag1 = false;
var citieslived = ['seattle','johannesburg','durban','port elizabeth','london'];
var uguesscity;
var maxcityguess = 6;
var guessnum = 0;
function checkArray(answer, arrayName) {
  for( var j = 0 ; j < arrayName.length ; j++) {
    if(arrayName[j] === answer.toLowerCase()) {
      flag1 = true;
    }
  }
}
while (!flag1 && guessnum < 6) {
  uguesscity = prompt('Guess a city i have lived, you have ' + (maxcityguess - guessnum) + ' Turns left');
  guessnum++;
  checkArray(uguesscity, citieslived);
  if (!flag1) {
    alert('sorry');
  }else{
    alert('Correct');
  }
}
