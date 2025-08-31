function findOdds(arr) {
  let oddArr = [];

  function helperOdd(subArr) {
    if (subArr.length === 0) return;
    if (subArr[0] % 2 !== 0) {
      oddArr.push(subArr[0]);
    }
    helperOdd(subArr.slice(1));
  }
  helperOdd(arr);
  return oddArr;
}

console.log(findOdds([1, 2, 3, 4, 5, 6, 7]));
