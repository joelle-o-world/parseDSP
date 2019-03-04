// variables begin with a $ sign just like in php

const getWordWithDigits = require("./getWordWithDigits.js")

function getVariable(str, startIndex) {
  startIndex = startIndex || 0

  if(str[startIndex] != "$")
    return null

  var ref = getWordWithDigits(str, startIndex+1)
  if(ref)
    return {
      id: ref,
      "length": ref.length+1,
      type: "variable",
    }
  else
    return null
}
module.exports = getVariable
