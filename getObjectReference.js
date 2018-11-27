const getWordWithDigits = require("./getWordWithDigits.js")

function getObjectReference(str, startIndex) {
  startIndex = startIndex || 0

  if(str[startIndex] != "#")
    return null

  var ref = getWordWithDigits(str, startIndex+1)
  if(ref)
    return {
      id: ref,
      "length": ref.length+1,
      type: "id",
    }
  else
    return null
}
module.exports = getObjectReference
