function reverseWords(str) {
  var arr = str.split(' ');
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join(' ');
}
