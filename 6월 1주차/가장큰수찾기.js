function solution(array) {
  var answer = [];
  let maxNum = Math.max(...array);
  let maxNumIdx = array.indexOf(maxNum);
  answer.push(maxNum, maxNumIdx);
  return answer;
}
