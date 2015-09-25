var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {
  for (idx in censoredWords) {
    inStr = inStr.replace(censoredWords[idx], "****"});
  }

  for (var idx in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****");
  }

  return inStr;
}

function addCensoredWord(word) {
  customCensoredWords.push(word);
}

function getCensoreWords() {
  return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;

exports.addCensoredWord = addCensoredWord;
exports.getCensoreWords = getCensoreWords;
