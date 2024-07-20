'use strict';

/*
    문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
    https://school.programmers.co.kr/learn/courses/30/lessons/181871
*/

function solution(myString, pat) {
  //대문자가 있을 경우를 생각해 toLowerCase();
  let string = myString.toLowerCase();
  let patStr = pat.toLowerCase();

  //갯수 변수
  let counter = 0;

  //indexOf => string객체에서 주어진 값과 일치하는 첫 번째 인덱스 반환
  let index = string.indexOf(patStr);

  //while => indexOf가 -1을 찾을때까지 문자열 갯수를 찾고 개수를 셈
  //마지막으로 찾은 문자열의 인덱스보다 1개 앞에서 다시 탐색하면서 동일한 문자열을 세지 않도록함
  //그리고 -1을 리턴하면 더 이상 찾을 문자열이 없기 때문에 while문을 종료
  while (index !== -1) {
    counter++;
    index = string.indexOf(patStr, index + 1);
  }
  return counter;
}

/*
    다른 사람 풀이를 참고 하니 정규식을 이용해 사용한 방법과 반복문을 이용한 방법이 있었음.
    https://devjss.com/javascript-count-word-in-string/#google_vignette
    이 분의 블로그를 참조하여 while문을 사용하여 문제 해결 
*/
