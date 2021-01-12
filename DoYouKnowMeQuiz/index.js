// Game called "How well do you know me?"
const readlineSync = require('readline-sync');
const chalk = require('chalk');
//Calculating age based on current date so that this program is always legit and works correctly
const d = new Date();
var presentDate = d.getDate();
var presentMonth = d.getMonth();
var presentYear = d.getFullYear();
var yearDiff = presentYear - 1998;
var monthDiff= presentMonth - 02;
var dateDiff = presentDate - 25;

var currentAge = 0;

if(monthDiff > 0)
  currentAge = yearDiff;
else if(monthDiff === 0 && dateDiff >=0)
  currentAge = yearDiff;
else
  currentAge = yearDiff-1;

//Age calculation complete

//To keep the count of the correct answers
var score=0;

//Buildiung Questionnaire
var questionnaire = [
  {
    question: "What is my full name?\nAns: ",
    answer: "Divyansh Shukla",
  },
  {
    question: "What is my age?\nAns: ",
    answer: currentAge,
  },
  {
    question: "What brand is my dream car?\nAns: ",
    answer: "Lamborghini",
  },
  {
    question: "What do I like more in between coffee/tea?\nAns: ",
    answer: "Coffee",
  },
  {
    question: "What Indian indie band is my all time favourite?\nAns: ",
    answer: "The Local Train",
  },
  {
    question: "What is my favourite Bollywood movie? (Hint: Check spelling on Google)\nAns: ",
    answer: "Yeh Jawaani Hai Deewani",
  },
  {
    question: "Who is my favourite coding teacher?\nAns: ",
    answer: "Tanay Pratap",
  },
  {
    question: "Am I a Hodophile?Yes/No (You can Google the meaning xD)\nAns: ",
    answer: "Yes", 
  },
  {
    question: "Do I love anime, or find anime as a thing that kids watch? (Love/For Kids)\nAns: ",
    answer: "Love",
  },
  {
    question: "Do I like my coffee hot/cold?\nAns: ",
    answer: "cold",
  },
];

//Questionnaire complete

//Function to process Question and Answers and update Score
function doYouKnowMe(question, answer){
  var userAnswer = readlineSync.question(question);
  if(typeof answer != "number")
  {
    if(userAnswer.toUpperCase() === answer.toUpperCase())
      score++;
  }
  else
  {
    if(userAnswer == answer)
      score++;
  }
  console.log("Score", score);
}

for(var i=0;i<questionnaire.length;i++)
{
  doYouKnowMe(questionnaire[i].question, questionnaire[i].answer);
}

console.log("Your total score is: ", chalk.red.underline.bold.bgWhite(score));