const skipCommentsAndWhitespace = require("./skipCommentsAndWhitespace")
const getWord = require("./getWord")

function getDotProperty(str, i0) {
  var i1 = skipCommentsAndWhitespace(str, i0)
  if(str[i1] != ".")
    return null
  var i2 = skipCommentsAndWhitespace(str, i1+1)
  var property = getWord(str, i2)
  if(!property)
    return null
  return {
    type: "property",
    property: property,
    "length": i2-i0 + property.length,
  }
}
module.exports = getDotProperty
