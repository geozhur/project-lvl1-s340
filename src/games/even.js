
import { game, makeQuestionAndRightAnswer } from "..";

const isEven = num => (num % 2 === 0);

const even = () => {
  const question = Math.floor((Math.random() * 100) + 1);
  const rightAnswer = isEven(question) ? "yes" : "no";
  return makeQuestionAndRightAnswer(question, rightAnswer);
};

const condition = "Answer \"yes\" if number even otherwise answer \"no\".\n";

const run = () => {
  game(even, condition);
};

export default run;
