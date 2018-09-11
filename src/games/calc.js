
import { game } from "..";

const calc = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);
  let rightAnswer = "";
  let act = "";
  switch (Math.floor((Math.random() * 3) + 1)) {
  case 1:
    act = "+";
    rightAnswer = num1 + num2;
    break;
  case 2:
    act = "-";
    rightAnswer = num1 - num2;
    break;
  case 3:
    act = "*";
    rightAnswer = num1 * num2;
    break;
  default:
  }
  const question = `${num1} ${act} ${num2}`;
  return [question, String(rightAnswer)];
};

const getCondition = "What is the result of the expression?\n";

const run = () => {
  game(calc, getCondition);
};

export default run;
