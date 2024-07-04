/*
    한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_str) {
  let numStrArr = num_str.split('');
  let numArr = [];
  let sum = 0;
  numArr = numStrArr.map((num) => Number(num));
  return (sum = numArr.reduce((acc, cur) => acc + cur, 0));
}
