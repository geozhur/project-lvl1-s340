import { game, makeQuestionAndCorrectAnswer, rand } from '..';

const isEven = num => (num % 2 === 0);

const launchGameTheEven = () => {
  const question = rand(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return makeQuestionAndCorrectAnswer(question, correctAnswer);
};

const condition = 'Answer "yes" if number even otherwise answer "no".';

const run = () => {
  game(launchGameTheEven, condition);
};

export default run;
