function solution(arr1, arr2) {
  let result = 0;
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let sumArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
  let sumArr2 = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1Length > arr2Length) {
    return (result = 1);
  }
  if (arr1Length < arr2Length) {
    return (result = -1);
  }
  if (arr1Length === arr2Length && sumArr1 > sumArr2) {
    return (result = 1);
  }
  if (arr1Length === arr2Length && sumArr1 < sumArr2) {
    return (result = -1);
  }

  return result;
}
