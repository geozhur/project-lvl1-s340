
import { game } from "..";


const getGcd = (numIn1, numIn2) => {
  let num1 = numIn1;
  let num2 = numIn2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num2;
};

const gcd = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);
  const rightAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, String(rightAnswer)];
};

const getCondition = "Find the greatest common divisor of given numbers.\n";

const run = () => {
  game(gcd, getCondition);
};

export default run;
