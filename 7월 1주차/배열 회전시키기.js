'use strict';

/*
    문제:
    정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

    입출력 예 #1
    numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
    
    입출력 예 #2
    numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.

*/

function solution(numbers, direction) {
  const RIGHT = 'right';
  const LEFT = 'left';
  let removeNum = '';
  let newNumArr = [];
  if (direction === RIGHT) {
    removeNum = numbers.pop();
    numbers.unshift(removeNum);
  }
  if (direction === LEFT) {
    removeNum = numbers.shift();
    numbers.push(removeNum);
  }
  return numbers;
}

/*
     마지막 요소 제거 pop
     마지막에 추가 push
     첫번째 요소 제거 shift
     첫번째에 추가 unshift
 */
