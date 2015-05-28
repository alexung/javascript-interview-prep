function outputDupes(arr) {
  var dupes = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1] && dupes.indexOf(arr[i]) == -1) {
            dupes.push(arr[i]);
      }
  }
  return dupes;
}
