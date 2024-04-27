'use strict';

/*
	문제: 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
	예)
	my_string =  "string"
	k = 3
	result = "stringstringstring"

	my_string = "love"
	k = 10
	result = "lovelovelovelovelovelovelovelovelovelove"
*/

//나의 답변 repeat메서드 사용
function solution(my_string, k) {
  var answer = my_string.repeat(k);

  return answer;
}

//for문 답변 참고
function solution2(my_string, k) {
  var answer = '';

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}
