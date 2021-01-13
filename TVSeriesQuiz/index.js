const chalk = require('chalk');
const readlineSync = require('readline-sync');

var userName = readlineSync.question("Enter your name\n");

var choice = readlineSync.question("\nDo you want a anime quiz or a non anime Quiz?(yes(for anime)/no(for non-anime)\n");

var score=0;
var level=1;

var highScores = [
  {
    name: "Tanay Pratap",
    score1: 10,
  },
  {
    name : "Divyansh Shukla",
    score1: 9,
  },
];

function playGame(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase())
    score++;
  if(score>=5 && score <10)
    level=2;
  else if(score==10)
    level=3;
  console.log(chalk.yellow("Score: "),score,"    Level: ",level);
}


if (choice.toUpperCase() === "yes".toUpperCase())
{

  console.log("\nWelcome", chalk.red.underline.bold(userName),"to the anime quiz.\n");

  console.log(chalk.yellowBright.bold("How to Play?\n"),"Ques: Some random question with four options:\na) Option1\nb) Option2\nc) Option3\nd) Option4\nAns: a\nScore: 1\nLevel: 1\n\nThere is a system of levels also in this quiz, as you answer 5 questions correctly, you will advance to next level.\n");

  var questionsAnime = [
    {
      question: chalk.red("Ques: ")+"Which of the following anime is the oldest?\na) Dragon Ball\nb) Naruto\nc) Hunter x Hunter\nd) Full Metal Alchemist\n"+chalk.green("Ans: "),
      answer: "a",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following anime is the longest?\na) Full Metal Alchemist: Brotherhood\nb) Hunter x Hunter\nc) Devilman Crybaby\nd) Code Geass\n"+chalk.green("Ans: "),
      answer: "b",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following anime doesn't have a season 2?\na) Code Geass\nb) Death Parade\nc) Re:zero\nd) Naruto\n"+chalk.green("Ans: "),
      answer: "b",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following anime is latest as per the release date of first episode?\na) Black Clover\nb) Dr. Stone\nc) Jujutsu Kaisen\nd) Tower of God\n"+chalk.green("Ans: "),
      answer: "c",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following anime is NOT ongoing?\na) The Promised Neverland\nb) Dr. Stone\nc) Jujutsu Kaisen\nd) Death Parade\n"+chalk.green("Ans: "),
      answer: "d", 
    },
    {
      question: chalk.red("Ques: ")+"Which of the following is NOT an anime movie?\na) Your Lie in April\nb) Your Name\nc) I want to eat your pancreas\nd) A silent voice\n"+chalk.green("Ans: "),
      answer: "a",
    },
    {
      question: chalk.red("Ques: ")+"Which anime movie is the highest grossing in Japan?\na) Spirited Away\nb) Demon Slayer Movie\nc) Your Name\nd) Weathering with you\n"+chalk.green("Ans: "),
      answer: "b",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following anime is NOT a Netflix Original?\na) Devilman Crybaby\nb) Great Pretender\nc) Darwin's game\nd) Kakegurui\n"+chalk.green("Ans: "),
      answer: "c",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following completed anime is the shortest?\na) Devilman Crybaby\nb) Another\nc) Death note\nd) Erased\n"+chalk.green("Ans: "),
      answer: "a",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following is NOT a sports anime?:\na) Haikyuu\nb) One  Outs\nc) Kuroko No Basket\nd) Darwin's game\n"+chalk.green("Ans: "),
      answer: "d"
    },
  ];

  for(var i=0;i<questionsAnime.length;i++)
  {
    playGame(questionsAnime[i].question, questionsAnime[i].answer);
  }

}

else
{

  console.log("\nWelcome",chalk.red.underline.bold(userName),"to the non-anime tv series quiz.\n");

  console.log(chalk.yellowBright.bold("How to Play?\n"), "Ques: Some random question with four options:\na) Option1\nb) Option2\nc) Option3\nd) Option4\nAns: a\nScore: 1\nLevel: 1\n\nThere is a system of levels also in this quiz, as you answer 5 questions correctly, you will advance to next level.\n");

  var questionsNonAnime = [
    {
      question: chalk.red("Ques: ")+"Which of the following TV show was previously named \"Insomnia Cafe\"?\na) The Big Bang Theory\nb) Friends\nc) Brooklyn 99\nd) How I met your mother\n"+chalk.green("Ans: "),
      answer: "b",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following sitcom has the most number of seasons?\na) Friends\nb) The Big Bang Theory\nc) The Office\nd) How to get away with murder\n"+chalk.green("Ans: "),
      answer: "b",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following sitcom is shortest of all\na) Friends\nb) How I met your mother\nc) The Big Bang Thoery\nd) Brooklyn 99\n"+chalk.green("Ans: "),
      answer: "d",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following tv series can NOT be found on Netflix India?\na) Friends\nb) You\nc) Dexter\nd) Mind Hunter\n"+chalk.green("Ans: "),
      answer: "c",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following tv series is highest rated?\na) Game of Thrones\nb) Breaking Bad\nc) Sherlock\nd) Black Mirror\n"+chalk.green("Ans: "),
      answer: "b", 
    },
    {
      question: chalk.red("Ques: ")+"Which of the following tv series takes place in Miami?\na) Dexter\nb) You\nc) Mindhunters\nd) Brooklyn 99\n"+chalk.green("Ans: "),
      answer: "a",
    },
    {
      question: chalk.red("Ques: ")+"Which tv series is the latest(based on release date of last episode)?\na) Dexter\nb) Brooklyn 99\nc) Friends\nd) Vampire Diaries\n"+chalk.green("Ans: "),
      answer: "b",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following tv series is completed?(as of January 2021)\na) The Boys\nb) Lucifer\nc) Sherlock\nd) Breaking Bad\n"+chalk.green("Ans: "),
      answer: "d",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following tv series is lowest rated?\na) Peaky Blinders\nb) How to get away with murder\nc) You\nd) The Boys\n"+chalk.green("Ans: "),
      answer: "c",
    },
    {
      question: chalk.red("Ques: ")+"Which of the following is NOT an Indian TV series\na) Sacred Games\nb) Ghoul\nc) A simple murder\nd) Modern Family\n"+chalk.green("Ans: "),
      answer: "d"
    },
  ];

  for(var i=0;i<questionsNonAnime.length;i++)
  {
    playGame(questionsNonAnime[i].question, questionsNonAnime[i].answer);
  }

}

//Checking if the player broke the high score
for(var j = 0;j<highScores.length;j++)
{
  if (highScores[j].score1<=score)
  {
    console.log(chalk.red.underline.bold("\nCongratulations!"), "you have beaten the highscore, kindly send the screenshot with your name so that we can update the database.");
    break;
  }
}