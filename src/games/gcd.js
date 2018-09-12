import { game, makeQuestionAndCorrectAnswer } from '..';


const getGcd = (num1, num2) => (num2 !== 0 ? getGcd(num2, num1 % num2) : num1);

const launchGameTheGcd = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);
  const correctAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return makeQuestionAndCorrectAnswer(question, String(correctAnswer));
};

const condition = 'Find the greatest common divisor of given numbers.';

const run = () => {
  game(launchGameTheGcd, condition);
};

export default run;
