function validAnagram(str1, str2) {
  const length1 = str1.length;
  const length2 = str2.length;
  if (length1 !== length2) {
    return false;
  }

  let freqObj = {};

  for (const ele of str1) {
    freqObj[ele] = ++freqObj[ele] || 1;
  }
  console.log(freqObj);

  for (const ele of str2) {
    if (!freqObj[ele]) return false;
    --freqObj[ele];
  }
  console.log(freqObj);
  return true;
}

const str1 = "abcdea";
const str2 = "aabcde";

console.log(validAnagram(str1, str2));
