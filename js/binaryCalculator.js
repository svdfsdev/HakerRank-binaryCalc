import {
  ALL_BTNS,
  zeroDigit,
  oneDigit,
  plus,
  minus,
  multiply,
  division,
  equal,
  clear,
} from './helpers.js';

import {
  inputNumber,
  inputOper,
  inputEqual,
  inputClear,
} from './functons.js';

ALL_BTNS.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    const currentChar = event.target.innerText;

    switch (currentChar) {
      case zeroDigit:
      case oneDigit:
        inputNumber(currentChar);
        break;

      case plus:
      case minus:
      case multiply:
      case division:
        inputOper(currentChar);
        break;

      case equal:
        inputEqual();
        break;

      case clear:
        inputClear();
        break;

      default:
        break;
    }
  })
);
