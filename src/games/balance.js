import { game, makeQuestionAndCorrectAnswer } from '..';
import { cons, cdr, car } from 'hexlet-pairs';

const removeIndex = (index, str) => {
  const end = str.substr(index + 1, str.length - index - 1);
  const begin = str.substr(0, index);
  return `${begin}${end}`;
};

const sortDigitalInNum = (num) => {
  if (num.length === 0) {
    return '';
  }
  const iterNum = (iter, min) => {
    if (iter === String(num).length) {
      return min;
    }
    return iterNum(iter + 1, num[min] > num[iter] ? iter : min);
  };

  const indexMin = iterNum(0, 0);
  return num[indexMin] + sortDigitalInNum(removeIndex(indexMin, num));
};

// const sortDigitalInNum = num => ((num.split("")).sort()).join("");

const getMaxAndMinDigital = (num) => {
  const iterNum = (iter, max, min) => {
    if (iter === String(num).length) {
      return cons(max, min);
    }
    return iterNum(iter + 1, Math.max(max, num[iter]), Math.min(min, num[iter]));
  };
  return iterNum(0, 0, 9);
};

const setBalance = (num) => {
  const iterBalance = (iter) => {
    const MaxAndMinDigital = getMaxAndMinDigital(iter);
    const max = Number(car(MaxAndMinDigital));
    const min = Number(cdr(MaxAndMinDigital));
    if (max - min < 2) {
      return iter;
    }

    const iterMaxReplace = iter.replace(String(max), String(max - 1));
    const iterMinReplace = iterMaxReplace.replace(String(min), String(min + 1));

    return iterBalance(iterMinReplace);
  };

  return iterBalance(String(num));
};


const launchGameTheBalance = () => {
  const num = Math.floor((Math.random() * 1000) + 1);
  const correctAnswer = sortDigitalInNum(setBalance(num));
  const question = `${num}`;
  return makeQuestionAndCorrectAnswer(question, String(correctAnswer));
};

const condition = 'Balance the given number.';

const run = () => {
  game(launchGameTheBalance, condition);
};

export default run;
