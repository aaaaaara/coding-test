'use strict';

/*
    가위 2 > 바위 0
    바위 0 > 보 5
    보 5 > 가위 2
*/

function solution(rsp) {
  let rspArr = rsp.split('');

  let result = [];
  rspArr.forEach((rsp) => {
    if (rsp === '2') {
      result.push('0');
    }
    if (rsp === '0') {
      result.push('5');
    }
    if (rsp === '5') {
      result.push('2');
    }
  });

  return result.join('');
}
