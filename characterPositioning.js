function countLetter (string) {
  var letterCounts = {};
  for(var i = 0; i < string.length; i++) {
    var letter = string[i];
    if(letter === ' ') {
      continue;
    }
    if(letterCounts[letter] === undefined) {
      letterCounts[letter] = [];
    }

    letterCounts[letter].push(i);
  }
  return letterCounts;
}

console.log(countLetter('Lighthouse in the house'));

