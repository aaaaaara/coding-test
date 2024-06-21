function solution(my_string, is_prefix) {
  let str = my_string.slice(0, is_prefix.length);
  return str === is_prefix ? 1 : 0;
}

/*
    접두사이면 1
    아니면 0

    
*/
