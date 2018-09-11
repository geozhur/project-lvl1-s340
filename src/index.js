
import readlineSync from "readline-sync";
import { cons, car, cdr } from "hexlet-pairs";

const numQuestion = 3;

const run = () => {
  console.log("Welcome to the Brain Games!\n");
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}`);
};

const makeQuestionAndCorrectAnswer = (question, correctAnswer) => cons(question, correctAnswer);
const getQuestion = questionAndCorrectAnswer => car(questionAndCorrectAnswer);
const getCorrectAnswer = questionAndCorrectAnswer => cdr(questionAndCorrectAnswer);

const game = (getQuestionAndCorrectAnswer, condition) => {
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
    const QuestionAndCorrectAnswer = getQuestionAndCorrectAnswer();
    const correctAnswer = getCorrectAnswer(QuestionAndCorrectAnswer);
    const question = getQuestion(QuestionAndCorrectAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return false;
    }
    return iterGame(iter - 1);
  };

  if (!iterGame(numQuestion, getQuestionAndCorrectAnswer)) {
    console.log(`Let's try again, ${name}`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export { run, game, makeQuestionAndCorrectAnswer };
