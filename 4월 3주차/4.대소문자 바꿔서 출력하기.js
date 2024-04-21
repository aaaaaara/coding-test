'use strict';

/*
    1 ≤ str의 길이 ≤ 20
    str은 알파벳으로 이루어진 문자열입니다.
    
    예)
    입력 : aBcDeFg
    출력 : AbCdEfG
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  const strArray = str.split(''); //문자열을 배열로 바꿔준다

  const test = strArray.map((s) => {
    //배열을 순회하면서
    if (s !== s.toUpperCase()) {
      //대문자가 아니면
      return s.toUpperCase(); //대문자로 리턴
    } else {
      return s.toLowerCase(); //소문자로 리턴
    }
  });
  return console.log(test.join('')); //배열을 문자열로 바꾼뒤에 출력
});
