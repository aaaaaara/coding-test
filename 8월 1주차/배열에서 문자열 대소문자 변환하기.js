/*
    문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

    index가 짝수면 소문자로 변환, 홀수면 대문자로 
*/

function solution(strArr) {
  let answer = [];
  answer = strArr.map((str, i) => {
    if (i % 2 === 0) {
      return str.toLowerCase();
    } else {
      return str.toUpperCase();
    }
  });
  return answer;
}
