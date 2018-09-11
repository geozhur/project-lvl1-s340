
import { game, makeQuestionAndRightAnswer } from "..";
import { cons, cdr, car } from "hexlet-pairs";

const getActAndrightAnswer = (num1, num2) => {
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


const calc = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);
  const ActAndrightAnswer = getActAndrightAnswer(num1, num2);
  const question = `${num1} ${car(ActAndrightAnswer)} ${num2}`;
  const rightAnswer = cdr(ActAndrightAnswer);
  return makeQuestionAndRightAnswer(question, String(rightAnswer));
};

const condition = "What is the result of the expression?";

const run = () => {
  game(calc, condition);
};

export default run;
