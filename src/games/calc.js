
import { game, makeQuestionAndCorrectAnswer } from "..";
import { cons, cdr, car } from "hexlet-pairs";

const getActAndCorrectAnswer = (num1, num2) => {
  switch (Math.floor((Math.random() * 3) + 1)) {
    case 1:
      return cons("+", num1 + num2);
    case 2:
      return cons("-", num1 - num2);
    case 3:
      return cons("*", num1 * num2);
    default:
  }
  return cons("+", num1 + num2);
};


const calcGame = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);
  const ActAndCorrectAnswer = getActAndCorrectAnswer(num1, num2);
  const question = `${num1} ${car(ActAndCorrectAnswer)} ${num2}`;
  const correctAnswer = cdr(ActAndCorrectAnswer);
  return makeQuestionAndCorrectAnswer(question, String(correctAnswer));
};

const condition = "What is the result of the expression?";

const run = () => {
  game(calcGame, condition);
};

export default run;
