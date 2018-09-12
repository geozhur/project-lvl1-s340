import { game, makeQuestionAndCorrectAnswer, rand } from '..';


const getGcd = (num1, num2) => (num2 !== 0 ? getGcd(num2, num1 % num2) : num1);

const launchGameTheGcd = () => {
  const num1 = rand(1, 100);
  const num2 = rand(1, 100);
  const correctAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return makeQuestionAndCorrectAnswer(question, String(correctAnswer));
};

const condition = 'Find the greatest common divisor of given numbers.';

const run = () => {
  game(launchGameTheGcd, condition);
};

export default run;
