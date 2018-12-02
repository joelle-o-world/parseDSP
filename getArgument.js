function getArgument(str, i0) {
  var id = getObjectReference(str, i0)
  if(id) return id

  var attr = getAttribute(str, i0)
  if(attr)
    return attr

  var arg = getExpression(str, i0)
  if(arg)
    return {
      type: "unnamedArgument",
      value: arg,
      length: arg.length,
    }

  var flag = getWord(str, i0)
  if(flag)
    return {
      type:"flag",
      flag: flag,
      length: flag.length,
    }

  return null
}

module.exports = getArgument
const getObjectReference = require("./getObjectReference.js")
const getAttribute = require("./getAttribute")
const getWord = require("./getWord.js")
const getExpression = require("./getExpression")
