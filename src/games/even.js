
import { game } from "..";

const isEven = num => (num % 2 === 0);

const even = () => {
  const rand = Math.floor((Math.random() * 100) + 1);
  const question = rand;
  const rightAnswer = isEven(rand) ? "yes" : "no";
  return [question, rightAnswer];
};

const getCondition = "Answer \"yes\" if number even otherwise answer \"no\".\n";

const run = () => {
  game(even, getCondition);
};

export default run;
