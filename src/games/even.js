
import { game, makeQuestionAndCorrectAnswer } from "..";

const isEven = num => (num % 2 === 0);

const evenGame = () => {
  const question = Math.floor((Math.random() * 100) + 1);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return makeQuestionAndCorrectAnswer(question, correctAnswer);
};

const condition = "Answer \"yes\" if number even otherwise answer \"no\".";

const run = () => {
  game(evenGame, condition);
};

export default run;
