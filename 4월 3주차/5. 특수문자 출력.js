'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('close', function () {
  const str = `!@#$%^&*(\\'"<>?:;`; //``백틱 안에서 문자열 처리 되지만 역슬래시의 경우 출력하고 싶으면 역슬래시를 하나 더 추가해줘야함...
  console.log(str);
});
