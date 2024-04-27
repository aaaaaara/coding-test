'use strict';

//나의 답변
function solution(a, b) {
    let result = 0;
    let ab = a.toString() + b.toString()
    let ba = b.toString() + a.toString()
    console.log(Number(ab), Number(ba))
    
    if(Number(ab) >= Number(ba)) {
        return result = Number(ab);
    } else {
        return result = Number(ba);
    }
    
}

//Math.max() & `` `${}`
//정적 메서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환하거나, 매개변수가 없을 경우 -Infinity를 반환합니다.
//가장 큰 수를 반환 
function solution2(a, b) {
	var answer = 0;
    return answer = Math.max(`${a}${b}`, `${b}${a}`);
}