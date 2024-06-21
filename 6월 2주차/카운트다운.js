/**
 * 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */
function solution(start, end_num) {
  let answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

/*
    for문을 사용할때 i =0 부터 시작해서 i++ 형태를 많이 사용했었는데 
    주어진 매개변수와 i--;를 사용해본 케이스
*/
