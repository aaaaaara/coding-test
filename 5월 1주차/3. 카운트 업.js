'use strict';

/*
    문제: 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
    예) 
    3부터 10까지의 숫자들을 담은 리스트 [3, 4, 5, 6, 7, 8, 9, 10]를 return합니다.
*/
function solution(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}
