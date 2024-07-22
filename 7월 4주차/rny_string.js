/*
    'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/
function solution(rny_string) {
  let searchM = 'm';
  let changeRN = 'rn';
  return rny_string.replaceAll(searchM, changeRN);
}

/*
    replace() 메서드는 pattern의 단일, 일부 혹은 모든 일치 항목,
    replaceAll() 메서드는 pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환합니다. 
    pattern은 문자열 또는 RegExp일 수 있으며 replacement는 각 일치 항목에 대해 호출되는 문자열 또는 함수일 수 있습니다. 
    원래 문자열은 변경되지 않습니다.
*/
