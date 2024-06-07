'use strict';

//cheat sheet
//연산

//틸트?
//date()
console.log(new Date());
console.log(new Date().getFullYear()); //현재 년도

//eval() 문자와 숫자를 같이 쓸때 연산 어쩌구 주의사항:실무에선 안씀 mdn에서도 사용을 지양하라고 함
console.log(eval(100 + 100));
console.log(eval('2 + 2')); // Expected output: 4
console.log(eval(new String('2 + 2'))); // Expected output: 2 + 2
console.log(eval('2 + 2') === eval('4')); // Expected output: true
console.log(eval('2 + 2') === eval(new String('2 + 2'))); // Expected output: false

//문자열을 숫자로 변환
console.log(parseInt('100', 10));

//Math
//string string은 유사배열
//array
console.log(['1', '2', '3'].map((x) => parseInt(x))); // [1,2,3]
console.log([1, 2, 3].reduce((acc, cur) => acc + cur, 0)); // 6
console.log([1, 2, 3, 4, 5].slice(1)); //index 1번부터
console.log([1, 2, 3, 4, 5].slice(1, 2)); //index 1번부터 - 2번까지
//reduce
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
//reverse  주의: 원본배열도 수정하기 때문에 전개연산자로 복사해서 사용

//정규식
