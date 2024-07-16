/*
    알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
*/

function solution(myString) {
  let stringArr = myString.split('');
  let changeAlphabet = stringArr.map((s) => {
    if (s === s.toUpperCase()) {
      return s.toLowerCase();
    } else {
      return s;
    }
  });
  return changeAlphabet.join('');
}

//그러나 myString.toLowerCase(); 로 해주면 된다...ㅎ
