'use strict';

//1. 문자열 출력하기
{
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
    console.log(str); //console.log로 출력
  });
}

//2. a와 b 출력하기
/*
    입력 : 4 5
    출력 : a = 4 
            b= 5
*/
{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input = line.split(' ');
  }).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    console.log(`a = ${a}\n` + `b = ${b}`); // `` \n ${ } 사용
  });
}

//3. 문자열 반복해서 출력하기
{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input = line.split(' ');
  }).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n)); //str.repeat(count); repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
  });
}

//4.대소문자 바꿔서 출력하기

//5. 특수문자 출력
{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('close', function () {
    const str = `!@#$%^&*(\\'"<>?:;`; //``백틱 안에서 문자열 처리 되지만 역슬래시의 경우 출력하고 싶으면 역슬래시를 하나 더 추가해줘야함...
    console.log(str);
  });
}

//6. 덧셈식 출력하기
{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input = line.split(' ');
  }).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    console.log(`${a} + ${b} =`, a + b); //${}를 사용
  });
}
