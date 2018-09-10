
import readlineSync from "readline-sync";

const numQuestion = 3;

const run = () => {
  console.log("Welcome to the Brain Games!\n");
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}`);
};

const game = (getQuestionAndRightAnswer, getCondition) => {
  let answer = "";
  let question = "";
  let rightAnswer = "";
  console.log("Welcome to the Brain Games!");
  console.log(getCondition);
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}\n`);
  for (let i = 0; i < numQuestion; i += 1) {
    [question, rightAnswer] = getQuestionAndRightAnswer();

    console.log(`Question: ${question}`);
    answer = readlineSync.question("Your answer: ");

    if (answer === rightAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { run, game };
