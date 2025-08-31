function countDown(num) {
  if (num === 0) {
    return console.log("All done");
  }
  console.log(num);
  num--;
  return countDown(num);
}

countDown(5);
