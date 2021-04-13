const chalk = require('chalk');
const readlineSync = require('readline-sync')

var score = 0;
const questions = [
  {
    q: "Which is the name of collge in movie?",
    options: "a: Indian College, b: Imperial College of Engineering, c: IIT",
    a: "b",
  },
  {
    q: "How much power nap viru takes",
    options: "a: 6 minutes, b: 10 minutes, c: 7.5 minutes",
    a: "c",
  },
  {
    q: "With which hand Viru writes?",
    options: "a: Left, b: Right, c: Both",
    a: "c",
  },
  {
    q: "What does rancho suggests to use instead of space pen?",
    options: "a: Highlighter, b: Pencil, c: Chalk",
    a: "b",
  },
];

const validOptions = ['a', 'b', 'c'];

function ask(question) {
  console.log(chalk.yellow(question.q));
  const answer = readlineSync.question(chalk.cyan(question.options));
  if (validOptions.includes(answer)) {
    if (answer == question.a) {
      console.log(chalk.green("That is correct!!"));
      console.log(chalk.cyan("Your score is "), chalk.bold.yellow(++score));
    } else {
      console.log(chalk.redBright("Wrong answer :("));
    }
  } else {
    console.log(chalk.red("Please select one of the valid options", validOptions));
    ask(question);
  }
  console.log("\n")
}

console.log(chalk.green("Welcome to 3idiots quiz!!\nLets check how much of a 3idiots fan you are!!"));

var userName = readlineSync.question("What's Your name? ");

console.log("Hi " + userName + ", Let's get started\n");

for (var i = 0; i < questions.length; i++) {
  ask(questions[i]);
}

console.log("------------------\n\n------------------")
console.log("Your score is ", chalk.bold.green(score))