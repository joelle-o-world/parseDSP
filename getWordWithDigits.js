
const wordRegex = /[a-zA-Z0-9_]/

function getWordWithDigits(str, startIndex) {
  startIndex = startIndex || 0

  for(var i=startIndex; i<=str.length; i++) {
    var c = str[i]
    if(!wordRegex.test(c))
      if(i==startIndex)
        return null
      else
        return str.slice(startIndex, i)
  }
}
module.exports = getWordWithDigits
