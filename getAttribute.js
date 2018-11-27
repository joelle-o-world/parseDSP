const getWord = require("./getWord.js")
const countWhitespace = require("./countWhitespace")

function getAttribute(str, i0) {
  i0 = i0 || 0

  var property = getWord(str, i0)
  if(!property)
    return null

  var i1 = i0 + property.length + countWhitespace(str, i0 + property.length)

  if(str[i1] != "=" && str[i1] != ":")
    return null
  

  var i2 = i1 + 1 + countWhitespace(str, i1+1)

  var value = getExpression(str, i2)
  if(!value)
    return null

  return {
    type: "attribute",
    property: property,
    value: value,
    "length": i2-i0 + value.length
  }
}
module.exports = getAttribute

const getExpression = require("./getExpression.js")
