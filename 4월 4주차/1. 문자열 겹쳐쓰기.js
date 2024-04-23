'use strict';

/*
    my_string의 index s부터 overwrite_string의 길이만큼을 
    문자열 overwrite_string으로 바꾼 문자열 return
    
    예)
    my_string = "He11oWor1d" //1부터  overwrite_string.length(7)까지 overwrite_string으로 바꾸기
    s = 2
    overwrite_string = "lloWorl"
    
    
*/

function solution(my_string, overwrite_string, s) {
    
  let my_stringArray = my_string.split('');
  my_stringArray.splice(s, overwrite_string.length, overwrite_string);
  return my_stringArray.join('');
  
}