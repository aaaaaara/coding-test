/*
₩알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

단, 알파벳 대문자와 소문자는 구분하지 않습니다.
*/

function solution(myString, pat) {
  let lowString = myString.toLowerCase();
  let lowPat = pat.toLowerCase();
  return lowString.match(lowPat) ? 1 : 0;
}
//match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다. => 정규식 검사때 사용하니까 일반 문자열 비교같은건 inculdes가 좋을듯

function solution2(myString, pat) {
  let lowString = myString.toLowerCase();
  let lowPat = pat.toLowerCase();
  return lowString.includes(lowPat) ? 1 : 0;
}
