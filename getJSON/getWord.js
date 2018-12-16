
const findCoordinate = require("./findCoordinate")
const wordRegex = /[a-zA-Z_]/

function getWord(str, startIndex) {
  startIndex = startIndex || 0

  for(var i=startIndex; i<str.length; i++) {
    var c = str[i]
    if(!wordRegex.test(c))
      if(i==startIndex)
        return null
      else
        return str.slice(startIndex, i)
  }
  console.warn(
    "WARNING: open ended word",
    "\'"+str.slice(startIndex, i)+"\'",
    "at", findCoordinate(str, i)
  )
  return str.slice(startIndex, i)
}
module.exports = getWord
