'use strict';
// construct a function to ask all of the questions//

var firstQuestions = ['Was Roger born in America?','Is Roger married?','Does Roger have  more than one child?','Is Roger making a major life change?','Does Roger Like coding?'];


function askquestions(questionArray) {
  answerArray = [];
  for (var i = 0; i < questionArray.length; i++) {
    var answer = prompt(questionArray[i]);
    answerArray.push(answer);
  }
  return answerArray;
}

askquestions(firstQuestions);
