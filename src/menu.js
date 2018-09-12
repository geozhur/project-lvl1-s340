import readlineSync from 'readline-sync';
import runGameBalance from './games/balance';
import runGameCalc from './games/calc';
import runGameEven from './games/even';
import runGamePrime from './games/prime';
import runGameProgression from './games/progression';
import runGameGcd from './games/gcd';

const line = str => console.log(str);

const menu = () => {
  line('\nGames:');
  line('1. The Even.');
  line('2. The Calculation.');
  line('3. The Gcd - Greatest Common Divisor.');
  line('4. The Balance.');
  line('5. The Progression.');
  line('6. The Prime.');
  line('7. Exit.');
  const numMenu = readlineSync.question('You chose: ');
  switch (numMenu) {
    case '1':
      line('\nThe Even.\n');
      runGameEven();
      break;
    case '2':
      line('\nThe Calculation.\n');
      runGameCalc();
      break;
    case '3':
      line('\nThe Gcd - Greatest Common Divisor.\n');
      runGameGcd();
      break;
    case '4':
      line('\nThe Balance.\n');
      runGameBalance();
      break;
    case '5':
      line('\nThe Progression.\n');
      runGameProgression();
      break;
    case '6':
      line('\nThe Prime.\n');
      runGamePrime();
      break;
    case '7': return false;
    default:
  }
  return true;
};

const run = () => {
  const isMenu = true;
  while (isMenu) {
    if (!menu()) {
      break;
    }
  }
};

export default run;
