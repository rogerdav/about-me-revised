'use strict';
// construct a function to ask all of the questions//
var user = prompt('what is your name');
var firstQuestions = ['Was Roger born in America?','Is Roger married?','Does Roger have  more than one child?','Is Roger making a major life change?','Does Roger Like coding?'];
console.log(user);
var correctAnswers = ['n','y','n','y','y'];


// function askquestions will take an array of questions and return an array of answers.//
function askquestions(questionArray) {
  var answerArray = [];
  for (var i = 0; i < questionArray.length; i++) {
    var answer = prompt(questionArray[i]);
    console.log(answer);
    answerArray.push(answer);
  }
  return answerArray;
}

//this function compare answers will take two arrays and compare there contents
//it will alert the user as to how many correct answers they got

function compareAnswers(answerArray,correctAnswers) {
  var numCorrect = 0;
  for (var j = 0; j < answerArray.length; j++) {
    console.log[j];
    console.log(answerArray[j]);
    console.log(correctAnswers[j]);
    if (answerArray[j] == correctAnswers[j]) {
      console.log('correct');
      numCorrect = numCorrect + 1;
    }
  }
  return numCorrect;
}



var firstAnswers = askquestions(firstQuestions);
alert(firstAnswers);
var userCorrect = compareAnswers(firstAnswers,correctAnswers);
alert('Hey ' + user + ' you got ' + userCorrect + ' answers correct.');
