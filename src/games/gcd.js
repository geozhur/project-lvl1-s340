
import { game, makeQuestionAndRightAnswer } from "..";


const getGcd = (num1, num2) => (num2 !== 0 ? getGcd(num2, num1 % num2) : num1);

const gcd = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);
  const rightAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return makeQuestionAndRightAnswer(question, String(rightAnswer));
};

const condition = "Find the greatest common divisor of given numbers.";

const run = () => {
  game(gcd, condition);
};

export default run;
