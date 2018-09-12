import { game, makeQuestionAndCorrectAnswer, rand } from '..';

const isPrime = (num) => {
  const iterPrime = (index) => {
    if (num % index === 0 || num < 2) {
      return (num === 2);
    }
    if (index < num / 2) {
      return iterPrime(index + 1);
    }
    return true;
  };
  return iterPrime(2);
};

const launchGameThePrime = () => {
  const question = rand(1, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return makeQuestionAndCorrectAnswer(question, correctAnswer);
};

const condition = 'Answer "yes" if number prime otherwise answer "no".';

const run = () => {
  game(launchGameThePrime, condition);
};

export default run;
