import { RES } from './helpers.js';

let numA = '';
let numB = '';
let oper = '';
let curruntNumber = '';

export const inputClear = () => {
  RES.innerText = '';
  numA = '';
  numB = '';
  oper = '';
  curruntNumber = '';
};

export const inputEqual = () => {
  numB = curruntNumber;
  RES.innerText = binaryCalc(numA, numB, oper);
};

export const inputOper = (currentChar) => {
  RES.innerText += currentChar;
  numA = curruntNumber;
  curruntNumber = '';
  oper = currentChar;
};

export const inputNumber = (currentChar) => {
  RES.innerText += currentChar;
  curruntNumber += currentChar;
};

const getDecNumber = (biNumber) => {
  return parseInt(biNumber, 2);
};

const convertToBinary = (decNumber) => {
  const tmpArr = [];
  let tmpRes = decNumber;

  while (parseInt(tmpRes) !== 1) {
    let biDigit = parseInt(tmpRes % 2);
    tmpArr.push(biDigit);
    tmpRes /= 2;
  }
  tmpArr.push(parseInt(tmpRes));

  return tmpArr.reverse().join('');
};

const mathOper = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export const binaryCalc = (binA, binB, oper) => {
  const decA = getDecNumber(binA);
  const decB = getDecNumber(binB);
  const decResult = parseInt(mathOper[oper](decA, decB));

  return convertToBinary(decResult);
};
