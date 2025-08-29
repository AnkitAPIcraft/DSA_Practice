function countUnique (arr) {
  let countObj = {};
  let uniqueArr = []
  for (const ele of arr ) {
    if (countObj[ele]) {
        countObj[ele]++
    } else {
        uniqueArr.push(ele)
        countObj[ele] = 1;
    }
  }
  return uniqueArr.length
}

const arr = [1, 2, 2, 3, 4]
console.log(countUnique(arr));