function getExpression(str, startIndex) {
  startIndex = startIndex || 0

  var ref = getObjectReference(str, startIndex)
  if(ref)
    return ref

  var n = getNumber(str, startIndex)
  if(n)
    return n

  var obj = getObjectOrObjectProperty(str, startIndex)
  if(obj)
    return obj

  return null
}
module.exports = getExpression

const getObjectOrObjectProperty = require("./getObjectOrObjectProperty")
const getObjectReference = require("./getObjectReference.js")
const getNumber = require("./getNumber.js")
