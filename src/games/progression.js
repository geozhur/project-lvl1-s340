
import { game, makeQuestionAndCorrectAnswer } from "..";
import { cons, cdr, car } from "hexlet-pairs";

const lengthProgression = 10;
const minFirstElemProgression = 10;
const maxFirstElemProgression = 100;
const maxStepProgression = 10;

const progressionGame = () => {
  const numFirst = Math.floor((Math.random() * maxFirstElemProgression) + 1
         + minFirstElemProgression);
  const stepProgression = Math.floor((Math.random() * maxStepProgression) + 1);
  const keyAnswer = Math.floor((Math.random() * lengthProgression));
  const numMax = numFirst + lengthProgression * stepProgression;

  const Item = (iter, progression) => {
    if (iter === numMax) {
      return progression;
    }

    const itemAnswer = keyAnswer * stepProgression + numFirst;
    const progressionOut = (iter === itemAnswer) ? `${car(progression)}.. ` : `${car(progression)}${iter} `;
    const correctAnswer = (iter === itemAnswer) ? String(iter) : cdr(progression);
    return Item(iter + stepProgression, cons(progressionOut, correctAnswer));
  };

  const progressionAndCorrectAnswer = Item(numFirst, cons("", 0));
  const question = car(progressionAndCorrectAnswer);
  const correctAnswer = cdr(progressionAndCorrectAnswer);
  return makeQuestionAndCorrectAnswer(question, correctAnswer);
};

const condition = "What number is missing in this progression?";

const run = () => {
  game(progressionGame, condition);
};

export default run;
