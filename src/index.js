
import readlineSync from "readline-sync";
import { cons, car, cdr } from "hexlet-pairs";

const numQuestion = 3;

const run = () => {
  console.log("Welcome to the Brain Games!\n");
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}`);
};

const makeQuestionAndRightAnswer = (question, rightAnswer) => cons(question, rightAnswer);
const getQuestion = questionAndRightAnswer => car(questionAndRightAnswer);
const getRightAnswer = questionAndRightAnswer => cdr(questionAndRightAnswer);

const game = (getQuestionAndRightAnswer, condition) => {
  console.log("Welcome to the Brain Games!");
  console.log(condition);
  console.log();
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}`);
  console.log();

  const iterGame = (iter) => {
    if (iter === 0) {
      return true;
    }
    const QuestionAndRightAnswer = getQuestionAndRightAnswer();
    const rightAnswer = getRightAnswer(QuestionAndRightAnswer);
    const question = getQuestion(QuestionAndRightAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer === rightAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      return false;
    }
    return iterGame(iter - 1);
  };

  if (!iterGame(numQuestion, getQuestionAndRightAnswer)) {
    console.log(`Let's try again, ${name}`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export { run, game, makeQuestionAndRightAnswer };
