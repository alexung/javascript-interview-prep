function balancedParens(str) {
  var stack = [];
  var open = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  var closed = {
    '}': true,
    ']': true,
    ")": true
  }

  for (var i = 0; i < str.length; i++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0;
  //return true; if it's return true
  // instead of stack.length === 0,
  // then some false examples come up as true
};

console.log(balancedParens("{da}}"));
console.log(balancedParens("{()}"));
console.log(balancedParens("()"));
console.log(balancedParens("({"));
