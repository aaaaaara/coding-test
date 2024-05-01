'use strict';

/*
    n이 홀수라면 n이하의 홀수인 모든 양의 정수의 합
    n이 짝수라면 n이하의 짝수인 모든 양의 정수의 제곱의 합
*/
/*
        n이 홀수라면 ?
        n 이하의 양의 홀수 예) n = 7 , 7이하의 홀수 [1 ,3, 5, 7]
    */
function solution(n) {
  let oddNumArray = []; //홀수
  let evenNumArray = []; //짝수
  let answer = 0;
  let initialValue = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenNumArray.push(Math.pow(i, 2));
    } else {
      oddNumArray.push(i);
    }
  }

  if (n % 2 === 0) {
    return (answer = evenNumArray.reduce(
      (acc, cur) => acc + cur,
      initialValue
    ));
  } else {
    return (answer = oddNumArray.reduce((acc, cur) => acc + cur, initialValue));
  }
}
