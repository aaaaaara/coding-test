'use strict';

/*
    문제 : 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

//계속 if문으로 쓰다가 삼항연산자로 써보았음
