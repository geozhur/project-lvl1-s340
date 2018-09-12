import { game, makeQuestionAndCorrectAnswer, rand } from '..';
import { cons, cdr, car } from 'hexlet-pairs';

const lengthProgression = 10;
const minFirstElemProgression = 10;
const maxFirstElemProgression = 100;
const maxStepProgression = 10;

const makeProgression = (numFirst, stepProgression, keyAnswer) => {
  const numMax = numFirst + lengthProgression * stepProgression;
  const makeElemsProgression = (iter, progressionAndCorrectAnswer) => {
    if (iter === numMax) {
      return progressionAndCorrectAnswer;
    }

    const itemAnswer = keyAnswer * stepProgression + numFirst;
    const progression = (iter === itemAnswer) ? `${car(progressionAndCorrectAnswer)}.. ` : `${car(progressionAndCorrectAnswer)}${iter} `;
    const correctAnswer = (iter === itemAnswer) ? String(iter) : cdr(progressionAndCorrectAnswer);
    return makeElemsProgression(iter + stepProgression, cons(progression, correctAnswer));
  };
  return makeElemsProgression(numFirst, cons('', 0));
};

const launchGameTheProgression = () => {
  const numFirst = rand(minFirstElemProgression, maxFirstElemProgression);
  const stepProgression = rand(1, maxStepProgression);
  const keyAnswer = rand(0, lengthProgression);

  const progressionAndCorrectAnswer = makeProgression(numFirst, stepProgression, keyAnswer);
  const question = car(progressionAndCorrectAnswer);
  const correctAnswer = cdr(progressionAndCorrectAnswer);
  return makeQuestionAndCorrectAnswer(question, correctAnswer);
};

const condition = 'What number is missing in this progression?';

const run = () => {
  game(launchGameTheProgression, condition);
};

export default run;
