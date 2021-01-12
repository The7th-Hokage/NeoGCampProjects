// Game called "How well do you know me?"
const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log("Welcome to the", chalk.underline.red("DoYouKnowMeQuiz"), ".\nIt determines how much do you really know me.\n");

var userName = readlineSync.question("Ques: Enter your(participant's) name?\nAns: ");

console.log("\nWelcome",chalk.yellow(userName),"happy to see you!, the questions now follow:\n");

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
    question: chalk.red("Ques: ") + "What is my full name?\n" + chalk.green("Ans: "),
    answer: "Divyansh Shukla",
  },
  {
    question: chalk.red("Ques: ") + "What is my age?\n" + chalk.green("Ans: "),
    answer: currentAge,
  },
  {
    question: chalk.red("Ques: ") + "What brand is my dream car?\n" + chalk.green("Ans: "),
    answer: "Lamborghini",
  },
  {
    question: chalk.red("Ques: ") + "What do I like more in between coffee/tea?\n" + chalk.green("Ans: "),
    answer: "Coffee",
  },
  {
    question: chalk.red("Ques: ") + "What Indian indie band is my all time favourite?\n" + chalk.green("Ans: "),
    answer: "The Local Train",
  },
  {
    question: chalk.red("Ques: ") + "What is my favourite Bollywood movie? (Hint: Check spelling on Google)\n" + chalk.green("Ans: "),
    answer: "Yeh Jawaani Hai Deewani",
  },
  {
    question: chalk.red("Ques: ") + "Who is my favourite coding teacher?\n" + chalk.green("Ans: "),
    answer: "Tanay Pratap",
  },
  {
    question: chalk.red("Ques: ") + "Am I a Hodophile?Yes/No (You can Google the meaning xD)\n" + chalk.green("Ans: "),
    answer: "Yes", 
  },
  {
    question: chalk.red("Ques: ") + "Do I love anime, or find anime as a thing that kids watch? (Love/For Kids)\n" + chalk.green("Ans: "),
    answer: "Love",
  },
  {
    question: chalk.red("Ques: ") + "Do I like my coffee hot/cold?\n" + chalk.green("Ans: "),
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