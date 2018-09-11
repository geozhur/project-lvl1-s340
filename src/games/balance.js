import { game, makeQuestionAndRightAnswer } from "..";
import { cons, cdr, car } from "hexlet-pairs";

const sortDigitalInNum = num => ((num.split("")).sort()).join("");

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


const balance = () => {
  const num = Math.floor((Math.random() * 1000) + 1);
  const rightAnswer = sortDigitalInNum(setBalance(num));
  const question = `${num}`;
  return makeQuestionAndRightAnswer(question, String(rightAnswer));
};

const condition = "Balance the given number.";

const run = () => {
  game(balance, condition);
};

export default run;
