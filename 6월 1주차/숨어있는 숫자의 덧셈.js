'use strict';

/*
    정규식
*/
function solution(my_string) {
  var answer = 0;
  let regex = /[^0-9]/g;
  let num = my_string.replace(regex, '');
  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i]);
  }
  return answer;
}
