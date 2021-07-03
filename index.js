var readlineSync = require("readline-sync");
var chalk = require("chalk");

var username = readlineSync.question("What's your name ? ");
console.log("Hi " + username + "!");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(chalk.green.inverse("You are right!!!"));
  } else {
    console.log(chalk.red.inverse("You are wrong :("));
  }
  console.log("---------------");
}

var questions = [
  {
    question: "How many World Cups did India win ? ",
    answer: "2",
  },
  {
    question: "In which year did India 2nd World Cup ? ",
    answer: "2011",
  },
  {
    question: "How many players does a team have ? ",
    answer: "11",
  },
  {
    question: "Who is the captain of India ? ",
    answer: "Virat Kohli",
  },
];

for (var i = 0; i < questions.length; i++) {
  var question = questions[i].question;
  var answer = questions[i].answer;

  play(question, answer);
}

var highestScore = 0;
var leaderboard = [2, 0, 1];

for (var i = 0; i < leaderboard.length; i++) {
  if (highestScore < leaderboard[i]) {
    highestScore = leaderboard[i];
  }
}

leaderboard.push(score);

if (score > highestScore) {
  console.log(chalk.green("Congratulations, you are the highest scorer!!!"));
  console.log("Your score : ", score);
  console.log(" ");
  console.log("Previous best : ", highestScore);
} else {
  console.log("Your score : ", score);
  console.log(" ");
  console.log("Highest score : ", highestScore);
}
